# Admin Login → Dashboard Flow

This document explains end‑to‑end how the admin login works:

- How the frontend calls the API
- Where and how credentials are validated
- Where the token is stored and how it’s used to protect admin routes

---

## 1. High‑Level Flow

1. User opens `/login`.
2. User submits email + password.
3. Frontend calls the backend `POST /api/auth/login`.
4. Backend validates credentials and returns a **JWT token** + user info.
5. Frontend stores the token in `localStorage` and fetches current user.
6. After successful login, user is redirected to:
   - The protected page they originally tried to open, or
   - `/admin/` by default.
7. All subsequent API calls include `Authorization: Bearer <token>`.

---

## 2. Frontend: Login Page

**File:** [`src/pages/Login.jsx`](file:///e:/Dev/MERN/chandan/web/chandan-portfolio/src/pages/Login.jsx)

Key parts:

- Uses `useAuth()` from `AuthContext` to call `login`.
- Uses `useNavigate` and `useLocation` for post‑login redirect.

```js
const { login, isAuthenticated, isLoading } = useAuth();
const navigate = useNavigate();
const location = useLocation();

// 1. Determine where to redirect after login
const from = location.state?.from?.pathname || '/admin/';

// 2. After login succeeds, redirect there
useEffect(() => {
  if (isAuthenticated && !isLoading && loginAttempted) {
    const timer = setTimeout(() => {
      navigate(from, { replace: true });
    }, 100);
    return () => clearTimeout(timer);
  }
}, [isAuthenticated, isLoading, loginAttempted, navigate, from]);
```

On submit:

```js
const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');
  setLoginAttempted(true);

  if (!email || !password) {
    setError('Please enter both email and password');
    setLoginAttempted(false);
    return;
  }

  const result = await login(email, password);

  if (!result.success) {
    setError(result.message || 'Login failed');
    setLoginAttempted(false);
  }
};
```

**Summary:**

- `Login` doesn’t call the API directly.
- It delegates to `AuthContext.login`.
- After `isAuthenticated` becomes true, it redirects to `from` (saved by `ProtectedRoute`, see section 4).

---

## 3. Frontend: AuthContext and Token Handling

**File:** [`src/context/AuthContext.jsx`](file:///e:/Dev/MERN/chandan/web/chandan-portfolio/src/context/AuthContext.jsx)

Imports:

- `loginUser`, `getCurrentUser`, `logoutUser` from [`src/api/auth.js`](file:///e:/Dev/MERN/chandan/web/chandan-portfolio/src/api/auth.js)
- Token helpers (`getAuthToken`, `setAuthToken`, `removeAuthToken`, `isAuthenticated`) from [`src/api/config.js`](file:///e:/Dev/MERN/chandan/web/chandan-portfolio/src/api/config.js)

### 3.1 Initial auth check (app load)

```js
useEffect(() => {
  const initializeAuth = async () => {
    try {
      const token = getAuthToken();
      if (token && checkAuthToken()) {
        const userData = await getCurrentUser();
        setUser(userData.data);
        setIsAuthenticated(true);
      } else {
        removeAuthToken();
        setUser(null);
        setIsAuthenticated(false);
      }
    } catch (error) {
      removeAuthToken();
      setUser(null);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  initializeAuth();
}, []);
```

**What this does:**

- On app start, reads token from `localStorage`.
- Uses `checkAuthToken()` (decodes JWT, checks `exp`) to see if token looks valid.
- If valid, calls backend `/auth/me` to get current user.
- If invalid or error → clears token and marks user as logged out.

### 3.2 Login flow

```js
const login = async (email, password) => {
  setIsLoading(true);
  try {
    const response = await loginUser({ email, password });

    if (response.success) {
      // 1. Store JWT token
      setAuthToken(response.token);

      // 2. Fetch current user
      const userData = await getCurrentUser();
      setUser(userData.data);
      setIsAuthenticated(true);

      // 3. Small delay for state to settle
      await new Promise(resolve => setTimeout(resolve, 50));

      return { success: true };
    } else {
      return { success: false, message: response.message || 'Login failed' };
    }
  } catch (error) {
    return {
      success: false,
      message: error.message || 'Login failed. Please check your credentials.'
    };
  } finally {
    setIsLoading(false);
  }
};
```

### 3.3 Logout flow

```js
const logout = async () => {
  try {
    await logoutUser(); // currently just a client-side placeholder
  } catch (error) {
    console.error('Logout error:', error);
  } finally {
    removeAuthToken();
    setUser(null);
    setIsAuthenticated(false);
  }
};
```

---

## 4. Where token is stored and how it’s attached

**File:** [`src/api/config.js`](file:///e:/Dev/MERN/chandan/web/chandan-portfolio/src/api/config.js)

### 4.1 Storage location

```js
export const getAuthToken = () => {
  return localStorage.getItem('auth_token');
};

export const setAuthToken = (token) => {
  localStorage.setItem('auth_token', token);
};

export const removeAuthToken = () => {
  localStorage.removeItem('auth_token');
};
```

- Token is stored in **`localStorage`** under key `auth_token`.

### 4.2 Including the token in API calls

```js
export const getAuthHeaders = () => {
  const token = getAuthToken();
  return {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` })
  };
};
```

The generic API wrapper:

```js
export const apiRequest = async (url, options = {}) => {
  const fullUrl = url.startsWith('http') ? url : `${API_BASE_URL}${url}`;
  const config = {
    headers: getAuthHeaders(),
    ...options,
    headers: {
      ...getAuthHeaders(),
      ...options.headers
    }
  };

  const response = await fetch(fullUrl, config);
  await validateResponse(response);
  const data = await response.json();
  return data;
};
```

- Every request automatically gets the `Authorization: Bearer <token>` header if a token exists.

### 4.3 Token validity check

```js
export const isAuthenticated = () => {
  const token = getAuthToken();
  if (!token) return false;

  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const currentTime = Date.now() / 1000;
    return payload.exp > currentTime;
  } catch (error) {
    return false;
  }
};
```

- Decodes the JWT payload and checks `exp` against current time.

### 4.4 Handling 401 errors globally

```js
if (error.status === 401) {
  removeAuthToken();
  window.location.href = '/login';
}
```

- If backend returns 401, token is removed and user is sent back to the login page.

---

## 5. Frontend: Protected routes & redirect

**File:** [`src/components/ProtectedRoute.jsx`](file:///e:/Dev/MERN/chandan/web/chandan-portfolio/src/components/ProtectedRoute.jsx)

```js
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!isAuthenticated) {
    // Save the current URL in location.state.from
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};
```

**Behavior:**

- If user is not authenticated:
  - Redirects to `/login` and passes the current location as `state.from`.
- After login, `Login.jsx` reads `location.state.from` and redirects back there.

This is why:

- Direct visit to `/login` → after login → `/admin/`.
- Visit `/admin/blog-manager` while logged out → login → redirect back to `/admin/blog-manager`.

---

## 6. Backend: Login API and token validation

### 6.1 Login API

**File:** [`server/routes/auth.js`](file:///e:/Dev/MERN/chandan/web/chandan-portfolio/server/routes/auth.js)

Route:

```js
// POST /api/auth/login
router.post('/login', validateLogin, catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // 1. Find user by email
  const user = await User.findOne({ email }).select('+password');
  if (!user) {
    return next(new AppError('Invalid credentials', 401));
  }

  // 2. Compare password
  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    return next(new AppError('Invalid credentials', 401));
  }

  // 3. Generate JWT
  const token = jwt.sign(
    { userId: user._id, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
  );

  user.password = undefined;

  res.status(200).json({
    success: true,
    message: 'Login successful',
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      avatar: user.avatar,
      createdAt: user.createdAt
    }
  });
}));
```

**Summary:**

- `validateLogin` middleware checks request body shape (email, password).
- If user or password incorrect → 401 with “Invalid credentials”.
- On success, returns:
  - `token`: signed JWT (with `userId`, `email`, `role`, expiry).
  - `user`: basic profile info (without password).

### 6.2 Protecting admin endpoints

**File:** [`server/middleware/auth.js`](file:///e:/Dev/MERN/chandan/web/chandan-portfolio/server/middleware/auth.js)

```js
export const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({ success: false, message: 'Not authorized to access this route' });
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  // decoded.userId comes from the login token payload
  req.user = await User.findById(decoded.userId).select('-password');

  if (!req.user) {
    return res.status(401).json({ success: false, message: 'User not found' });
  }

  if (!req.user.isActive) {
    return res.status(401).json({ success: false, message: 'User account is deactivated' });
  }

  next();
};
```

- Any route that uses `protect` requires a valid `Authorization: Bearer <token>` header.
- JWT is verified with the same secret used in the login route.
- If verification fails (invalid/expired token) or user is inactive ⇒ 401.

Example: **Get current user profile**

```js
router.get('/me', protect, async (req, res) => {
  const user = await User.findById(req.user.id);
  ...
});
```

This is what `getCurrentUser()` in the frontend calls after login.

---

## 7. Putting it all together

**End‑to‑end login → admin flow:**

1. **User action**:
   - Opens a protected page like `/admin`.
   - If not logged in, `ProtectedRoute` redirects to `/login` and stores `from = /admin`.

2. **Login form**:
   - User submits credentials.
   - `Login.jsx` calls `AuthContext.login(email, password)`.

3. **AuthContext.login**:
   - Calls `loginUser()` which POSTs to `/api/auth/login` with `email` and `password`.
   - Backend validates credentials and returns a JWT + user data.
   - Frontend stores token in `localStorage` via `setAuthToken()`.
   - Immediately calls `getCurrentUser()` (`GET /api/auth/me`) to fetch the profile and sets `user` + `isAuthenticated`.

4. **Redirect after login**:
   - `Login.jsx` sees `isAuthenticated === true` and navigates to:
     - `location.state.from.pathname` if present (e.g. `/admin/blog-manager`), else
     - `/admin/`.

5. **Subsequent requests**:
   - `apiRequest` automatically attaches `Authorization: Bearer <token>` using `getAuthHeaders()`.
   - Backend `protect` middleware verifies token and attaches `req.user`.

6. **Logout**:
   - `logout()` clears token from `localStorage` and resets auth state.

This is the complete flow of how login to admin works, how the API is called, where validation happens, and where the token is stored and used.