Forced reflow:

A forced reflow occurs when JavaScript queries geometric properties (such as offsetWidth) after styles have been invalidated by a change to the DOM state. This can result in poor performance. Learn more about forced reflows and possible mitigations.
Top function call
Total reflow time
react-dom_client.js?v=ff2a4ada:17
78 ms
Source
Total reflow time
[unattributed]
1 ms
installHook.js:1
70 ms
DarkVeil.jsx:126
9 ms
root-container.e09813a7.js:1
3 ms




Network dependency tree:
Avoid chaining critical requests by reducing the length of chains, reducing the download size of resources, or deferring the download of unnecessary resources to improve page load.LCP
Maximum critical path latency: 2,224 ms
Initial Navigation
http://localhost:3000 - 420 ms, 1.26 KiB
/css2?family=DM+Mono&display=swap(fonts.googleapis.com) - 2,224 ms, 0.41 KiB
/css?family=Inconsolata(fonts.googleapis.com) - 2,222 ms, 0.52 KiB
/css?family=Source+Sans+Pro:400,700(fonts.googleapis.com) - 2,219 ms, 0.73 KiB
/css?family=IBM+Plex+Sans:400,500(fonts.googleapis.com) - 2,158 ms, 0.69 KiB
/fonts/cmu.css(cdn.mathpix.com) - 2,080 ms, 2.85 KiB
/css2?family=…(fonts.googleapis.com) - 591 ms, 1.14 KiB
…v20/UcC73FwrK….woff2(fonts.gstatic.com) - 1,331 ms, 47.33 KiB
…v27/uU9NCBsR6….woff2(fonts.gstatic.com) - 1,328 ms, 35.52 KiB
/src/main.jsx?t=176…(localhost) - 503 ms, 3.36 KiB
/src/App.jsx?t=176…(localhost) - 544 ms, 25.45 KiB
…pages/Home.jsx?t=176…(localhost) - 584 ms, 9.50 KiB
…sections/ClientSection.jsx(localhost) - 681 ms, 18.12 KiB
…LightRays/LightRays.jsx(localhost) - 804 ms, 42.76 KiB
…deps/ogl.js?v=ff2a4ada(localhost) - 819 ms, 240.93 KiB
…sections/IndustrySection.jsx(localhost) - 684 ms, 27.65 KiB
…DarkVeil/DarkVeil.jsx(localhost) - 806 ms, 33.35 KiB
…sections/SkillsSection.jsx(localhost) - 668 ms, 23.27 KiB
…icons/seo.png?import(localhost) - 800 ms, 0.65 KiB
…icons/responsive.png?import(localhost) - 799 ms, 0.68 KiB
…icons/api.png?import(localhost) - 796 ms, 0.65 KiB
…icons/git.png?import(localhost) - 795 ms, 0.65 KiB
…icons/illustrator.png?import(localhost) - 791 ms, 0.68 KiB
…icons/figma.png?import(localhost) - 789 ms, 0.66 KiB
…icons/react.png?import(localhost) - 787 ms, 0.66 KiB
…icons/tailwind.png?import(localhost) - 787 ms, 0.67 KiB
…icons/javascript.png?import(localhost) - 783 ms, 0.68 KiB
…icons/css.png?import(localhost) - 783 ms, 0.65 KiB
…icons/html5.png?import(localhost) - 780 ms, 0.66 KiB
…illustrations/chandanmee-hero.png?import(localhost) - 699 ms, 0.72 KiB
…sections/MissionVision.jsx(localhost) - 698 ms, 19.64 KiB
…components/CTA.jsx(localhost) - 697 ms, 8.04 KiB
…sections/ServiceSection.jsx(localhost) - 692 ms, 19.09 KiB
…sections/HeroSection.jsx(localhost) - 692 ms, 46.27 KiB
…sections/AchievementSection.jsx(localhost) - 692 ms, 18.69 KiB
…deps/react-icons_fa.js?v=ff2a4ada(localhost) - 685 ms, 1,374.73 KiB
…sections/ProjectsShowcase.jsx?t=176…(localhost) - 674 ms, 29.88 KiB
…blog/BlogPost.jsx(localhost) - 619 ms, 168.21 KiB
…deps/react-markdown.js?v=ff2a4ada(localhost) - 761 ms, 212.04 KiB
…deps/chunk-UAYLNJM6.js?v=ff2a4ada(localhost) - 812 ms, 130.82 KiB
…deps/remark-gfm.js?v=ff2a4ada(localhost) - 764 ms, 94.73 KiB
…pages/Contact.jsx(localhost) - 600 ms, 58.38 KiB
…api/contact.js(localhost) - 757 ms, 14.75 KiB
…utils/errorHandler.js(localhost) - 808 ms, 12.90 KiB
…utils/logger.js(localhost) - 807 ms, 11.02 KiB
…components/Navbar.jsx(localhost) - 577 ms, 45.28 KiB
…deps/framer-motion.js?v=ff2a4ada(localhost) - 664 ms, 375.97 KiB
…deps/chunk-OBYCLIUT.js?v=ff2a4ada(localhost) - 776 ms, 12.69 KiB
…deps/react-icons_fi.js?v=ff2a4ada(localhost) - 652 ms, 146.18 KiB
…deps/chunk-XCQUQFRJ.js?v=ff2a4ada(localhost) - 776 ms, 5.05 KiB
…assets/chandan_mee.png?import(localhost) - 661 ms, 0.65 KiB
…assets/chandan_mee_lt.png?import(localhost) - 659 ms, 0.66 KiB
…admin/AdminDashboard.jsx(localhost) - 630 ms, 62.69 KiB
…components/AdminHeader.jsx(localhost) - 774 ms, 28.81 KiB
…components/AdminSidebar.jsx(localhost) - 772 ms, 30.17 KiB
…context/AuthContext.jsx(localhost) - 629 ms, 14.64 KiB
…api/config.js(localhost) - 772 ms, 24.64 KiB
…api/auth.js(localhost) - 768 ms, 18.88 KiB
…blog/Blog.jsx(localhost) - 601 ms, 62.21 KiB
…api/blog.js(localhost) - 759 ms, 17.44 KiB
…pages/Projects.jsx?t=176…(localhost) - 597 ms, 53.20 KiB
…gallery/riayanahomes_proj.png?import(localhost) - 753 ms, 0.71 KiB
…gallery/mbtechlife_proj.png?import(localhost) - 752 ms, 0.70 KiB
…gallery/jrdigital_proj.png?import(localhost) - 749 ms, 0.69 KiB
…gallery/its_m.png?import(localhost) - 745 ms, 0.66 KiB
…gallery/netclove_proj.png?import(localhost) - 744 ms, 0.69 KiB
…gallery/edumoss_proj.png?import(localhost) - 741 ms, 0.69 KiB
…gallery/focusmate_proj.png?import(localhost) - 739 ms, 0.69 KiB
…gallery/teamify_proj.png?import(localhost) - 736 ms, 0.69 KiB
…gallery/cyberites_proj.png?import(localhost) - 736 ms, 0.69 KiB
…gallery/ibuildsuite_proj.png?import(localhost) - 733 ms, 0.70 KiB
…gallery/convergeui_proj.png?import(localhost) - 730 ms, 0.70 KiB
…gallery/fusiondesk_proj.png?import(localhost) - 729 ms, 0.70 KiB
…pages/About.jsx(localhost) - 587 ms, 63.42 KiB
…certificate/be10x.png?import(localhost) - 726 ms, 0.67 KiB
…certificate/outskill_ai.png?import(localhost) - 726 ms, 0.69 KiB
…certificate/git-inkedin.png?import(localhost) - 726 ms, 0.71 KiB
…certificate/product_uiux.jpg?import(localhost) - 720 ms, 0.70 KiB
…certificate/tcs_certificate.png?import(localhost) - 720 ms, 0.71 KiB
…certificate/accenture_certificate2.png?import(localhost) - 716 ms, 0.73 KiB
…certificate/accenture_certificate.png?import(localhost) - 715 ms, 0.73 KiB
…certificate/googele_digital_garage.png?import(localhost) - 714 ms, 0.73 KiB
…certificate/learntube_react.jpg?import(localhost) - 710 ms, 0.71 KiB
…certificate/reactjs-linkedin.png?import(localhost) - 709 ms, 0.72 KiB
…certificate/pm-linkedin.png?import(localhost) - 706 ms, 0.71 KiB
…illustrations/dots-pattern-bg.png?import(localhost) - 706 ms, 0.74 KiB
…illustrations/chandanmee-about.png?import(localhost) - 704 ms, 0.73 KiB
…admin/MediaManager.jsx(localhost) - 647 ms, 133.41 KiB
…knowledge/KnowledgeEditor.jsx(localhost) - 645 ms, 79.36 KiB
…knowledge/KnowledgeManager.jsx(localhost) - 641 ms, 135.01 KiB
…admin/BlogEditor.jsx(localhost) - 640 ms, 90.36 KiB
…admin/BlogManager.jsx(localhost) - 638 ms, 93.27 KiB
…components/ProtectedRoute.jsx(localhost) - 629 ms, 6.05 KiB
…pages/Login.jsx(localhost) - 621 ms, 27.29 KiB
…admin/AdminBlog.jsx(localhost) - 620 ms, 59.57 KiB
…components/Footer.jsx(localhost) - 580 ms, 22.52 KiB
…deps/react-dom_client.js?v=ff2a4ada(localhost) - 551 ms, 881.21 KiB
…deps/chunk-D7552MD7.js?v=ff2a4ada(localhost) - 649 ms, 16.45 KiB
…deps/react_jsx-dev-runtime.js?v=ff2a4ada(localhost) - 531 ms, 12.31 KiB
…deps/chunk-G3PMV62Z.js?v=ff2a4ada(localhost) - 576 ms, 8.08 KiB
…deps/chunk-BQYK6RGN.js?v=ff2a4ada(localhost) - 570 ms, 42.91 KiB
…context/ThemeContext.jsx(localhost) - 569 ms, 5.79 KiB
…deps/react-router-dom.js?v=ff2a4ada(localhost) - 555 ms, 416.14 KiB
/src/index.css?t=176…(localhost) - 554 ms, 75.64 KiB
…deps/react.js?v=ff2a4ada(localhost) - 531 ms, 1.30 KiB
/@vite/client(localhost) - 503 ms, 159.58 KiB
…client/env.mjs(localhost) - 523 ms, 3.68 KiB
/@react-refresh(localhost) - 507 ms, 110.77 KiB







Diagnostic:

Minimize main-thread work 2.4 s

Consider reducing the time spent parsing, compiling and executing JS. You may find delivering smaller JS payloads helps with this. Learn how to minimize main-thread workTBT


Script Evaluation
924 ms
Other
699 ms
Script Parsing & Compilation
323 ms
Style & Layout
247 ms
Rendering
54 ms
Garbage Collection
29 ms
Parse HTML & CSS
28 ms


Minify JavaScript Est savings of 2,229 KiB
localhost 1st party
4,509.5 KiB	2,112.0 KiB
…deps/react-dom_client.js?v=ff2a4ada(localhost)
880.9 KiB
266.6 KiB
/@vite/client(localhost)
159.3 KiB
135.0 KiB
…deps/react-router-dom.js?v=ff2a4ada(localhost)
415.8 KiB
113.3 KiB
…deps/framer-motion.js?v=ff2a4ada(localhost)
375.7 KiB
108.4 KiB
…blog/BlogPost.jsx(localhost)
167.9 KiB
107.7 KiB
/@react-refresh(localhost)
110.5 KiB
100.3 KiB
…knowledge/KnowledgeManager.jsx(localhost)
134.7 KiB
94.2 KiB
…admin/MediaManager.jsx(localhost)
133.1 KiB
92.4 KiB
…deps/react-markdown.js?v=ff2a4ada(localhost)
211.7 KiB
78.7 KiB
…deps/ogl.js?v=ff2a4ada(localhost)
240.6 KiB
69.6 KiB
…admin/BlogManager.jsx(localhost)
93.0 KiB
64.1 KiB
…admin/BlogEditor.jsx(localhost)
90.1 KiB
62.5 KiB
…knowledge/KnowledgeEditor.jsx(localhost)
79.1 KiB
53.5 KiB
…deps/chunk-UAYLNJM6.js?v=ff2a4ada(localhost)
130.5 KiB
44.8 KiB
…blog/Blog.jsx(localhost)
61.9 KiB
42.7 KiB
…pages/About.jsx(localhost)
63.1 KiB
41.6 KiB
…admin/AdminDashboard.jsx(localhost)
62.4 KiB
40.4 KiB
…pages/Contact.jsx(localhost)
58.1 KiB
39.2 KiB
…admin/AdminBlog.jsx(localhost)
59.3 KiB
39.1 KiB
…pages/Projects.jsx?t=176…(localhost)
52.9 KiB
36.4 KiB
…components/Navbar.jsx(localhost)
45.0 KiB
31.5 KiB
…LightRays/LightRays.jsx(localhost)
42.5 KiB
31.2 KiB
…sections/HeroSection.jsx(localhost)
46.0 KiB
30.9 KiB
…deps/remark-gfm.js?v=ff2a4ada(localhost)
94.4 KiB
27.7 KiB
…api/config.js(localhost)
24.4 KiB
21.6 KiB
…DarkVeil/DarkVeil.jsx(localhost)
33.1 KiB
20.3 KiB
…components/AdminSidebar.jsx(localhost)
29.9 KiB
20.2 KiB
…sections/ProjectsShowcase.jsx?t=176…(localhost)
29.6 KiB
19.9 KiB
…deps/react-icons_fi.js?v=ff2a4ada(localhost)
145.9 KiB
19.5 KiB
…components/AdminHeader.jsx(localhost)
28.5 KiB
17.7 KiB
…pages/Login.jsx(localhost)
27.0 KiB
17.6 KiB
…sections/IndustrySection.jsx(localhost)
27.4 KiB
16.1 KiB
…api/auth.js(localhost)
18.6 KiB
15.7 KiB
…sections/SkillsSection.jsx(localhost)
23.0 KiB
14.7 KiB
…api/blog.js(localhost)
17.2 KiB
14.5 KiB
/src/App.jsx?t=176…(localhost)
25.2 KiB
14.1 KiB
…components/Footer.jsx(localhost)
22.2 KiB
13.6 KiB
…deps/chunk-BQYK6RGN.js?v=ff2a4ada(localhost)
42.6 KiB
12.2 KiB
…api/contact.js(localhost)
14.5 KiB
12.2 KiB
…sections/AchievementSection.jsx(localhost)
18.4 KiB
12.1 KiB
…sections/MissionVision.jsx(localhost)
19.4 KiB
11.4 KiB
…sections/ServiceSection.jsx(localhost)
18.8 KiB
11.4 KiB
…utils/errorHandler.js(localhost)
12.6 KiB
11.0 KiB
…sections/ClientSection.jsx(localhost)
17.8 KiB
10.8 KiB
…context/AuthContext.jsx(localhost)
14.4 KiB
9.9 KiB
…utils/logger.js(localhost)
10.7 KiB
8.7 KiB
…deps/chunk-G3PMV62Z.js?v=ff2a4ada(localhost)
7.8 KiB
6.8 KiB
…pages/Home.jsx?t=176…(localhost)
9.2 KiB
4.9 KiB
…components/CTA.jsx(localhost)
7.8 KiB
4.3 KiB
…deps/chunk-D7552MD7.js?v=ff2a4ada(localhost)
16.1 KiB
3.5 KiB
…deps/chunk-OBYCLIUT.js?v=ff2a4ada(localhost)
12.4 KiB
3.4 KiB
…deps/react_jsx-dev-runtime.js?v=ff2a4ada(localhost)
12.0 KiB
3.2 KiB
…client/env.mjs(localhost)
3.4 KiB
2.9 KiB
…components/ProtectedRoute.jsx(localhost)
5.8 KiB
2.9 KiB
…context/ThemeContext.jsx(localhost)
5.5 KiB
2.8 KiB
Unattributable
173.8 KiB	116.9 KiB



Reduce unused JavaScript Est savings of 4,643 KiB
Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes consumed by network activity. Learn how to reduce unused JavaScript.FCPLCP
URL
Transfer Size
Est Savings
localhost 1st party
4,925.5 KiB	3,377.5 KiB
…deps/react-icons_fa.js?v=ff2a4ada(localhost)
1,374.4 KiB
1,329.9 KiB
…
1,350.3 KiB
1,329.9 KiB
…deps/react-dom_client.js?v=ff2a4ada(localhost)
880.9 KiB
396.6 KiB
…react-dom/cjs/react-dom-client.development.js
868.1 KiB
394.0 KiB
…scheduler/cjs/scheduler.development.js
11.1 KiB
2.6 KiB
…deps/react-router-dom.js?v=ff2a4ada(localhost)
415.8 KiB
366.2 KiB
…react-router/dist/development/chunk-C37GKA54.mjs
313.9 KiB
272.5 KiB
…react-router/dist/development/chunk-KIUJAIYX.mjs
79.9 KiB
78.4 KiB
…react-router/dist/development/dom-export.mjs
6.1 KiB
6.0 KiB
…set-cookie-parser/lib/set-cookie.js
5.5 KiB
5.1 KiB
…cookie/src/index.ts
4.6 KiB
4.1 KiB
…deps/framer-motion.js?v=ff2a4ada(localhost)
375.7 KiB
211.6 KiB
../../framer-motion/dist/es/projection/node/create-projection-node.mjs
40.7 KiB
33.3 KiB
../../framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs
13.8 KiB
13.1 KiB
../../framer-motion/dist/es/animation/sequence/create.mjs
6.7 KiB
6.6 KiB
../../motion-dom/dist/es/animation/generators/spring/index.mjs
4.8 KiB
4.7 KiB
../../framer-motion/dist/es/gestures/pan/PanSession.mjs
4.4 KiB
4.3 KiB
…deps/ogl.js?v=ff2a4ada(localhost)
240.6 KiB
190.3 KiB
…extras/GLTFLoader.js
29.0 KiB
28.0 KiB
…math/functions/Mat4Func.js
15.1 KiB
13.1 KiB
…extras/Raycast.js
10.7 KiB
10.1 KiB
…extras/Orbit.js
9.8 KiB
9.7 KiB
…core/Texture.js
6.7 KiB
6.7 KiB
…deps/react-markdown.js?v=ff2a4ada(localhost)
211.7 KiB
137.1 KiB
…mdast-util-from-markdown/dev/lib/index.js
24.3 KiB
24.3 KiB
…hast-util-to-jsx-runtime/lib/index.js
12.0 KiB
11.6 KiB
…micromark/dev/lib/create-tokenizer.js
11.0 KiB
10.9 KiB
…unified/lib/index.js
20.8 KiB
8.3 KiB
…micromark/dev/lib/initialize/document.js
6.8 KiB
6.7 KiB
…deps/react-icons_fi.js?v=ff2a4ada(localhost)
145.9 KiB
134.0 KiB
…
141.7 KiB
134.0 KiB
…deps/chunk-UAYLNJM6.js?v=ff2a4ada(localhost)
130.5 KiB
96.1 KiB
…micromark-core-commonmark/dev/lib/html-flow.js
11.5 KiB
11.2 KiB
…micromark-core-commonmark/dev/lib/html-text.js
8.5 KiB
8.4 KiB
…micromark-core-commonmark/dev/lib/label-end.js
7.9 KiB
7.6 KiB
…micromark-core-commonmark/dev/lib/code-fenced.js
6.0 KiB
5.8 KiB
…micromark-core-commonmark/dev/lib/list.js
6.0 KiB
5.7 KiB
…deps/remark-gfm.js?v=ff2a4ada(localhost)
94.4 KiB
86.1 KiB
…micromark-extension-gfm-table/dev/lib/syntax.js
12.9 KiB
12.9 KiB
…micromark-extension-gfm-autolink-literal/dev/lib/syntax.js
10.6 KiB
9.3 KiB
…micromark-extension-gfm-footnote/dev/lib/syntax.js
9.0 KiB
8.9 KiB
…markdown-table/index.js
4.4 KiB
4.4 KiB
…mdast-util-gfm-table/lib/index.js
4.4 KiB
4.4 KiB
…knowledge/KnowledgeManager.jsx(localhost)
134.7 KiB
62.9 KiB
…
63.8 KiB
62.6 KiB
…admin/MediaManager.jsx(localhost)
133.1 KiB
61.6 KiB
…
62.5 KiB
61.3 KiB
…admin/BlogManager.jsx(localhost)
93.0 KiB
43.0 KiB
…
43.9 KiB
42.7 KiB
…admin/BlogEditor.jsx(localhost)
90.1 KiB
39.3 KiB
…
40.2 KiB
39.0 KiB
…knowledge/KnowledgeEditor.jsx(localhost)
79.1 KiB
36.5 KiB
…
37.4 KiB
36.2 KiB
…admin/AdminDashboard.jsx(localhost)
62.4 KiB
29.8 KiB
…
30.8 KiB
29.5 KiB
…pages/About.jsx(localhost)
63.1 KiB
28.6 KiB
…
30.3 KiB
28.3 KiB
…admin/AdminBlog.jsx(localhost)
59.3 KiB
27.3 KiB
…
28.0 KiB
27.0 KiB
…pages/Contact.jsx(localhost)
58.1 KiB
27.1 KiB
…
27.8 KiB
26.8 KiB
…blog/Blog.jsx(localhost)
61.9 KiB
26.7 KiB
…
27.6 KiB
26.4 KiB
…blog/BlogPost.jsx(localhost)
167.9 KiB
25.2 KiB
…
67.7 KiB
24.9 KiB
…pages/Projects.jsx?t=176…(localhost)
52.9 KiB
21.5 KiB



