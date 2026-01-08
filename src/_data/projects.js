import fusiondeskProj from '@assets/gallery/fusiondesk_proj.png';
import convergeuiProj from '@assets/gallery/convergeui_proj.png'
import ibuildsuite_proj from '@assets/gallery/ibuildsuite_proj.png'
import cyberitesProj from '@assets/gallery/cyberites_proj.png'
import TeamifyProj from '@assets/gallery/teamify_proj.png'
import FocusMateProj from '@assets/gallery/focusmate_proj.png'
import EdumossProj from '@assets/gallery/edumoss_proj.png';
import netcloveProj from '@assets/gallery/netclove_proj.png';
import ITSProj from '@assets/gallery/its_m.png';
import jrdigitalProj from '@assets/gallery/jrdigital_proj.png';
import mbtechlifeProj from '@assets/gallery/mbtechlife_proj.png';
import riayanahomesProj from '@assets/gallery/riayanahomes_proj.png';

export const projects = [
  {
    id: 1,
    title: 'Fusiondesk- Integrated Service Management (ISM)',
    description: 'A unified platform designed to streamline IT and business service operations. Fusiondesk integrates ticketing, asset management, and workflow automation, improving efficiency, collaboration, and service delivery across departments.',
    image: fusiondeskProj,
    tags: ['HTML', 'CSS', 'JS','Jquery','React','Redux','Tailwind CSS'],
    category: 'web-app',
    liveLink: 'https://fusiondesk.in/',
    githubLink: '#',
    summary: 'Fusiondesk transforms traditional IT service management into a seamless, automated experience. It addresses the chaos of unorganized support requests by centralizing them into a single, intuitive dashboard. The platform empowers IT teams to resolve issues faster, manage assets effectively, and automate repetitive tasks, ultimately driving operational excellence and higher user satisfaction.',
    features: [
      'Ticketing System',
      'Asset Management',
      'Workflow Automation',
      'Collaboration Tools'
    ]
  },

  {
    id: 2,
    title: 'ConvergeUI – Design System',
    description: 'A scalable and reusable design system built to ensure consistency across digital products. ConvergeUI includes a comprehensive component library, color palettes, typography, and interaction patterns that align brand identity with UI best practices.',
    image: convergeuiProj,
    tags: ['HTML', 'CSS', 'JS','Jquery','React','Redux','Tailwind CSS'],
    category: 'web-app',
    liveLink: '#',
    githubLink: '#',
    summary: 'ConvergeUI serves as the design backbone for digital products, bridging the gap between designers and developers. By providing a shared language of components and guidelines, it eliminates inconsistencies and speeds up the development lifecycle. This system ensures that every product built maintains a cohesive visual identity and delivers a high-quality user experience across all touchpoints.',
    features: [
      'Component Library',
      'Color Palettes',
      'Typography System',
      'Interaction Patterns'
    ],
    modules: [
      'Design Tokens',
      'Theming System',
      'Accessibility Standards',
      'Guidelines & Patterns'
    ]
  },
  {
    id: 3,
    title: 'iBuildSuite – Intranet Solutions',
    description: 'An enterprise intranet suite providing centralized communication, document management, and collaboration tools. iBuildSuite enhances internal engagement, improves accessibility, and simplifies knowledge sharing within organizations.',
    image: ibuildsuite_proj,
    tags: ['HTML', 'CSS', 'JS','Jquery','React','Redux', 'Socket.io', 'Tailwind CSS'],
    category: 'web-app',
    liveLink: '#',
    githubLink: '#',
    summary: 'iBuildSuite revolutionizes internal corporate communication by creating a digital workspace that connects employees, departments, and resources. It moves beyond simple document storage to foster a culture of collaboration and knowledge sharing. The platform ensures that critical information is accessible, team interactions are streamlined, and the organizational pulse is vibrant and connected.',
    features: [
      'Centralized Communication',
      'Document Management',
      'Collaboration Tools',
      'Knowledge Sharing'
    ],
    modules: [
      'Announcements',
      'Document Center',
      'Team Spaces',
      'Chat & Collaboration',
      'Knowledge Base'
    ]
  },

     {
    id: 4,
    title: 'Cyberites – Cybersecurity Services',
    description: 'A human resource self-service platform that empowers employees to manage personal data, leave requests, and payroll information independently. HRESS reduces HR workload while improving transparency and employee experience.',
    image: cyberitesProj,
    tags: ['HTML', 'CSS', 'JS','Jquery','React','Redux','Tailwind CSS'],
    category: 'website',
    liveLink: 'https://cyberites.in/',
    githubLink: '#',
    summary: 'Cyberites provides a robust digital front for cybersecurity services, emphasizing trust and technical expertise. The platform educates potential clients on security risks while showcasing comprehensive protection strategies. It serves as both an informational hub and a lead generation engine, designed to reassure businesses looking to fortify their digital assets against evolving threats.',
    features: [
      'Employee Self-Service',
      'Leave Management',
      'Payroll Information',
      'HR Workflow Automation'
    ]
  },

     {
    id: 5,
    title: 'Teamify -HRESS (Self Service Portal)',
    description: 'Teamify is a modern, comprehensive Human Resources Management System built with React and designed to streamline HR operations for companies. It provides a centralized platform for managing employees, leave requests, approvals, and organizational insights.',
    image: TeamifyProj,
    tags:  ['HTML', 'CSS', 'JS','Jquery','React','Redux','Tailwind CSS'],
    category: 'web-app',
    liveLink: '#',
    githubLink: '#',
    summary: 'Teamify modernizes HR operations by empowering employees with self-service capabilities and giving HR managers powerful tools for oversight. It reduces administrative overhead by automating leave tracking, approvals, and record-keeping. The platform creates a transparent and efficient HR environment where focus shifts from paperwork to people management and organizational growth.',
    features: [
      'Employee Management',
      'Leave Requests',
      'Approval Workflows',
      'Organizational Insights'
    ],
    modules: [
      'Employee Directory',
      'Leave Management',
      'Approvals',
      'Attendance',
      'Reports & Analytics'
    ]
  },
  // {
  //   id: 6,
  //   title: 'iBuildGRC – Governance, Risk & Compliance',
  //   description: 'An enterprise-grade GRC platform that centralizes risk assessment, policy management, and compliance reporting. iBuildGRC enables organizations to maintain regulatory compliance and strengthen governance processes',
  //   image: netcloveProj,
  //   tags:  ['HTML', 'CSS', 'JS','Jquery','React','Tailwind CSS'],
  //   category: 'web-app',
  //   liveLink: '#',
  //   githubLink: '#',
  // },
  //    {
  //   id: 6,
  //   title: 'DocSync – Collaborative Document Editor',
  //   description: 'A real-time collaborative document editing tool that allows multiple users to edit, comment, and share documents simultaneously. DocSync enhances team productivity and version control with live synchronization and secure cloud storage.',
  //   image: netcloveProj,
  //    tags: ['HTML', 'CSS', 'JS','Jquery','React','Tailwind CSS'],
  //   category:'web-app',
  //   liveLink: '#',
  //   githubLink: '#',
  // },

         {
    id: 6,
    title: 'FocusMate – AI-Powered Productivity Application',
    description: 'A smart productivity app built around the Pomodoro technique, designed to help users stay focused and manage tasks efficiently. FocusMate features customizable timers, AI-generated daily summaries and focus insights, toast and sound notifications, activity tracking, and seamless dark/light theme switching for an optimized work experience',
    image: FocusMateProj,
     tags: ['HTML', 'CSS', 'JS','Jquery','React','Redux','Tailwind CSS', 'AI'],
    category:'web-app',
    liveLink: 'https://focus-mate-teal.vercel.app/',
    githubLink: '#',
    summary: 'FocusMate is designed to combat distraction and enhance cognitive performance through structured work intervals. Leveraging the Pomodoro technique and AI insights, it helps users understand their productivity patterns. The application serves as a personal productivity coach, encouraging deep work sessions and providing actionable data to optimize daily routines.',
    features: [
      'Pomodoro Timer',
      'AI Summaries',
      'Focus Insights',
      'Activity Tracking'
    ]
  },
  {
    id: 7,
    title: 'Edumoss - E-learning Platform',
    description: 'A modern learning management system (LMS) providing interactive courses, assessments, and progress tracking. Edumoss supports both educators and learners with intuitive dashboards, personalized learning paths, and gamified experiences.',
    image: EdumossProj,
    tags:['WordPress', 'PHP', 'MySQL', 'Custom Theme'],
    category: 'website',
    liveLink: 'http://edumoss.com/',
    githubLink: '#',
    summary: 'Edumoss bridges the gap between traditional education and digital learning. It provides a flexible environment where educators can create engaging content and students can learn at their own pace. The platform supports a variety of learning styles through multimedia content and interactive assessments, making education more accessible and effective.',
    features: [
      'Interactive Courses',
      'Assessments',
      'Progress Tracking',
      'Personalized Learning Paths'
    ]
  },

   {
    id: 8,
    title: 'Netclove – Web & Digital Solutions Agency',
    description: 'A modern, responsive website built to showcase Netclove’s expertise in web and mobile development, digital marketing, ERP/CRM systems, and UI/UX design. The platform emphasizes clean visuals, smooth navigation, and a professional brand presence to engage clients effectively.',
    image: netcloveProj,
    tags:['HTML', 'CSS', 'JS','Jquery','Bootstrap','PHP','MySQL'],
    category: 'website',
    liveLink: 'https://netclove.com/',
    githubLink: '#',
    summary: 'Netclove stands as a digital showcase for a full-service web agency. It highlights technical prowess and creative solutions, serving as a primary touchpoint for client acquisition. The site effectively communicates the agency\'s ability to deliver end-to-end digital transformation, from initial concept and design to deployment and marketing.',
    features: [
      'Responsive Design',
      'Digital Marketing Integration',
      'ERP/CRM Systems',
      'UI/UX Design'
    ]
  },



      {
    id: 9,
    title: 'ITS - ServiceX',
    description: 'ITS – ServiceX is a service management solution used by large hardware organizations and service centers to manage service requests, coordinate support activities, track issues, and streamline service workflows across teams and locations.',
    image: ITSProj,
    tags:['HTML', 'CSS', 'JS','Tailwind CSS','Socket.io','React','Redux'],
    category: 'web-app',
    liveLink: '#',
    githubLink: '#',
    summary: 'ITS - ServiceX is engineered for high-volume service environments where speed and accuracy are paramount. It orchestrates the complex lifecycle of service requests, ensuring that hardware issues are tracked from reporting to resolution. The platform provides visibility into service performance, helping organizations maintain high service level agreements (SLAs) and customer trust.',
    features: [
      'File Organization',
      'Tagging System',
      'Advanced Search',
      'Access Control'
    ],
    modules: [
      'Service Catalog',
      'Request Management',
      'Asset Registry',
      'SLA Tracking',
      'Admin Console'
    ]
  }
];