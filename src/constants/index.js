import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    androidstudio,
    aws,
    gcp,
    bootstrap,
    cpp,
    firebase,
    java,
    kotlin,
    linux,
    mysql,
    python,
    unity,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    innovatium,
    atos,
    google,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Cloud Developer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    // {
    //     name: "Bootstrap",
    //     icon: bootstrap
    // },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "Java",
        icon: java,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    // {
    //     name: "Tailwind CSS",
    //     icon: tailwind,
    // },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "MySql",
        icon: mysql,
    },
    {
        name: "Amazon Web Services",
        icon: aws,
    },
    {
        name: "Google Cloud Platform",
        icon: gcp,
    },
    // {
    //     name: "Firebase",
    //     icon: firebase,
    // },
    {
        name: "Android Studio",
        icon: androidstudio,
    },
    // {
    //     name: "Kotlin",
    //     icon: kotlin,
    // },
    {
        name: "git",
        icon: git,
    },
    {
        name: "Linux",
        icon: linux,
    },
    // {
    //     name: "C++",
    //     icon: cpp,
    // },
    // {
    //     name: "Python",
    //     icon: python,
    // },
    {
        name: "figma",
        icon: figma,
    },
    // {
    //     name: "Unity",
    //     icon: unity,
    // },
    // {
    //     name: "docker",
    //     icon: docker,
    // },
];

const experiences = [
    // {
    //     title: "React.js Developer",
    //     company_name: "Starbucks",
    //     icon: starbucks,
    //     iconBg: "#383E56",
    //     date: "March 2020 - April 2021",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    {
        title: "Software Product Sprint Participant",
        company_name: "Google",
        icon: google,
        iconBg: "#E6DEDD",
        date: "May 2022 - Aug 2022",
        points: [
            "Collaboration with a team of peers to design and deploy a web application using Java, JavaScript, HTML and CSS over the course of 10 weeks.",
            "Implementing multiple Google Cloud Platform APIs, including App Engine and Datastore.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Contributing to open source software using Git and GitHub and  performing code reviews",
        ]
    },
    {
        title: "Full stack Developer",
        company_name: "Innovatium",
        icon: innovatium,
        iconBg: "#383E56",
        date: "Jan 2023 - Jun 2023",
        points: [
            "Developing and maintaining Kanban Star web application using React.js, Node.js, Firebase and AWS.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
            "Implementing agile methods such as SCRUM and Kanban.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Atos",
        icon: atos,
        iconBg: "#E6DEDD",
        date: "Aug 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };