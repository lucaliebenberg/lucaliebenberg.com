import {
  toll,
  raffle,
  mobile,
  backend,
  creator,
  web,
  webIcon,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  githubDark,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  web3ninja,
  trinity,
  shopify,
  carrent,
  python,
  jobit,
  tripguide,
  threejs,
  project9,
  project10,
  project11,
  project12,
  project13,
  heroBlog,
  stablecoin
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
    title: "UX/UI Designer",
    icon: backend,
  },
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Blockchain Enthusiast",
    icon: mobile,
  },
  {
    title: "Entrepreneur",
    icon: creator,
  },
];

const technologies = [
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  { name: "Python", icon: python },
  {
    name: "github",
    icon: githubDark,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
  {
    name: "MongoDB",
    icon: mongodb,
  },
];

const experiences = [
  {
    title: "Frontend Developer (Internship)",
    company_name: "Code Capsules",
    icon: starbucks,
    iconBg: "#383E56",
    date: "September 2022 - October 2022",
    points: [
      "Developed and structured a web app where the company would be able to see their working internal service status once connected their API endpoint, helping have company internal analytics (ReactJS, TypeScript, Git, Github)",
      "Deploying the web application with hosting",
      "Received code reviews and implemented changes throughout an agile process",
    ],
  },
  {
    title: "UX/UI Designer (Internship)",
    company_name: "Polymorph Systems",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "December 2022 - Jan 2023",
    points: [
      " Designed an internal dashboard for employees to view the status and details of ongoing and past projects, helping employees have universal project knowledge.",
      "Collaborating with a cross-functional team including designers, product managers, and other developers to create the product",
      "Helped the software engineers increase their MVP process by building out wireframes in Angular, helping increase testing duration",
      "Participating in project reviews and providing constructive feedback to other team members",
    ],
  },
  {
    title: "Blockchain Developer (Training Program)",
    company_name: "Brainnest",
    icon: shopify,
    iconBg: "#383E56",
    date: "January 2023 - Feb 2023",
    points: [
      "Identify the core concepts of Blockchain and get technical background on some of the biggest projects like HyperLedger, Factom and Ripple",
      "Created & Deployed solidity smart contract and interacted with them on the frontend",
      "Participating in homework reviews and providing constructive feedback to other classmates throughout the program",
    ],
  },
  {
    title: "UX/UI Designer (Part Time)",
    company_name: "Tilata",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "December 2022 - Present",
    points: [
      "Ideating and creating dashboard designs for concept design",
      "Collaborating with cross-functional team including contributors, management, and other community members to create the first MVP product",
      "Implementing responsive design and ensuring cross-browser compatibility",
      "Participating in design reviews and receive constructive feedback to further improve the MVP for first release",
    ],
  },
  {
    title: "Frontend Developer (Internship)",
    company_name: "The Web3 Ninja",
    icon: web3ninja,
    iconBg: "#E6DEDD",
    date: "March 2023 - June 2023",
    points: [
      "Converting Figma design systems to React TypeScript components using Storybook",
      "Implementing responsive design and ensuring cross-browser compatibility",
      "Participating in code reviews and receive constructive feedback to further improve the components",
      " Enhanced user experience through UI/UX improvements, actively participating in code reviews and agile development process",
    ],
  },
  {
    title: "Junior Software Developer",
    company_name: "Trinity IoT",
    icon: trinity,
    iconBg: "#01A4AD",
    date: "July 2023 - Present",
    points: [
      " Work on a web portal implementing already built Django APIs to effectively display data, helping users improve their decision making on hardware devices",
      "Design and develop a fullstack SVR portal, solving multi tenant vehicle tracking through interacting with custom Django built APIs and hardware devices firmware, enabling hardware tracking interactions for recovering vehicles",
      "Design and architecture the database, making sure the backend is architectured to compliment the UX/UI Designs, also taking security into account",
      " Develop and maintain frontend + backend features on our client production security portal, implementing testing and clean code using Django and NextJS - TypeScript",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Having design and development knowledge, Luca bridges the gap between designers and developers with ease. A pleasure to work with. Highly recommend",
    name: "Shaun Mbolompo",
    designation: "Computer Science & Business Computing Student",
    company: "University of Cape Town",
    image: "https://i.ibb.co/0Dwf3Zj/shaun.jpg",
  },
  {
    testimonial:
      "A developer who truly cares about their clients having a digital prescence.",
    name: "Joshua Van Breda",
    designation: "Game Developer",
    company: "Mezmerize Studios",
    image: "https://i.ibb.co/yg80p3J/self.jpg",
  },
  {
    testimonial:
      "Having a designer who is able to build the interfaces they design, makes collaboration easier, and helps when they are a software developer too",
    name: "Lionel Raseemla",
    designation: "Computer Science & Applied Maths Student",
    company: "Nelson Mandela University",
    image: "https://i.ibb.co/mG3F5cF/lionel-avatar.jpg",
  },
];

const projects = [
  {
    name: "Personal blog",
    description:
      "Blog application that helps me share my experiences, learnings and tech related information for others who are interested in similar content.",
    tags: [
      {
        name: "nextjs",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "mongoDB",
        color: "blue-text-gradient",
      },
    ],
    image: heroBlog,
    source_code_link: "https://github.com/lucaliebenberg",
       live_link: "https://luca-blogs.vercel.app/"
  },
  {
    name: "SaaS Landing Page",
    description:
      "A Single Page Application that was designed and developed for a fictitious SaaS company",
    tags: [
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "framer motion",
        color: "pink-text-gradient",
      },
      {
        name: "data-aos",
        color: "pink-text-gradient",
      },
    ],
    image: project11,
    source_code_link: "https://github.com/lucaliebenberg/SaaS-SPA",
    live_link: "https://onesheetsolutions.netlify.app/",
  },
  {
    name: "Random Raffle Lottery",
    description:
      "A decentralized raffle lottery smart contract where users enter by purchasing tickets. The total ticket fees form the prize pool, which is awarded to a randomly selected winner after a specified period. The winner is chosen automatically using Chainlink VRF for secure randomness and Chainlink Automation for time-based triggering, ensuring a fair and transparent process",
    tags: [
      {
        name: "solidity",
        color: "blue-text-gradient",
      },
      {
        name: "foundry",
        color: "blue-text-gradient",
      },
      {
        name: "alchemy",
        color: "blue-text-gradient",
      },

    ],
    image: raffle,
    source_code_link: "https://github.com/lucaliebenberg/lottery-smart-contract",
    live_link:
      "https://github.com/lucaliebenberg/lottery-smart-contract",
  },
  {
    name: "Decentralized Stablecoin",
    description:
      "This project is a decentralized stablecoin system where users can deposit WETH and WBTC to receive tokens pegged to the USD. Using Chainlink Price Feeds, the system ensures the stablecoin maintains a $1.00 value by facilitating exchanges between ETH, BTC, and USD. The stablecoin can only be minted when sufficient collateral is provided, relying on an algorithmic mechanism for stability. The collateral supporting the stablecoin is exogenous, consisting of WETH and WBTC",
    tags: [
      {
        name: "solidity",
        color: "blue-text-gradient",
      },
      {
        name: "foundry",
        color: "blue-text-gradient",
      },
      {
        name: "alchemy",
        color: "blue-text-gradient",
      },

    ],
    image: stablecoin,
    source_code_link: "https://github.com/lucaliebenberg/decentralized-stablecoin",
    live_link:
      "https://github.com/lucaliebenberg/lottery-smart-contract",
  },
  {
    name: "Hotel Reservation JSON API",
    description:
      "A Go application, that allows users to create hotel reservations, and book rooms - with invoices of bookings being simulated",
    tags: [
      {
        name: "go",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "API",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/lucaliebenberg/go-hotel-reservation-json-API",
    live_link: "https://github.com/lucaliebenberg/go-hotel-reservation-json-API",
  },
  {
    name: "Traffic Toll Microservice",
    description:
      "A Go microservice built for calculating invoices for truck delivery companies, based on distance travelled during delivery windows ",
    tags: [
      {
        name: "go",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "API",
        color: "pink-text-gradient",
      },
      {
        name: "API Gateway",
        color: "blue-text-gradient",
      },
      {
        name: "Microservice",
        color: "blue-text-gradient",
      },
    ],
    image: toll,
    source_code_link: "https://github.com/lucaliebenberg/go-hotel-reservation-json-API",
    live_link: "https://github.com/lucaliebenberg/go-hotel-reservation-json-API",
  },
];

export { services, technologies, experiences, testimonials, projects };
