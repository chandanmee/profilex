# Chandan Portfolio API Documentation

## Overview

This is the backend API for Chandan's portfolio website. The API provides endpoints for authentication, blog management, and contact form submissions.

**Base URL:** `http://localhost:5000/api`

## Authentication

The API uses JWT (JSON Web Tokens) for authentication. Include the token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

## Response Format

All API responses follow this standard format:

```json
{
  "success": true,
  "message": "Operation successful",
  "data": {
    // Response data here
  }
}
```

Error responses:

```json
{
  "success": false,
  "message": "Error description",
  "error": {
    "code": "ERROR_CODE",
    "details": "Additional error details"
  }
}
```

## Endpoints

### Authentication

#### POST /auth/login

Authenticate user and receive JWT token.

**Postman Setup:**
- Method: `POST`
- URL: `{{baseUrl}}/auth/login`
- Headers: `Content-Type: application/json`

**Request Body:**
```json
{
  "email": "admin@chandanmee.com",
  "password": "admin123456"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "user-id",
    "name": "Admin User",
    "email": "admin@chandanmee.com",
    "role": "admin",
    "avatar": null,
    "createdAt": "2024-01-15T10:30:00Z"
  }
}
```

**Status Codes:**
- `200` - Success
- `401` - Invalid credentials
- `422` - Validation error

#### POST /auth/register

Create a new user account (Admin only).

**Postman Setup:**
- Method: `POST`
- URL: `{{baseUrl}}/auth/register`
- Headers: 
  - `Content-Type: application/json`
  - `Authorization: Bearer {{authToken}}`

**Request Body:**
```json
{
  "name": "New User",
  "email": "newuser@example.com",
  "password": "securepassword123",
  "role": "user",
  "bio": "User biography"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User created successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "data": {
    "id": "new-user-id",
    "name": "New User",
    "email": "newuser@example.com",
    "role": "user",
    "bio": "User biography",
    "avatar": null,
    "isActive": true,
    "createdAt": "2024-01-15T11:00:00Z"
  }
}
```

**Status Codes:**
- `201` - Created
- `400` - User already exists or validation error
- `401` - Unauthorized
- `403` - Forbidden (Admin only)

#### GET /auth/me

Get current authenticated user information.

**Postman Setup:**
- Method: `GET`
- URL: `{{baseUrl}}/auth/me`
- Headers: `Authorization: Bearer {{authToken}}`

**Response:**
```json
{
  "success": true,
  "message": "User profile retrieved successfully",
  "user": {
    "id": "user-id",
    "name": "Admin User",
    "email": "admin@chandanmee.com",
    "role": "admin",
    "bio": "Administrator biography",
    "avatar": null,
    "isActive": true,
    "createdAt": "2024-01-15T10:30:00Z"
  }
}
```

**Status Codes:**
- `200` - Success
- `401` - Unauthorized
- `404` - User not found

#### PUT /auth/profile

Update current user profile.

**Postman Setup:**
- Method: `PUT`
- URL: `{{baseUrl}}/auth/profile`
- Headers: 
  - `Content-Type: application/json`
  - `Authorization: Bearer {{authToken}}`

**Request Body:**
```json
{
  "name": "Updated Name",
  "bio": "Updated biography",
  "avatar": "https://example.com/avatar.jpg"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Profile updated successfully",
  "user": {
    "id": "user-id",
    "name": "Updated Name",
    "email": "admin@chandanmee.com",
    "role": "admin",
    "bio": "Updated biography",
    "avatar": "https://example.com/avatar.jpg",
    "isActive": true,
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T12:00:00Z"
  }
}
```

**Status Codes:**
- `200` - Success
- `400` - Validation error
- `401` - Unauthorized

#### PUT /auth/change-password

Change user password.

**Postman Setup:**
- Method: `PUT`
- URL: `{{baseUrl}}/auth/change-password`
- Headers: 
  - `Content-Type: application/json`
  - `Authorization: Bearer {{authToken}}`

**Request Body:**
```json
{
  "currentPassword": "currentpassword123",
  "newPassword": "newpassword123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Password changed successfully"
}
```

**Status Codes:**
- `200` - Success
- `400` - Invalid current password or validation error
- `401` - Unauthorized

#### GET /auth/users

Get all users (Admin only).

**Postman Setup:**
- Method: `GET`
- URL: `{{baseUrl}}/auth/users?page=1&limit=10&search=john&role=user&isActive=true&sort=createdAt`
- Headers: `Authorization: Bearer {{authToken}}`

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10)
- `search` (optional): Search term for name/email
- `role` (optional): Filter by role (admin, user)
- `isActive` (optional): Filter by active status (true, false)
- `sort` (optional): Sort field (createdAt, name, email)

**Response:**
```json
{
  "success": true,
  "count": 5,
  "total": 25,
  "totalPages": 3,
  "currentPage": 1,
  "data": [
    {
      "id": "user-id",
      "name": "John Doe",
      "email": "john@example.com",
      "role": "user",
      "bio": "User biography",
      "avatar": null,
      "isActive": true,
      "createdAt": "2024-01-15T10:30:00Z"
    }
  ]
}
```

**Status Codes:**
- `200` - Success
- `401` - Unauthorized
- `403` - Forbidden (Admin only)

#### GET /auth/users/:id

Get specific user by ID (Admin only).

**Postman Setup:**
- Method: `GET`
- URL: `{{baseUrl}}/auth/users/{{userId}}`
- Headers: `Authorization: Bearer {{authToken}}`

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "user-id",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user",
    "bio": "User biography",
    "avatar": null,
    "isActive": true,
    "createdAt": "2024-01-15T10:30:00Z"
  }
}
```

**Status Codes:**
- `200` - Success
- `401` - Unauthorized
- `403` - Forbidden (Admin only)
- `404` - User not found

#### PUT /auth/users/:id

Update user by ID (Admin only).

**Postman Setup:**
- Method: `PUT`
- URL: `{{baseUrl}}/auth/users/{{userId}}`
- Headers: 
  - `Content-Type: application/json`
  - `Authorization: Bearer {{authToken}}`

**Request Body:**
```json
{
  "name": "Updated Name",
  "email": "updated@example.com",
  "role": "admin",
  "bio": "Updated biography",
  "isActive": false
}
```

**Response:**
```json
{
  "success": true,
  "message": "User updated successfully",
  "data": {
    "id": "user-id",
    "name": "Updated Name",
    "email": "updated@example.com",
    "role": "admin",
    "bio": "Updated biography",
    "avatar": null,
    "isActive": false,
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T12:00:00Z"
  }
}
```

**Status Codes:**
- `200` - Success
- `400` - Validation error or email already exists
- `401` - Unauthorized
- `403` - Forbidden (Admin only)
- `404` - User not found

#### DELETE /auth/users/:id

Delete user by ID (Admin only).

**Postman Setup:**
- Method: `DELETE`
- URL: `{{baseUrl}}/auth/users/{{userId}}`
- Headers: `Authorization: Bearer {{authToken}}`

**Response:**
```json
{
  "success": true,
  "message": "User deleted successfully"
}
```

**Status Codes:**
- `200` - Success
- `400` - Cannot delete own account
- `401` - Unauthorized
- `403` - Forbidden (Admin only)
- `404` - User not found

#### PUT /auth/users/:id/unlock

Unlock user account (Admin only).

**Postman Setup:**
- Method: `PUT`
- URL: `{{baseUrl}}/auth/users/{{userId}}/unlock`
- Headers: `Authorization: Bearer {{authToken}}`

**Response:**
```json
{
  "success": true,
  "message": "User account unlocked successfully"
}
```

**Status Codes:**
- `200` - Success
- `401` - Unauthorized
- `403` - Forbidden (Admin only)
- `404` - User not found

#### POST /auth/logout

Logout user (client-side token removal).

**Postman Setup:**
- Method: `POST`
- URL: `{{baseUrl}}/auth/logout`
- Headers: `Authorization: Bearer {{authToken}}`

**Response:**
```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

**Status Codes:**
- `200` - Success
- `401` - Unauthorized

### Blog Posts

#### GET /blog

Get all blog posts with pagination and filtering.

**Postman Setup:**
- Method: `GET`
- URL: `{{baseUrl}}/blog?page=1&limit=10&category=Technology&status=published&featured=true&search=javascript&sort=-publishedAt`
- Headers: `Authorization: Bearer {{authToken}}` (optional for admin features)

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10)
- `search` (optional): Search term for title/content/excerpt/tags
- `category` (optional): Filter by category
- `status` (optional): Filter by status (published, draft, archived) - Admin only
- `featured` (optional): Filter by featured status (true, false)
- `sort` (optional): Sort field (default: -publishedAt)

**Response:**
```json
{
  "success": true,
  "count": 5,
  "total": 25,
  "totalPages": 3,
  "currentPage": 1,
  "data": [
    {
      "id": "post-id",
      "title": "Blog Post Title",
      "excerpt": "Short description...",
      "category": "Technology",
      "tags": ["javascript", "react"],
      "status": "published",
      "featured": false,
      "views": 150,
      "likes": 25,
      "author": "Admin User",
      "slug": "blog-post-title",
      "publishedAt": "2024-01-15T10:30:00Z",
      "createdAt": "2024-01-15T10:30:00Z",
      "updatedAt": "2024-01-15T10:30:00Z"
    }
  ]
}
```

**Status Codes:**
- `200` - Success
- `400` - Invalid query parameters

#### GET /blog/:id

Get a specific blog post by ID.

**Postman Setup:**
- Method: `GET`
- URL: `{{baseUrl}}/blog/{{blogId}}`
- Headers: `Authorization: Bearer {{authToken}}` (optional for admin features)

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "post-id",
    "title": "Blog Post Title",
    "content": "Full post content...",
    "excerpt": "Short description...",
    "category": "Technology",
    "tags": ["javascript", "react"],
    "status": "published",
    "featured": false,
    "views": 151,
    "likes": 25,
    "author": "Admin User",
    "slug": "blog-post-title",
    "publishedAt": "2024-01-15T10:30:00Z",
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
  }
}
```

**Status Codes:**
- `200` - Success
- `404` - Blog post not found

#### GET /blog/slug/:slug

Get a specific blog post by slug.

**Postman Setup:**
- Method: `GET`
- URL: `{{baseUrl}}/blog/slug/{{blogSlug}}`
- Headers: `Authorization: Bearer {{authToken}}` (optional for admin features)

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "post-id",
    "title": "Blog Post Title",
    "content": "Full post content...",
    "excerpt": "Short description...",
    "category": "Technology",
    "tags": ["javascript", "react"],
    "status": "published",
    "featured": false,
    "views": 151,
    "likes": 25,
    "author": "Admin User",
    "slug": "blog-post-title",
    "publishedAt": "2024-01-15T10:30:00Z",
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
  }
}
```

**Status Codes:**
- `200` - Success
- `404` - Blog post not found

#### GET /blog/:id/related

Get related blog posts.

**Postman Setup:**
- Method: `GET`
- URL: `{{baseUrl}}/blog/{{blogId}}/related`

**Response:**
```json
{
  "success": true,
  "count": 3,
  "data": [
    {
      "id": "related-post-id",
      "title": "Related Blog Post",
      "excerpt": "Related post description...",
      "category": "Technology",
      "tags": ["javascript", "nodejs"],
      "status": "published",
      "featured": false,
      "views": 89,
      "likes": 12,
      "author": "Admin User",
      "slug": "related-blog-post",
      "publishedAt": "2024-01-10T10:30:00Z",
      "createdAt": "2024-01-10T10:30:00Z",
      "updatedAt": "2024-01-10T10:30:00Z"
    }
  ]
}
```

**Status Codes:**
- `200` - Success
- `404` - Blog post not found

#### POST /blog

Create a new blog post (Admin only).

**Postman Setup:**
- Method: `POST`
- URL: `{{baseUrl}}/blog`
- Headers: 
  - `Content-Type: application/json`
  - `Authorization: Bearer {{authToken}}`

**Request Body:**
```json
{
  "title": "New Blog Post",
  "content": "Full post content...",
  "excerpt": "Short description...",
  "category": "Technology",
  "tags": ["javascript", "react"],
  "status": "published",
  "featured": false,
  "slug": "new-blog-post"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Blog created successfully",
  "data": {
    "id": "new-post-id",
    "title": "New Blog Post",
    "content": "Full post content...",
    "excerpt": "Short description...",
    "category": "Technology",
    "tags": ["javascript", "react"],
    "status": "published",
    "featured": false,
    "views": 0,
    "likes": 0,
    "author": "Admin User",
    "slug": "new-blog-post",
    "publishedAt": "2024-01-15T11:00:00Z",
    "createdAt": "2024-01-15T11:00:00Z",
    "updatedAt": "2024-01-15T11:00:00Z"
  }
}
```

**Status Codes:**
- `201` - Created
- `400` - Validation error or duplicate slug
- `401` - Unauthorized
- `403` - Forbidden (Admin only)

#### PUT /blog/:id

Update an existing blog post (Admin only).

**Postman Setup:**
- Method: `PUT`
- URL: `{{baseUrl}}/blog/{{blogId}}`
- Headers: 
  - `Content-Type: application/json`
  - `Authorization: Bearer {{authToken}}`

**Request Body:**
```json
{
  "title": "Updated Blog Post Title",
  "content": "Updated content...",
  "excerpt": "Updated description...",
  "category": "Technology",
  "tags": ["javascript", "react", "nodejs"],
  "status": "published",
  "featured": true,
  "slug": "updated-blog-post-title"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Blog updated successfully",
  "data": {
    "id": "post-id",
    "title": "Updated Blog Post Title",
    "content": "Updated content...",
    "excerpt": "Updated description...",
    "category": "Technology",
    "tags": ["javascript", "react", "nodejs"],
    "status": "published",
    "featured": true,
    "views": 151,
    "likes": 25,
    "author": "Admin User",
    "slug": "updated-blog-post-title",
    "publishedAt": "2024-01-15T10:30:00Z",
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T11:15:00Z"
  }
}
```

**Status Codes:**
- `200` - Success
- `400` - Validation error or duplicate slug
- `401` - Unauthorized
- `403` - Forbidden (Admin only)
- `404` - Blog post not found

#### DELETE /blog/:id

Delete a blog post (Admin only).

**Postman Setup:**
- Method: `DELETE`
- URL: `{{baseUrl}}/blog/{{blogId}}`
- Headers: `Authorization: Bearer {{authToken}}`

**Response:**
```json
{
  "success": true,
  "message": "Blog deleted successfully"
}
```

**Status Codes:**
- `200` - Success
- `401` - Unauthorized
- `403` - Forbidden (Admin only)
- `404` - Blog post not found

#### POST /blog/:id/like

Toggle blog like (Public).

**Postman Setup:**
- Method: `POST`
- URL: `{{baseUrl}}/blog/{{blogId}}/like`

**Response:**
```json
{
  "success": true,
  "message": "Blog liked successfully",
  "likes": 26
}
```

**Status Codes:**
- `200` - Success
- `404` - Blog post not found

#### GET /blog/stats/dashboard

Get dashboard statistics (Admin only).

**Postman Setup:**
- Method: `GET`
- URL: `{{baseUrl}}/blog/stats/dashboard`
- Headers: `Authorization: Bearer {{authToken}}`

**Response:**
```json
{
  "success": true,
  "data": {
    "stats": {
      "totalBlogs": 25,
      "publishedBlogs": 20,
      "draftBlogs": 4,
      "archivedBlogs": 1,
      "totalViews": 5420,
      "knowledgeEntries": 0,
      "mediaFiles": 0
    },
    "recentActivity": [
      {
        "type": "blog",
        "title": "Latest Blog Post",
        "action": "Published",
        "time": "2 hours ago"
      }
    ]
  }
}
```

**Status Codes:**
- `200` - Success
- `401` - Unauthorized
- `403` - Forbidden (Admin only)

### Contact

#### POST /contact

Submit a contact form.

**Postman Setup:**
- Method: `POST`
- URL: `{{baseUrl}}/contact`
- Headers: `Content-Type: application/json`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "I would like to discuss a potential project..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for your message! I will get back to you soon.",
  "data": {
    "id": "contact-id",
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Project Inquiry",
    "createdAt": "2024-01-15T12:00:00Z"
  }
}
```

**Status Codes:**
- `201` - Created
- `400` - Validation error

#### GET /contact

Get all contact submissions (Admin only).

**Postman Setup:**
- Method: `GET`
- URL: `{{baseUrl}}/contact?page=1&limit=20&status=unread&search=john&sort=-createdAt`
- Headers: `Authorization: Bearer {{authToken}}`

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 20)
- `status` (optional): Filter by status (read, unread)
- `search` (optional): Search term for name/email/subject/message
- `sort` (optional): Sort field (default: -createdAt)

**Response:**
```json
{
  "success": true,
  "count": 5,
  "total": 15,
  "totalPages": 3,
  "currentPage": 1,
  "data": [
    {
      "id": "contact-id",
      "name": "John Doe",
      "email": "john@example.com",
      "subject": "Project Inquiry",
      "message": "I would like to discuss a potential project...",
      "status": "unread",
      "ipAddress": "192.168.1.1",
      "userAgent": "Mozilla/5.0...",
      "createdAt": "2024-01-15T12:00:00Z"
    }
  ]
}
```

**Status Codes:**
- `200` - Success
- `401` - Unauthorized
- `403` - Forbidden (Admin only)

#### GET /contact/:id

Get a specific contact submission (Admin only).

**Postman Setup:**
- Method: `GET`
- URL: `{{baseUrl}}/contact/{{contactId}}`
- Headers: `Authorization: Bearer {{authToken}}`

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "contact-id",
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Project Inquiry",
    "message": "I would like to discuss a potential project...",
    "status": "unread",
    "ipAddress": "192.168.1.1",
    "userAgent": "Mozilla/5.0...",
    "createdAt": "2024-01-15T12:00:00Z"
  }
}
```

**Status Codes:**
- `200` - Success
- `401` - Unauthorized
- `403` - Forbidden (Admin only)
- `404` - Contact not found

#### PUT /contact/:id

Update contact submission status (Admin only).

**Postman Setup:**
- Method: `PUT`
- URL: `{{baseUrl}}/contact/{{contactId}}`
- Headers: 
  - `Content-Type: application/json`
  - `Authorization: Bearer {{authToken}}`

**Request Body:**
```json
{
  "status": "read"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Contact updated successfully",
  "data": {
    "id": "contact-id",
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Project Inquiry",
    "message": "I would like to discuss a potential project...",
    "status": "read",
    "ipAddress": "192.168.1.1",
    "userAgent": "Mozilla/5.0...",
    "createdAt": "2024-01-15T12:00:00Z",
    "updatedAt": "2024-01-15T12:30:00Z"
  }
}
```

**Status Codes:**
- `200` - Success
- `400` - Invalid status or validation error
- `401` - Unauthorized
- `403` - Forbidden (Admin only)
- `404` - Contact not found

#### DELETE /contact/:id

Delete a contact submission (Admin only).

**Postman Setup:**
- Method: `DELETE`
- URL: `{{baseUrl}}/contact/{{contactId}}`
- Headers: `Authorization: Bearer {{authToken}}`

**Response:**
```json
{
  "success": true,
  "message": "Contact deleted successfully"
}
```

**Status Codes:**
- `200` - Success
- `401` - Unauthorized
- `403` - Forbidden (Admin only)
- `404` - Contact not found

## Postman Collection Setup

### Environment Variables

Create a Postman environment with the following variables:

```json
{
  "baseUrl": "http://localhost:5000/api",
  "authToken": "",
  "userId": "",
  "blogId": "",
  "contactId": ""
}
```

### Authentication Flow

1. **Login to get token:**
   - Use `POST /auth/login` with admin credentials
   - Copy the token from response
   - Set `{{authToken}}` variable with the token value

2. **Test protected endpoints:**
   - All authenticated endpoints will use `Authorization: Bearer {{authToken}}`

### Sample Postman Collection Structure

```json
{
  "info": {
    "name": "Chandan Portfolio API",
    "description": "Complete API collection for Chandan Portfolio application"
  },
  "variable": [
    {
      "key": "baseUrl",
      "value": "http://localhost:5000/api"
    }
  ],
  "item": [
    {
      "name": "Authentication",
      "item": [
        {
          "name": "Login",
          "request": {
            "method": "POST",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{\n  \"email\": \"admin@chandanmee.com\",\n  \"password\": \"admin123456\"\n}"
            },
            "url": {
              "raw": "{{baseUrl}}/auth/login",
              "host": ["{{baseUrl}}"],
              "path": ["auth", "login"]
            }
          }
        }
      ]
    },
    {
      "name": "Blog Management",
      "item": [
        {
          "name": "Get All Blogs",
          "request": {
            "method": "GET",
            "url": {
              "raw": "{{baseUrl}}/blog?page=1&limit=10",
              "host": ["{{baseUrl}}"],
              "path": ["blog"],
              "query": [
                {
                  "key": "page",
                  "value": "1"
                },
                {
                  "key": "limit",
                  "value": "10"
                }
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Contact Management",
      "item": [
        {
          "name": "Submit Contact Form",
          "request": {
            "method": "POST",
            "header": [
              {
                "key": "Content-Type",
                "value": "application/json"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{\n  \"name\": \"John Doe\",\n  \"email\": \"john@example.com\",\n  \"subject\": \"Project Inquiry\",\n  \"message\": \"I would like to discuss a potential project...\"\n}"
            },
            "url": {
              "raw": "{{baseUrl}}/contact",
              "host": ["{{baseUrl}}"],
              "path": ["contact"]
            }
          }
        }
      ]
    }
  ]
}
```

### Testing Instructions

1. **Import Collection:**
   - Copy the JSON above into a new Postman collection
   - Set up environment variables as described

2. **Authentication Testing:**
   - Run the Login request first
   - Copy the token from response and set it in `{{authToken}}`
   - Test other authenticated endpoints

3. **Common Test Scenarios:**
   - **Blog CRUD:** Create → Read → Update → Delete
   - **User Management:** Register → Login → Profile Update
   - **Contact Flow:** Submit → Admin View → Status Update

4. **Error Testing:**
   - Test with invalid tokens
   - Test with missing required fields
   - Test with invalid IDs

### Quick Start Commands

For quick API testing without Postman, use these curl commands:

```bash
# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@chandanmee.com","password":"admin123456"}'

# Get blogs
curl -X GET http://localhost:5000/api/blog

# Submit contact form
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","subject":"Test","message":"Test message"}'
```

## Error Codes

| Code | Description |
|------|-------------|
| `VALIDATION_ERROR` | Request validation failed |
| `AUTHENTICATION_ERROR` | Authentication failed |
| `AUTHORIZATION_ERROR` | Insufficient permissions |
| `NOT_FOUND` | Resource not found |
| `DUPLICATE_ERROR` | Resource already exists |
| `SERVER_ERROR` | Internal server error |
| `DATABASE_ERROR` | Database operation failed |
| `INVALID_TOKEN` | JWT token is invalid or expired |

## Rate Limiting

The API implements rate limiting to prevent abuse:

- **General endpoints**: 100 requests per 15 minutes per IP
- **Authentication endpoints**: 5 requests per 15 minutes per IP
- **Contact form**: 3 submissions per hour per IP

When rate limit is exceeded, the API returns:

```json
{
  "success": false,
  "message": "Too many requests, please try again later",
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "retryAfter": 900
  }
}
```

## Environment Variables

Required environment variables for the API:

```env
# Server Configuration
PORT=5000
NODE_ENV=production

# Database
MONGODB_URI=mongodb://localhost:27017/chandan-portfolio

# JWT
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRES_IN=7d

# Admin User
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=your-secure-password

# CORS
FRONTEND_URL=http://localhost:3001

# Email (Optional - for contact form notifications)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

## Development

### Running the Server

```bash
# Install dependencies
npm install

# Create admin user (first time only)
npm run create-admin

# Start development server
npm run dev

# Start production server
npm start
```

### Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage
```

## Deployment

The API is designed to be deployed on platforms like:

- **Heroku**: Use the provided `Procfile`
- **Railway**: Automatic deployment from Git
- **DigitalOcean App Platform**: Use the app spec
- **AWS/GCP/Azure**: Deploy as a containerized application

### Docker Deployment

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 5000
CMD ["npm", "start"]
```

## Support

For API support or questions, please contact:
- Email: admin@chandanportfolio.com
- GitHub Issues: [Repository Issues](https://github.com/username/chandan-portfolio/issues)

---

**Last Updated:** January 2024
**API Version:** 1.0.0