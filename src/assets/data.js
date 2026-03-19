export const projects = [
    {
        id: 1,
        image: "taskpilot",
        title: "TaskPilot",
        subtitle: "Real-Time Project Management Platform",
        description:
            "A full-stack project management platform designed for teams to manage tasks, collaborate in real time, and track progress efficiently.",
        tech: ["React", "Node.js", "MongoDB", "Socket.IO"],
        highlights: [
            "Implemented real-time synchronization using WebSockets (Socket.IO)",
            "Kanban board with drag-and-drop",
            "JWT authentication with role-based access",
            "REST API with optimized database queries",
        ],
        github: "https://github.com/imswag99/mern-saas-project-management",
        live: "https://mern-project-management-saas.vercel.app",
    },

    {
        id: 2,
        image: "jobpedia",
        title: "Jobpedia",
        subtitle: "Full-Stack Job Portal System",
        description:
            "A full-featured job portal enabling recruiters to manage job postings and applicants to apply, track applications, and manage resumes through role-based dashboards.",
        tech: ["Django", "PostgreSQL", "Tailwind CSS"],
        highlights: [
            "Role-based authentication (Recruiter & Applicant)",
            "Job posting and application management system",
            "Resume upload and tracking with status updates",
            "Dashboard for recruiters and applicants",
        ],
        github: "https://github.com/imswag99/django_job_portal",
    },

    {
        id: 3,
        image: "mindtrace",
        title: "MindTrace",
        subtitle: "Knowledge Retention Tracking System",
        description:
            "An application designed to analyze knowledge retention and model learning decay using custom time-based algorithms.",
        tech: ["React", "Node.js", "MongoDB"],
        highlights: [
            "Custom knowledge decay algorithm",
            "Data visualization for retention tracking",
            "Optimized backend with indexed queries",
            "Modular REST API architecture",
        ],
        github: "https://github.com/imswag99/mern-knowledge-decay-tracker",
        live: " https://mern-knowledge-decay-tracker.vercel.app",
    },

    {
        id: 4,
        image: "educate",
        title: "E-DUCATE",
        subtitle: "Learning Management System",
        description:
            "A full-stack learning platform enabling course creation, enrollment, and feedback with role-based access for students and instructors.",
        tech: ["Django", "Tailwind CSS", "MySQL"],
        highlights: [
            "Role-based authentication system",
            "Course and lesson management",
            "Review and rating system",
            "REST API-driven backend",
        ],
        github: "https://github.com/imswag99/django-mini-lms",
    },
];
