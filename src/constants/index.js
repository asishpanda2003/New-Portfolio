import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project24.jpg";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.avif";

export const HERO_CONTENT = `I am a fresher full-stack developer, currently honing my skills in front-end technologies like React and Next.js, and back-end tools like Node.js, Express, MongoDB, and MySQL. With a solid foundation in Java, I aim to create scalable, efficient web applications that deliver excellent user experiences while continuously expanding my expertise in full-stack development.`;

export const ABOUT_TEXT = `I am a motivated and enthusiastic full stack developer with a strong passion for building efficient and user-friendly web applications. Throughout my learning journey, I have gained experience working with technologies like React, Next.js, Node.js, MySQL, and MongoDB. My curiosity for understanding how web technologies work has driven me to continuously learn and improve my skills. I thrive in collaborative environments and enjoy tackling new challenges to deliver high-quality solutions. Beyond coding, I like staying active, exploring the latest tech trends, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Jun 2024 - Jun 2024",
    role: "Web Developer Intern",
    company: "OKCL",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Cloudinary", "mongoDB"],
  },
  {
    year: "Feb 2024 - Mer 2024",
    role: "Frontend Developer",
    company: "OCTANET",
    description: `Designed and developed user interfaces for web applications using React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "React.js", "MongoDB"],
  },
  {
    year: "Jun 2023 - July 2023",
    role: "Web Developer Intern",
    company: "RINEX TECHNOLOGY",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["HTML", "CSS", "JavaScript"],
  }
];

export const PROJECTS = [
  {
    title: "Finance Tracking Website",
    image: project1,
    description:
      "A fully functional finance tracking application with features like income and expense tracking, budgeting tools, and data visualization for monitoring financial status",
    technologies: ["React", "Express", "Node.js", "Firebase","Papaparse","React-Scripts"]
  },
  {
    title: "Job Application",
    image: project2,
    description:
      "An application for managing job applications, with features such as job listing, application submission, and status tracking",
    technologies: ["React", "mongoDB","Express","Node","Cloudinary"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React","JavaScript", "Bootstrap","Framer Motion"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["React.js","Chart.js", "Axios", "Firebase","Cloudinary",],
  },
];

export const CONTACT = {
  address: "Berhampur, Odisha ",
  phoneNo: "+91 7735007723 ",
  email: "asishkumarpanda500@gmail.coom",
};
