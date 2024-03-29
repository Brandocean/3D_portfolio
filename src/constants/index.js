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
    kanbanstar,
    wisdomisland,
    gplant,
    threejs,
    testimonial1,
    testimonial2,
    testimonial3
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
        title: "Frontend Developer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: mobile,
    },
    {
        title: "Cloud Developer",
        icon: backend,
    },
    {
        title: "Software Engineer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
        style: "shadow-white",
    },
    {
        name: "CSS 3",
        icon: css,
        style: "shadow-white",
    },
    {
        name: "JavaScript",
        icon: javascript,
        style: "shadow-white",
    },
    {
        name: "Java",
        icon: java,
        style: "shadow-white",
    },
    {
        name: "React JS",
        icon: reactjs,
        style: "shadow-white",
    },
    {
        name: "Node JS",
        icon: nodejs,
        style: "shadow-white",
    },
    {
        name: "MongoDB",
        icon: mongodb,
        style: "shadow-white",
    },
    {
        name: "MySql",
        icon: mysql,
        style: "shadow-white",
    },
    {
        name: "AWS",
        icon: aws,
        style: "shadow-white",
    },
    {
        name: "GCP",
        icon: gcp,
        style: "shadow-white",
    },
    {
        name: "Git",
        icon: git,
        style: "shadow-white",
    },
    {
        name: "Linux",
        icon: linux,
        style: "shadow-white",
    },
];

const experiences = [
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
        title: "Back-end Developer",
        company_name: "Atos",
        icon: atos,
        iconBg: "#E6DEDD",
        date: "Aug 2023 - Dec 2023",
        points: [
            "Developing and maintaining Microservices REST APIs using .NET technologies and other add-ons.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing best practices like Clean Architecture, SOLID, Repository Pattern, CQRS, Mediator, Saga, and Pub/Sub.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "Very enthusiastic, positive and curious person with solid technological concepts and a good level of tolerance for frustration.",
        name: "Salvador Avila",
        designation: "Software Engineer",
        company: "RelationalAI",
        image: testimonial1,
    },
    {
        testimonial:
            "His strong work ethic is evident, coupled with his adeptness in problem-solving and communication. A remarkable and efficient SCRUM Master.",
        name: "Francisco Tame",
        designation: "Software Engineer",
        company: "IMA Technologies",
        image: testimonial2,
    },
    {
        testimonial:
            "I admire his determination, his high level of commitment to what he does and his sense of humanity. He is a leader always ready to support his team.",
        name: "Mónica Larre",
        designation: "Teacher",
        company: "Tecnológico de Monterrey",
        image: testimonial3,
    },
];

const projects = [
    {
        name: "GPlant with IoT",
        description:
            "Web-based platform that allows users to check data about their intelligent plants, providing a convenient solution for caring the nature of our home.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "arduino",
                color: "green-text-gradient",
            },
            {
                name: "mysql",
                color: "pink-text-gradient",
            },
        ],
        image: gplant,
        source_code_link: "https://github.com/Brandocean/GPlant-IoT.git",
    },
    {
        name: "Wisdom Island",
        description:
            "Videogame where players fight with each other generating power by answering questions. This is supported by a web platform where the user can access courses.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "metaverse",
                color: "green-text-gradient",
            },
            {
                name: "unity",
                color: "pink-text-gradient",
            },
        ],
        image: wisdomisland,
        source_code_link: "https://github.com/Brandocean/Wisdom-Island.git",
    },
    {
        name: "Kanban Star",
        description:
            "Web application developed to simplify the most used and important features in Kanbanize, such as card creation, movement and queries of card information.",
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
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: kanbanstar,
        source_code_link: "https://github.com/Brandocean/KanbanStar",
    },
];

export { services, technologies, experiences, testimonials, projects };