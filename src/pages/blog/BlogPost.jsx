import React, { useState, useEffect } from 'react';
import { getBlogById, getBlogBySlug, getRelatedBlogs } from '../../api/blog';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiCalendar, FiUser, FiTag, FiShare2, FiMessageSquare, FiTwitter, FiLinkedin, FiGithub } from 'react-icons/fi';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// This would typically come from an API or CMS
const blogPostsData = [
  {
    id: 1,
    slug: 'future-of-web-development-trends-2023',
    title: 'The Future of Web Development: Trends to Watch in 2023',
    content: `# The Future of Web Development: Trends to Watch in 2023

The web development landscape is constantly evolving, with new technologies, frameworks, and methodologies emerging at a rapid pace. As we move through 2023, several key trends are shaping the future of how we build and interact with websites and web applications.

## AI-Driven Development Tools

Artificial intelligence is revolutionizing the way developers work. AI-powered code completion tools like **GitHub Copilot** are becoming increasingly sophisticated, helping developers write code faster and with fewer errors. These tools can suggest entire functions based on comments, automate repetitive tasks, and even help identify potential bugs before they make it into production.

Beyond code completion, AI is also being used for:

- Automated testing and quality assurance
- Performance optimization
- User experience personalization
- Accessibility improvements

## WebAssembly (WASM) Goes Mainstream

WebAssembly continues to gain traction as a powerful technology that allows high-performance code written in languages like **C++**, **Rust**, and **Go** to run in the browser. This opens up new possibilities for web applications that require intensive computation, such as:

- Browser-based video editing
- Complex data visualization
- Advanced gaming experiences
- Scientific simulations

As WebAssembly matures, we're seeing more tools and frameworks that make it accessible to a broader range of developers, not just those with systems programming backgrounds.

## The Rise of Edge Computing

Edge computing is changing how web applications are deployed and delivered. By running code closer to users at the network edge rather than in centralized data centers, developers can create experiences that are:

- **Faster**, with reduced latency
- **More reliable**, even with spotty internet connections
- **More secure**, with distributed points of failure
- **More cost-effective** for certain workloads

Platforms like *Cloudflare Workers*, *Vercel Edge Functions*, and *Netlify Edge* are making it easier than ever to deploy code to the edge without managing complex infrastructure.

## Micro-Frontends Architecture

As web applications grow in complexity, more teams are adopting micro-frontends architecture. This approach extends microservices principles to frontend development, allowing different teams to work on separate parts of an application independently using different technologies if needed.

Benefits of micro-frontends include:

1. **Improved team autonomy** and productivity
2. More **manageable codebases**
3. Ability to update parts of an application without rebuilding everything
4. Better scaling for large organizations

> "The future of web development lies in modular, scalable architectures that can adapt to changing requirements." - Industry Expert

## Conclusion

The web development field continues to evolve at a breathtaking pace. By staying informed about these trends and selectively adopting technologies that solve real problems for your projects, you can build better web experiences and keep your skills relevant in an ever-changing landscape.

**What trends are you most excited about?** Are there others you think will have a significant impact on web development in the coming years? The conversation is just beginning.

*Tags: #WebDevelopment #Trends #AI #WebAssembly #EdgeComputing*`,
    date: 'June 15, 2023',
    author: 'Chandan Mee',
    category: 'web-development',
    image: 'https://via.placeholder.com/1200x600/4F46E5/FFFFFF?text=Web+Development+Trends',
    tags: ['Web Development', 'Trends', 'Technology'],
    comments: 8,
    shares: 24,
  },
  {
    id: 2,
    slug: 'optimizing-website-performance-guide',
    title: 'Optimizing Website Performance: A Comprehensive Guide',
    content: `
      <p>Website performance is a critical factor in user experience, SEO rankings, and conversion rates. In today's fast-paced digital world, users expect websites to load quickly and respond immediately to their interactions. This comprehensive guide explores practical strategies to optimize your website's performance.</p>
      
      <h2>Why Performance Matters</h2>
      <p>Before diving into optimization techniques, it's important to understand why performance is crucial:</p>
      <ul>
        <li><strong>User Experience:</strong> 53% of mobile users abandon sites that take longer than 3 seconds to load</li>
        <li><strong>Conversion Rates:</strong> Every 100ms delay in load time can reduce conversion rates by 7%</li>
        <li><strong>SEO:</strong> Page speed is a ranking factor for both mobile and desktop searches</li>
        <li><strong>Accessibility:</strong> Fast sites are more accessible to users with slower connections or older devices</li>
      </ul>
      
      <h2>Code Optimization Strategies</h2>
      <p>Efficient code is the foundation of a fast website. Here are key strategies to optimize your codebase:</p>
      
      <h3>Minimize HTTP Requests</h3>
      <p>Each file your website loads requires an HTTP request. Reducing these requests can significantly improve load times:</p>
      <ul>
        <li>Combine multiple CSS files into one</li>
        <li>Merge JavaScript files where appropriate</li>
        <li>Use CSS sprites for small, recurring images</li>
        <li>Implement icon fonts or SVGs instead of image files</li>
      </ul>
      
      <h3>Optimize JavaScript Execution</h3>
      <p>JavaScript can block rendering and delay interactivity. Optimize it by:</p>
      <ul>
        <li>Removing unused code and dependencies</li>
        <li>Deferring non-critical JavaScript</li>
        <li>Using web workers for complex calculations</li>
        <li>Implementing code splitting to load only what's needed</li>
      </ul>
      
      <h2>Image Optimization Techniques</h2>
      <p>Images often account for the majority of a webpage's size. Optimize them with these approaches:</p>
      
      <h3>Format Selection</h3>
      <p>Choose the right format for each image:</p>
      <ul>
        <li><strong>JPEG:</strong> Best for photographs and complex images with many colors</li>
        <li><strong>PNG:</strong> Ideal for images requiring transparency</li>
        <li><strong>WebP:</strong> Modern format offering superior compression for both lossy and lossless images</li>
        <li><strong>SVG:</strong> Perfect for logos, icons, and simple illustrations that need to scale</li>
      </ul>
      
      <h3>Responsive Images</h3>
      <p>Serve appropriately sized images based on the user's device:</p>
      <ul>
        <li>Use the srcset attribute to provide multiple image versions</li>
        <li>Implement the picture element for art direction</li>
        <li>Consider using an image CDN with automatic resizing capabilities</li>
      </ul>
      
      <h2>Caching Strategies</h2>
      <p>Effective caching prevents unnecessary downloads and server requests:</p>
      
      <h3>Browser Caching</h3>
      <p>Configure your server to use appropriate cache headers:</p>
      <ul>
        <li>Set long expiration times for static resources that rarely change</li>
        <li>Use versioning or fingerprinting for files that update frequently</li>
        <li>Implement ETags for conditional requests</li>
      </ul>
      
      <h3>Application Caching</h3>
      <p>Cache dynamic data to reduce database load:</p>
      <ul>
        <li>Use memory caching for frequently accessed data</li>
        <li>Implement database query caching</li>
        <li>Consider using a CDN for global content delivery</li>
      </ul>
      
      <h2>Measuring and Monitoring Performance</h2>
      <p>Continuous measurement is essential for ongoing optimization:</p>
      <ul>
        <li>Use Lighthouse for comprehensive performance audits</li>
        <li>Monitor Core Web Vitals (LCP, FID, CLS) with Google Search Console</li>
        <li>Implement Real User Monitoring (RUM) to understand actual user experiences</li>
        <li>Set up performance budgets and automated testing in your CI/CD pipeline</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Website performance optimization is not a one-time task but an ongoing process. By implementing these strategies and continuously monitoring your site's performance, you can provide a faster, more engaging experience for your users while improving your search rankings and conversion rates.</p>
      <p>Remember that even small improvements can have a significant impact, especially for users on slower connections or less powerful devices. Prioritize optimizations that will have the greatest impact on your specific audience and use case.</p>
    `,
    date: 'May 22, 2023',
    author: 'Chandan Mee',
    category: 'performance',
    image: 'https://via.placeholder.com/1200x600/0EA5E9/FFFFFF?text=Website+Performance',
    tags: ['Performance', 'Optimization', 'Web Development'],
    comments: 12,
    shares: 36,
  },
  {
    id: 3,
    slug: 'designing-for-accessibility-best-practices',
    title: 'Designing for Accessibility: Best Practices for Inclusive Web Design',
    content: `
      <p>Web accessibility is about creating websites that can be used by everyone, including people with disabilities. Designing with accessibility in mind not only helps you reach a wider audience but also often results in better usability for all users. This article explores key principles and practical techniques for creating more inclusive web experiences.</p>
      
      <h2>Understanding Web Accessibility</h2>
      <p>Web accessibility encompasses a wide range of disabilities, including visual, auditory, physical, speech, cognitive, and neurological disabilities. When we design accessible websites, we're ensuring that people with these disabilities can perceive, understand, navigate, and interact with the web.</p>
      
      <p>The Web Content Accessibility Guidelines (WCAG) provide a framework for accessibility, organized around four principles:</p>
      <ul>
        <li><strong>Perceivable:</strong> Information must be presentable to users in ways they can perceive</li>
        <li><strong>Operable:</strong> User interface components must be operable by all users</li>
        <li><strong>Understandable:</strong> Information and operation must be understandable</li>
        <li><strong>Robust:</strong> Content must be robust enough to work with current and future technologies</li>
      </ul>
      
      <h2>Keyboard Accessibility</h2>
      <p>Many users with motor disabilities rely on keyboards or keyboard alternatives to navigate websites. Ensuring keyboard accessibility is a fundamental aspect of web accessibility:</p>
      
      <h3>Focus Management</h3>
      <ul>
        <li>Ensure all interactive elements can receive keyboard focus</li>
        <li>Maintain a logical tab order that follows the visual layout</li>
        <li>Make the focus indicator clearly visible</li>
        <li>Avoid keyboard traps where focus cannot move away from an element</li>
      </ul>
      
      <h3>Keyboard Shortcuts</h3>
      <p>Consider implementing keyboard shortcuts for common actions, but ensure they don't conflict with browser or screen reader shortcuts. Always provide a way to view and customize keyboard shortcuts.</p>
      
      <h2>Visual Design Considerations</h2>
      <p>Visual design plays a crucial role in accessibility, particularly for users with visual impairments or cognitive disabilities:</p>
      
      <h3>Color and Contrast</h3>
      <ul>
        <li>Ensure sufficient color contrast between text and background (minimum 4.5:1 for normal text)</li>
        <li>Don't rely solely on color to convey information</li>
        <li>Consider how your design appears to users with color blindness</li>
        <li>Provide dark mode options for users sensitive to bright screens</li>
      </ul>
      
      <h3>Typography and Layout</h3>
      <ul>
        <li>Use readable font sizes (minimum 16px for body text)</li>
        <li>Maintain adequate line spacing and paragraph spacing</li>
        <li>Ensure text can be resized up to 200% without breaking the layout</li>
        <li>Create layouts with clear visual hierarchy and consistent navigation</li>
      </ul>
      
      <h2>Semantic HTML and ARIA</h2>
      <p>Proper HTML structure is essential for accessibility, as it provides meaning and context to assistive technologies:</p>
      
      <h3>Semantic Elements</h3>
      <ul>
        <li>Use appropriate HTML elements for their intended purpose (headings, lists, buttons, etc.)</li>
        <li>Structure content with proper heading levels (h1-h6) that reflect the document outline</li>
        <li>Use landmark elements (header, nav, main, footer) to define page regions</li>
        <li>Implement proper form labels and field associations</li>
      </ul>
      
      <h3>ARIA When Necessary</h3>
      <p>WAI-ARIA (Accessible Rich Internet Applications) can enhance accessibility when HTML alone isn't sufficient:</p>
      <ul>
        <li>Use ARIA roles to clarify the purpose of elements when needed</li>
        <li>Implement ARIA states and properties to communicate component states</li>
        <li>Create accessible custom widgets when standard HTML elements won't suffice</li>
        <li>Remember: No ARIA is better than bad ARIA</li>
      </ul>
      
      <h2>Media Accessibility</h2>
      <p>Make your multimedia content accessible to all users:</p>
      
      <h3>Images</h3>
      <ul>
        <li>Provide descriptive alt text for informative images</li>
        <li>Use empty alt attributes for decorative images</li>
        <li>Include longer descriptions for complex images like charts or graphs</li>
      </ul>
      
      <h3>Video and Audio</h3>
      <ul>
        <li>Provide captions for videos with audio</li>
        <li>Include audio descriptions for important visual information</li>
        <li>Offer transcripts for audio content</li>
        <li>Ensure media players have accessible controls</li>
      </ul>
      
      <h2>Testing for Accessibility</h2>
      <p>Regular testing is essential to ensure your website meets accessibility standards:</p>
      <ul>
        <li>Use automated testing tools like Lighthouse, WAVE, or axe</li>
        <li>Conduct keyboard-only navigation testing</li>
        <li>Test with screen readers (NVDA, JAWS, VoiceOver)</li>
        <li>Involve users with disabilities in usability testing</li>
        <li>Perform regular accessibility audits against WCAG criteria</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Designing for accessibility is not just about compliance with standards or avoiding legal issues—it's about creating a web that works for everyone. By incorporating these best practices into your design and development process, you'll create more inclusive experiences that benefit all users, regardless of their abilities or how they access the web.</p>
      <p>Remember that accessibility is a journey, not a destination. Start where you are, make continuous improvements, and prioritize changes that will have the biggest impact for your users.</p>
    `,
    date: 'April 10, 2023',
    author: 'Chandan Mee',
    category: 'design',
    image: 'https://via.placeholder.com/1200x600/10B981/FFFFFF?text=Accessibility+Design',
    tags: ['Accessibility', 'Design', 'Inclusion'],
    comments: 15,
    shares: 42,
  },
  {
    id: 4,
    title: 'The Power of Tailwind CSS: Building Modern UIs Efficiently',
    content: `
      <p>Tailwind CSS has revolutionized the way developers approach frontend styling. Unlike traditional CSS frameworks that provide pre-designed components, Tailwind offers low-level utility classes that let you build completely custom designs without leaving your HTML. This article explores how Tailwind can streamline your development process and help you build beautiful, responsive interfaces with less effort.</p>
      
      <h2>Understanding the Utility-First Approach</h2>
      <p>Tailwind's utility-first methodology represents a paradigm shift from how CSS has traditionally been written:</p>
      
      <h3>Traditional CSS vs. Utility Classes</h3>
      <p>In traditional CSS workflows, you might write something like this:</p>
      <pre><code>
/* CSS */
.btn-primary {
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  background-color: #3b82f6;
  color: white;
  font-weight: 600;
}

.btn-primary:hover {
  background-color: #2563eb;
}

/* HTML */
&lt;button class="btn-primary"&gt;Click Me&lt;/button&gt;
      </code></pre>
      
      <p>With Tailwind, you apply utility classes directly in your HTML:</p>
      <pre><code>
&lt;button class="px-4 py-2 rounded bg-blue-500 text-white font-semibold hover:bg-blue-600"&gt;
  Click Me
&lt;/button&gt;
      </code></pre>
      
      <p>This approach offers several advantages:</p>
      <ul>
        <li>No need to create and name custom CSS classes for every component</li>
        <li>Changes can be made directly in your HTML without switching between files</li>
        <li>No more struggling to come up with meaningful class names</li>
        <li>CSS file size stays consistent as your project grows</li>
      </ul>
      
      <h2>Key Benefits of Tailwind CSS</h2>
      
      <h3>Developer Experience</h3>
      <p>Tailwind significantly improves the developer experience in several ways:</p>
      <ul>
        <li><strong>Faster Development:</strong> Apply styles directly without writing custom CSS</li>
        <li><strong>Consistency:</strong> Predefined design constraints help maintain a consistent look</li>
        <li><strong>IntelliSense:</strong> Editor plugins provide autocomplete and documentation</li>
        <li><strong>Learning Curve:</strong> Class names are intuitive and follow consistent patterns</li>
      </ul>
      
      <h3>Performance Optimization</h3>
      <p>Despite concerns about HTML bloat, Tailwind is highly optimized for production:</p>
      <ul>
        <li>Unused classes are automatically removed with PurgeCSS integration</li>
        <li>The final production CSS is typically very small (often &lt;10KB gzipped)</li>
        <li>No runtime overhead, unlike CSS-in-JS solutions</li>
        <li>Built-in support for modern CSS features with appropriate fallbacks</li>
      </ul>
      
      <h2>Responsive Design with Tailwind</h2>
      <p>Tailwind makes responsive design remarkably straightforward with intuitive breakpoint prefixes:</p>
      
      <pre><code>
&lt;div class="text-center sm:text-left md:text-right lg:text-justify"&gt;
  This text aligns differently at different screen sizes
&lt;/div&gt;
      </code></pre>
      
      <p>This approach has several advantages over traditional media queries:</p>
      <ul>
        <li>No need to leave your HTML to define responsive behavior</li>
        <li>Consistent breakpoints throughout your project</li>
        <li>Easy to understand which styles apply at which screen sizes</li>
        <li>Mobile-first approach encouraged by default</li>
      </ul>
      
      <h2>Customization and Theming</h2>
      <p>Despite being opinionated, Tailwind is highly customizable:</p>
      
      <h3>Configuration</h3>
      <p>The tailwind.config.js file gives you control over:</p>
      <ul>
        <li>Color palettes and naming</li>
        <li>Spacing scales</li>
        <li>Typography settings</li>
        <li>Breakpoints</li>
        <li>Variants (hover, focus, etc.)</li>
        <li>Plugins and extensions</li>
      </ul>
      
      <h3>Dark Mode</h3>
      <p>Tailwind v2.0+ includes built-in dark mode support:</p>
      <pre><code>
&lt;div class="bg-white dark:bg-gray-800 text-black dark:text-white"&gt;
  This adapts to light/dark mode
&lt;/div&gt;
      </code></pre>
      
      <h2>Component Extraction Patterns</h2>
      <p>As projects grow, you'll want to avoid repetition. Tailwind offers several patterns for component reuse:</p>
      
      <h3>Template Components</h3>
      <p>With frameworks like React, Vue, or template systems, you can create reusable components:</p>
      <pre><code>
// React component example
function Button({ children }) {
  return (
    &lt;button className="px-4 py-2 rounded bg-blue-500 text-white font-semibold hover:bg-blue-600"&gt;
      {children}
    &lt;/button&gt;
  );
}
      </code></pre>
      
      <h3>Extracting Classes with @apply</h3>
      <p>For repeated patterns, you can extract utility combinations with @apply:</p>
      <pre><code>
/* In your CSS */
.btn-primary {
  @apply px-4 py-2 rounded bg-blue-500 text-white font-semibold hover:bg-blue-600;
}

/* In your HTML */
&lt;button class="btn-primary"&gt;Click Me&lt;/button&gt;
      </code></pre>
      
      <h2>Common Challenges and Solutions</h2>
      
      <h3>Long Class Lists</h3>
      <p>As components become complex, class lists can get unwieldy. Solutions include:</p>
      <ul>
        <li>Using component extraction as described above</li>
        <li>Organizing classes by category (layout, typography, colors, etc.)</li>
        <li>Using tools like Tailwind Prettier Plugin to format class names</li>
      </ul>
      
      <h3>Team Adoption</h3>
      <p>Getting teams on board with utility-first CSS can be challenging:</p>
      <ul>
        <li>Start with a small project or component to demonstrate benefits</li>
        <li>Create documentation of common patterns for your project</li>
        <li>Use pair programming to help team members get comfortable</li>
        <li>Highlight the reduced context-switching and faster iteration</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Tailwind CSS represents a powerful approach to building modern user interfaces. By embracing utility classes, you can dramatically speed up your development process, maintain consistency across large projects, and create highly customized designs without writing custom CSS.</p>
      <p>While the utility-first approach may seem counterintuitive at first, especially to those accustomed to traditional CSS methodologies, the productivity gains and flexibility it offers make it worth considering for your next project. As with any tool, the key is understanding when and how to use it effectively within your development workflow.</p>
    `,
    date: 'March 5, 2023',
    author: 'Chandan Mee',
    category: 'css',
    image: 'https://via.placeholder.com/1200x600/F59E0B/FFFFFF?text=Tailwind+CSS',
    tags: ['CSS', 'Tailwind', 'Frontend'],
    comments: 9,
    shares: 31,
  },
  {
    id: 5,
    title: 'React vs. Vue vs. Angular: Choosing the Right Framework',
    content: `
      <p>Selecting the right frontend framework for your project is a crucial decision that can impact development speed, application performance, and team productivity. React, Vue, and Angular are the three most popular options, each with its own strengths and trade-offs. This article provides a comparative analysis to help you make an informed choice for your next project.</p>
      
      <h2>Framework Overview</h2>
      
      <h3>React</h3>
      <p>Developed and maintained by Facebook, React is a JavaScript library for building user interfaces, particularly single-page applications.</p>
      <ul>
        <li><strong>Released:</strong> 2013</li>
        <li><strong>Current Version:</strong> 18.x</li>
        <li><strong>Core Philosophy:</strong> Component-based architecture with a virtual DOM for efficient rendering</li>
        <li><strong>Learning Curve:</strong> Moderate</li>
      </ul>
      
      <h3>Vue</h3>
      <p>Vue is a progressive JavaScript framework created by Evan You, a former Google engineer.</p>
      <ul>
        <li><strong>Released:</strong> 2014</li>
        <li><strong>Current Version:</strong> 3.x</li>
        <li><strong>Core Philosophy:</strong> Incrementally adoptable architecture focused on declarative rendering and component composition</li>
        <li><strong>Learning Curve:</strong> Low to Moderate</li>
      </ul>
      
      <h3>Angular</h3>
      <p>Angular is a complete TypeScript-based framework maintained by Google.</p>
      <ul>
        <li><strong>Released:</strong> 2016 (Angular 2+; AngularJS was released in 2010)</li>
        <li><strong>Current Version:</strong> 15.x</li>
        <li><strong>Core Philosophy:</strong> Comprehensive platform with built-in solutions for common application requirements</li>
        <li><strong>Learning Curve:</strong> Steep</li>
      </ul>
      
      <h2>Performance Comparison</h2>
      
      <h3>Rendering Speed</h3>
      <p>All three frameworks offer excellent performance for most applications, but there are some differences:</p>
      <ul>
        <li><strong>React:</strong> Uses a virtual DOM with efficient diffing algorithm; React 18 introduces concurrent rendering for improved performance</li>
        <li><strong>Vue:</strong> Also uses virtual DOM but with additional optimizations; Vue 3's reactivity system is highly efficient</li>
        <li><strong>Angular:</strong> Uses change detection with zone.js; generally performs well but can be slower for very large applications without careful optimization</li>
      </ul>
      
      <h3>Bundle Size</h3>
      <p>Bundle size affects initial load time and is an important consideration for performance:</p>
      <ul>
        <li><strong>React:</strong> ~40KB (core library)</li>
        <li><strong>Vue:</strong> ~30KB (core library)</li>
        <li><strong>Angular:</strong> ~130KB (minimum bundle)</li>
      </ul>
      
      <h2>Development Experience</h2>
      
      <h3>Component Model</h3>
      <p>Each framework has a different approach to components:</p>
      
      <h4>React</h4>
      <pre><code>
// React Function Component
function Welcome(props) {
  return &lt;h1&gt;Hello, {props.name}&lt;/h1&gt;;
}
      </code></pre>
      
      <h4>Vue</h4>
      <pre><code>
&lt;!-- Vue Single-File Component --&gt;
&lt;template&gt;
  &lt;h1&gt;Hello, {{ name }}&lt;/h1&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  props: ['name']
}
&lt;/script&gt;
      </code></pre>
      
      <h4>Angular</h4>
      <pre><code>
// Angular Component
@Component({
  selector: 'app-welcome',
  template: '&lt;h1&gt;Hello, {{name}}&lt;/h1&gt;'
})
export class WelcomeComponent {
  @Input() name: string;
}
      </code></pre>
      
      <h3>State Management</h3>
      <p>How each framework handles application state:</p>
      <ul>
        <li><strong>React:</strong> No built-in state management; commonly used with Redux, MobX, or the Context API</li>
        <li><strong>Vue:</strong> Includes Vuex (Vue 2) or Pinia (Vue 3) for state management</li>
        <li><strong>Angular:</strong> Includes services and RxJS for state management; NgRx is a popular Redux-inspired solution</li>
      </ul>
      
      <h2>Ecosystem and Community</h2>
      
      <h3>Community Size and Support</h3>
      <p>A strong community means better resources, libraries, and long-term support:</p>
      <ul>
        <li><strong>React:</strong> Largest community with extensive resources and third-party libraries</li>
        <li><strong>Vue:</strong> Growing community with excellent documentation</li>
        <li><strong>Angular:</strong> Strong enterprise adoption with comprehensive official documentation</li>
      </ul>
      
      <h3>Job Market</h3>
      <p>Framework popularity in the job market varies by region:</p>
      <ul>
        <li><strong>React:</strong> Highest demand globally, especially in startups and tech companies</li>
        <li><strong>Angular:</strong> Strong demand in enterprise environments</li>
        <li><strong>Vue:</strong> Growing demand, particularly popular in Asia and among smaller companies</li>
      </ul>
      
      <h2>Use Case Recommendations</h2>
      
      <h3>When to Choose React</h3>
      <ul>
        <li>Building large-scale, complex single-page applications</li>
        <li>When you need maximum flexibility and a minimal core library</li>
        <li>If your team is already familiar with JavaScript and prefers a more programmatic approach</li>
        <li>When you want access to the largest ecosystem of third-party components</li>
      </ul>
      
      <h3>When to Choose Vue</h3>
      <ul>
        <li>For projects that need to be incrementally adopted into existing applications</li>
        <li>When you prefer a balance between performance and development ease</li>
        <li>If your team includes developers with varying experience levels</li>
        <li>When you want excellent documentation and a gentler learning curve</li>
      </ul>
      
      <h3>When to Choose Angular</h3>
      <ul>
        <li>For large enterprise applications that benefit from strict conventions</li>
        <li>When you need a comprehensive framework with everything included</li>
        <li>If your team is familiar with TypeScript and object-oriented programming</li>
        <li>When you want a framework with long-term support from a major corporation</li>
      </ul>
      
      <h2>Migration and Flexibility</h2>
      
      <h3>Integration with Existing Projects</h3>
      <p>How easily each framework can be integrated into existing applications:</p>
      <ul>
        <li><strong>React:</strong> Very flexible, can be added to a small part of an existing page</li>
        <li><strong>Vue:</strong> Designed to be incrementally adoptable, excellent for gradual migration</li>
        <li><strong>Angular:</strong> Better suited for complete rewrites or new applications</li>
      </ul>
      
      <h3>Future-Proofing</h3>
      <p>Considerations for long-term maintenance:</p>
      <ul>
        <li><strong>React:</strong> Strong backward compatibility focus, but occasional breaking changes</li>
        <li><strong>Vue:</strong> Careful migration paths between major versions</li>
        <li><strong>Angular:</strong> Predictable six-month release cycle with clear deprecation policies</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>There is no one-size-fits-all answer to which framework is best. The right choice depends on your specific project requirements, team expertise, and long-term goals:</p>
      <ul>
        <li><strong>React</strong> excels in flexibility and ecosystem size, making it ideal for complex applications and teams that value freedom in their technical choices.</li>
        <li><strong>Vue</strong> offers the best balance of simplicity and power, making it perfect for teams that want rapid development without sacrificing performance or flexibility.</li>
        <li><strong>Angular</strong> provides a comprehensive solution with strong conventions, making it well-suited for large teams and enterprise applications that benefit from standardization.</li>
      </ul>
      <p>Consider starting with small proof-of-concept projects in each framework to get a feel for their development experience before making a final decision for your main project.</p>
    `,
    date: 'February 18, 2023',
    author: 'Chandan Mee',
    category: 'frameworks',
    image: 'https://via.placeholder.com/1200x600/EC4899/FFFFFF?text=Frontend+Frameworks',
    tags: ['React', 'Vue', 'Angular', 'Frameworks'],
    comments: 21,
    shares: 48,
  },
  {
    id: 6,
    title: 'SEO for Developers: Technical Optimizations for Better Rankings',
    content: `
      <p>Search Engine Optimization (SEO) is often associated with content creation and marketing, but developers play a crucial role in ensuring websites are technically optimized for search engines. This article focuses on the technical aspects of SEO that developers should implement to improve website visibility and search engine rankings.</p>
      
      <h2>Core Web Vitals and Page Experience</h2>
      <p>Google's Core Web Vitals have become essential ranking factors, measuring real-world user experience metrics:</p>
      
      <h3>Largest Contentful Paint (LCP)</h3>
      <p>LCP measures loading performance—how quickly the largest content element becomes visible.</p>
      <ul>
        <li><strong>Target:</strong> Under 2.5 seconds</li>
        <li><strong>Optimization techniques:</strong>
          <ul>
            <li>Optimize server response times</li>
            <li>Remove render-blocking resources</li>
            <li>Optimize and compress images</li>
            <li>Implement resource prioritization</li>
            <li>Consider using CDNs for faster content delivery</li>
          </ul>
        </li>
      </ul>
      
      <h3>First Input Delay (FID)</h3>
      <p>FID measures interactivity—how quickly a page responds to user interactions.</p>
      <ul>
        <li><strong>Target:</strong> Under 100 milliseconds</li>
        <li><strong>Optimization techniques:</strong>
          <ul>
            <li>Break up long tasks into smaller ones</li>
            <li>Optimize JavaScript execution</li>
            <li>Use web workers for complex calculations</li>
            <li>Reduce JavaScript bundle size</li>
            <li>Implement code splitting and lazy loading</li>
          </ul>
        </li>
      </ul>
      
      <h3>Cumulative Layout Shift (CLS)</h3>
      <p>CLS measures visual stability—how much elements move around during page load.</p>
      <ul>
        <li><strong>Target:</strong> Under 0.1</li>
        <li><strong>Optimization techniques:</strong>
          <ul>
            <li>Always include size attributes on images and videos</li>
            <li>Reserve space for ads, embeds, and iframes</li>
            <li>Avoid inserting content above existing content</li>
            <li>Use transform animations instead of properties that trigger layout changes</li>
            <li>Preload critical fonts to avoid text shifts</li>
          </ul>
        </li>
      </ul>
      
      <h2>Technical SEO Fundamentals</h2>
      
      <h3>Semantic HTML</h3>
      <p>Using proper HTML elements helps search engines understand your content structure:</p>
      <ul>
        <li>Use heading tags (h1-h6) in a logical hierarchy</li>
        <li>Implement semantic elements like article, section, nav, and aside</li>
        <li>Use descriptive anchor text for links</li>
        <li>Structure data with appropriate list types (ul, ol, dl)</li>
        <li>Use table elements only for tabular data</li>
      </ul>
      
      <h3>Metadata Optimization</h3>
      <p>Proper metadata helps search engines understand and display your content:</p>
      <pre><code>
&lt;!-- Essential metadata --&gt;
&lt;title&gt;Descriptive, Keyword-Rich Title (Under 60 characters)&lt;/title&gt;
&lt;meta name="description" content="Compelling description under 160 characters that includes relevant keywords and encourages clicks."&gt;

&lt;!-- Open Graph for social sharing --&gt;
&lt;meta property="og:title" content="Title for Social Sharing"&gt;
&lt;meta property="og:description" content="Description for Social Sharing"&gt;
&lt;meta property="og:image" content="https://example.com/image.jpg"&gt;
&lt;meta property="og:url" content="https://example.com/page"&gt;

&lt;!-- Twitter Card --&gt;
&lt;meta name="twitter:card" content="summary_large_image"&gt;
      </code></pre>
      
      <h3>URL Structure</h3>
      <p>Well-structured URLs improve both user experience and SEO:</p>
      <ul>
        <li>Keep URLs short and descriptive</li>
        <li>Use hyphens to separate words</li>
        <li>Include relevant keywords</li>
        <li>Maintain a logical hierarchy</li>
        <li>Avoid query parameters for indexable content when possible</li>
      </ul>
      <p>Example of a good URL structure:</p>
      <pre><code>https://example.com/blog/seo-techniques/technical-optimization</code></pre>
      
      <h2>Structured Data and Schema Markup</h2>
      <p>Structured data helps search engines understand the content and context of your pages, enabling rich results in search listings:</p>
      
      <h3>Common Schema Types</h3>
      <ul>
        <li><strong>Article</strong> - For blog posts and news articles</li>
        <li><strong>Product</strong> - For e-commerce product pages</li>
        <li><strong>LocalBusiness</strong> - For business listings</li>
        <li><strong>Event</strong> - For events with dates and locations</li>
        <li><strong>Recipe</strong> - For cooking instructions</li>
        <li><strong>FAQ</strong> - For frequently asked questions</li>
        <li><strong>HowTo</strong> - For step-by-step guides</li>
      </ul>
      
      <h3>Implementation Example</h3>
      <p>Here's a simple example of Article schema using JSON-LD:</p>
      <pre><code>
&lt;script type="application/ld+json"&gt;
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "SEO for Developers: Technical Optimizations",
  "author": {
    "@type": "Person",
    "name": "Chandan Mee"
  },
  "datePublished": "2023-01-30",
  "dateModified": "2023-01-30",
  "publisher": {
    "@type": "Organization",
    "name": "Developer Blog",
    "logo": {
      "@type": "ImageObject",
      "url": "https://example.com/logo.png"
    }
  },
  "image": "https://example.com/article-image.jpg",
  "description": "Learn about technical SEO optimizations that developers can implement."
}
&lt;/script&gt;
      </code></pre>
      
      <h2>Mobile Optimization</h2>
      <p>With Google's mobile-first indexing, mobile optimization is no longer optional:</p>
      
      <h3>Responsive Design</h3>
      <ul>
        <li>Use responsive design rather than separate mobile sites</li>
        <li>Implement viewport meta tag correctly</li>
        <li>Ensure tap targets are appropriately sized (minimum 48x48px)</li>
        <li>Test on various devices and screen sizes</li>
      </ul>
      
      <h3>Mobile Performance</h3>
      <ul>
        <li>Optimize images specifically for mobile</li>
        <li>Minimize render-blocking resources</li>
        <li>Implement AMP (Accelerated Mobile Pages) for content-focused pages if appropriate</li>
        <li>Consider mobile-specific user behaviors and needs</li>
      </ul>
      
      <h2>JavaScript SEO</h2>
      <p>Modern websites rely heavily on JavaScript, which presents unique SEO challenges:</p>
      
      <h3>Rendering Considerations</h3>
      <ul>
        <li><strong>Server-Side Rendering (SSR)</strong> - Pre-renders JavaScript content on the server</li>
        <li><strong>Static Site Generation (SSG)</strong> - Generates HTML at build time</li>
        <li><strong>Dynamic Rendering</strong> - Serves pre-rendered content to search engines and client-rendered content to users</li>
        <li><strong>Hybrid Approaches</strong> - Combines techniques for optimal performance and SEO</li>
      </ul>
      
      <h3>JavaScript SEO Best Practices</h3>
      <ul>
        <li>Make sure critical content doesn't rely solely on JavaScript</li>
        <li>Implement proper error handling for failed API calls</li>
        <li>Use the History API for clean URLs in single-page applications</li>
        <li>Ensure proper handling of meta tags in JavaScript frameworks</li>
        <li>Test with Google's Mobile-Friendly Test and URL Inspection tools</li>
      </ul>
      
      <h2>Advanced Technical SEO</h2>
      
      <h3>Internationalization</h3>
      <p>For websites targeting multiple countries or languages:</p>
      <ul>
        <li>Implement hreflang tags correctly</li>
        <li>Consider URL structure (subdomains, subdirectories, or ccTLDs)</li>
        <li>Use proper HTML lang attributes</li>
        <li>Implement country-specific content when relevant</li>
      </ul>
      
      <h3>XML Sitemaps</h3>
      <p>Help search engines discover and understand your content:</p>
      <ul>
        <li>Include all important, canonical URLs</li>
        <li>Update sitemaps when content changes</li>
        <li>Keep sitemaps under 50,000 URLs and 50MB</li>
        <li>Use sitemap index files for larger sites</li>
        <li>Include lastmod, changefreq, and priority attributes when appropriate</li>
      </ul>
      
      <h3>Robots.txt</h3>
      <p>Control crawler access to your site:</p>
      <pre><code>
# Example robots.txt
User-agent: *
Disallow: /admin/
Disallow: /private/
Disallow: /temp/

Sitemap: https://example.com/sitemap.xml
      </code></pre>
      
      <h2>Monitoring and Testing</h2>
      
      <h3>Essential Tools</h3>
      <ul>
        <li><strong>Google Search Console</strong> - Monitor indexing, performance, and issues</li>
        <li><strong>Lighthouse</strong> - Audit performance, accessibility, and SEO</li>
        <li><strong>PageSpeed Insights</strong> - Analyze page speed and Core Web Vitals</li>
        <li><strong>Mobile-Friendly Test</strong> - Check mobile compatibility</li>
        <li><strong>Rich Results Test</strong> - Validate structured data</li>
      </ul>
      
      <h3>Monitoring Best Practices</h3>
      <ul>
        <li>Set up regular automated testing in your CI/CD pipeline</li>
        <li>Implement real user monitoring (RUM) to track actual user experiences</li>
        <li>Create custom dashboards for key SEO metrics</li>
        <li>Set up alerts for significant changes or issues</li>
        <li>Regularly audit your site for technical SEO issues</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Technical SEO is a critical aspect of web development that directly impacts a site's visibility and performance in search results. By implementing these optimizations, developers can create websites that not only provide excellent user experiences but also rank well in search engines.</p>
      <p>Remember that SEO is an ongoing process, not a one-time task. Stay updated with search engine algorithm changes and best practices, and continuously monitor and improve your site's technical SEO performance.</p>
    `,
    date: 'January 30, 2023',
    author: 'Chandan Mee',
    category: 'seo',
    image: 'https://via.placeholder.com/1200x600/8B5CF6/FFFFFF?text=SEO+for+Developers',
    tags: ['SEO', 'Technical', 'Rankings'],
    comments: 14,
    shares: 39,
  },
];

const BlogPost = () => {
  const { id, slug } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        setLoading(true);
        let response;
        
        // Determine if we're using slug or ID based routing
        if (slug) {
          // Fetch by slug
          response = await getBlogBySlug(slug);
        } else if (id) {
          // Fetch by ID
          response = await getBlogById(id);
        } else {
          throw new Error('No blog identifier provided');
        }
        
        setPost(response.data);
        
        // Fetch related posts using the blog ID
        const blogId = response.data._id || response.data.id;
        const relatedResponse = await getRelatedBlogs(blogId);
        setRelatedPosts(relatedResponse.data);
        
        setError(null);
      } catch (err) {
        console.error('Failed to fetch blog post:', err);
        setError('Failed to load the blog post. Please try again later.');
        
        // Fallback to sample data if API fails
        const identifier = slug || id;
        let foundPost;
        
        if (slug) {
          // Try to find by slug in sample data
          foundPost = blogPostsData.find(post => post.slug === slug);
        } else if (id) {
          // Try to find by ID in sample data
          const postId = parseInt(id);
          foundPost = blogPostsData.find(post => post.id === postId);
        }
        
        if (foundPost) {
          setPost(foundPost);
          
          // Get related posts from sample data
          const sampleRelatedPosts = blogPostsData
            .filter(p => p.id !== foundPost.id && (p.category === foundPost.category || p.tags.some(tag => foundPost.tags.includes(tag))))
            .slice(0, 3);
          setRelatedPosts(sampleRelatedPosts);
        }
      } finally {
        setLoading(false);
      }
    };

    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    if (id || slug) {
      fetchBlogPost();
    }
  }, [id, slug]);
  
  // Loading state
  if (loading) {
    return (
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-gray-50 to-white dark:from-dark-900 dark:to-dark-800">
        <div className="container text-center">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-primary-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
          <p className="mt-4 text-dark-600 dark:text-gray-300">Loading blog post...</p>
        </div>
      </section>
    );
  }
  
  // If post not found or error
  if (error || !post) {
    return (
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-gray-50 to-white dark:from-dark-900 dark:to-dark-800">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-6">
            Post Not Found
          </h1>
          <p className="text-xl text-dark-600 dark:text-gray-300 mb-8">
            The blog post you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/blog" className="btn btn-primary">
            Back to Blog
          </Link>
        </div>
      </section>
    );
  }
  
  // Related posts are now fetched from the API
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-gradient-to-b from-gray-50 to-white dark:from-dark-900 dark:to-dark-800">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/blog" className="inline-flex items-center text-primary-600 dark:text-primary-400 mb-6 hover:underline">
              <FiArrowLeft className="mr-2" /> Back to Blog
            </Link>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 dark:text-white mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center text-dark-500 dark:text-gray-400 mb-8">
              <span className="flex items-center mr-6 mb-2">
                <FiCalendar className="mr-2" /> {post.date}
              </span>
              <span className="flex items-center mr-6 mb-2">
                <FiUser className="mr-2" /> {post.author}
              </span>
              <span className="flex items-center mr-6 mb-2">
                <FiMessageSquare className="mr-2" /> {post.comments} Comments
              </span>
              <span className="flex items-center mb-2">
                <FiShare2 className="mr-2" /> {post.shares} Shares
              </span>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300"
                >
                  <FiTag className="mr-1" /> {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Featured Image */}
      <section className="py-8 bg-white dark:bg-dark-800">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg"
          >
            <img 
              src={post.image || post.featuredImage || '/api/placeholder/800/400'} 
              alt={post.title} 
              className="w-full h-auto md:h-[400px] object-cover"
              onError={(e) => {
                e.target.src = '/api/placeholder/800/400';
              }}
            />
          </motion.div>
        </div>
      </section>
      
      {/* Blog Content */}
      <section className="py-16 bg-white dark:bg-dark-800">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-xl dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-dark-900 dark:prose-headings:text-white prose-p:text-dark-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6 prose-li:text-dark-700 dark:prose-li:text-gray-300 prose-strong:text-dark-900 dark:prose-strong:text-white prose-code:text-primary-600 dark:prose-code:text-primary-400 prose-code:bg-gray-100 dark:prose-code:bg-dark-700 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-blockquote:border-l-4 prose-blockquote:border-primary-500 prose-blockquote:pl-6 prose-blockquote:italic prose-img:rounded-lg prose-img:shadow-md"
                 style={{
                   fontSize: '1.125rem',
                   lineHeight: '1.75',
                   letterSpacing: '0.01em'
                 }}>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.content}
              </ReactMarkdown>
            </div>
            
            {/* Author Bio - Smaller and more compact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 p-6 bg-gray-50 dark:bg-dark-700 rounded-lg border-l-4 border-primary-500"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-primary-600 dark:text-primary-400 text-xl font-bold flex-shrink-0">
                  {post.author.split(' ').map(name => name[0]).join('')}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-1">{post.author}</h3>
                  <p className="text-sm text-dark-600 dark:text-gray-300 mb-3 leading-relaxed">
                    Web Developer & Digital Marketing Professional with a passion for creating efficient, user-friendly, and visually appealing web solutions.
                  </p>
                  <div className="flex space-x-3">
                    <a href="#" className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-lg">
                      <FiTwitter />
                    </a>
                    <a href="#" className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-lg">
                      <FiLinkedin />
                    </a>
                    <a href="#" className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-lg">
                      <FiGithub />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50 dark:bg-dark-900">
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-3xl font-bold text-dark-900 dark:text-white mb-12 text-center"
            >
              Related Articles
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <motion.article
                  key={relatedPost.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="card overflow-hidden group h-full flex flex-col"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center text-sm text-dark-500 dark:text-gray-400 mb-3">
                      <span className="flex items-center mr-4">
                        <FiCalendar className="mr-1" /> {relatedPost.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-3">
                      {relatedPost.title}
                    </h3>
                    <p className="text-dark-600 dark:text-gray-300 mb-4 flex-grow">
                      {relatedPost.excerpt}
                    </p>
                    <Link
                      to={`/blog/${relatedPost.id}`}
                      className="text-primary-600 dark:text-primary-400 font-medium hover:underline flex items-center mt-auto"
                    >
                      Read More <FiArrowRight className="ml-1" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Comments Section - Hidden for now */}
      {false && (
      <section className="py-16 bg-white dark:bg-dark-800">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-3xl font-bold text-dark-900 dark:text-white mb-8"
            >
              Comments ({post.comments})
            </motion.h2>
            
            {/* Comment Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-12"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-dark-900 dark:text-white">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-dark-900 dark:text-white">Your Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="comment" className="block mb-2 text-dark-900 dark:text-white">Your Comment</label>
                  <textarea 
                    id="comment" 
                    rows="5" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                    placeholder="Share your thoughts..."
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Post Comment
                </button>
              </form>
            </motion.div>
            
            {/* Sample Comments */}
            <div className="space-y-8">
              {/* This would typically come from an API */}
              {[1, 2, 3].map((commentId) => (
                <motion.div
                  key={commentId}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * commentId }}
                  className="p-6 border-b border-gray-200 dark:border-dark-600 last:border-0"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-primary-600 dark:text-primary-400 text-lg font-bold">
                      {String.fromCharCode(64 + commentId)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-dark-900 dark:text-white">User {commentId}</h4>
                        <span className="text-sm text-dark-500 dark:text-gray-400">{new Date(new Date().setDate(new Date().getDate() - commentId)).toLocaleDateString()}</span>
                      </div>
                      <p className="text-dark-600 dark:text-gray-300 mb-3">
                        {commentId === 1 ? 
                          "This is an excellent article! I've been looking for a comprehensive guide on this topic for a while. The examples you provided are very helpful." :
                          commentId === 2 ?
                          "Great insights! I particularly enjoyed the section about performance optimization. Have you considered writing a follow-up article that goes deeper into that aspect?" :
                          "Thanks for sharing your knowledge. I've implemented some of these techniques in my projects and seen significant improvements already."}
                      </p>
                      <button className="text-primary-600 dark:text-primary-400 text-sm font-medium hover:underline">Reply</button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      )}
    </>
  );
};

export default BlogPost;