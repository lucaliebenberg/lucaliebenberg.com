import {
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
  heroBlog
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
      "Developing a web application using React.js and other related technologies",
      "Implementing responsive design and ensuring cross-browser compatibility",
      "Deploying the web application with hosting",
    ],
  },
  {
    title: "UX/UI Designer (Internship)",
    company_name: "Polymorph Systems",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "December 2022 - Jan 2023",
    points: [
      "Designed the concept for the internal dashboard",
      "Collaborating with a cross-functional team including designers, product managers, and other developers to create the product",
      "Contributing to the implementation of the features needed to solve the company's problem",
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
      " Identify the core concepts of Blockchain and get technical background on some of the biggest projects like HyperLedger, Factom and Ripple",
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
      "Participating in design reviews and receive constructive feedback to further improve the MVP",
    ],
  },
  {
    title: "Frontend Developer (Internship)",
    company_name: "The Web3 Ninja",
    icon: web3ninja,
    iconBg: "#E6DEDD",
    date: "March 2023 - Present",
    points: [
      "Converting Figma design systems to React TypeScript components using Storybook",
      "Implementing responsive design and ensuring cross-browser compatibility",
      "Participating in code reviews and receive constructive feedback to further improve the components",
      "Collaborating with another intern developer to build the components and convert Figma designs to code",
    ],
  },
  {
    title: "Junior Software Developer",
    company_name: "Trinity IoT",
    icon: trinity,
    iconBg: "#01A4AD",
    date: "July 2023 - Present",
    points: [
      "Design a multitenant SVR portal, implementing iterative UI/UX design in Figma",
      "Participating in code reviews and receive constructive feedback to further improve the portal design",
      "Design and architecture the database, making sure the backend is architectured to compliment the UX/UI Designs",
      "Working collaboratively with a data analyst to architect and design the database and backend infrastructure",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Having design and development knowledge, Luca bridges the gap between designers and developers with ease. A pleasure to work with.",
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
      "Having a designer who is able to build the interfaces they design, makes collaboration easier, and helps focus on what is possible when it comes to development.",
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
    name: "Fullstack NFT Minting DApp",
    description:
      "A Web-based Fullstack NFT Mintng Dapp that allows you the user tp connect their wallet and mint NFTs to their Metamask wallet",
    tags: [
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "solidity",
        color: "blue-text-gradient",
      },
      {
        name: "hardhat",
        color: "blue-text-gradient",
      },
      {
        name: "alchemy",
        color: "blue-text-gradient",
      },
      {
        name: "ethers.js",
        color: "blue-text-gradient",
      },
      {
        name: "web3.js",
        color: "blue-text-gradient",
      },
    ],
    image: project12,
    source_code_link: "https://github.com/lucaliebenberg/fullstack-nft-dapp",
    live_link:
      "https://goerli.etherscan.io/tx/0x8d41d174d4e5335f0a31129331254f11349d66e32b772e857ce7c0d24a22e36e",
  },
  {
    name: "Hotel Reservation JSON API",
    description:
      "A Go application, that allows users to create hotel reservations, and book rooms - with nvoices of bookings is simulated",
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
];

export { services, technologies, experiences, testimonials, projects };
