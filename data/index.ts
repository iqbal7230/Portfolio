import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  // { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
  { name: "Resume", link: "https://drive.google.com/file/d/1mcfGIZYsEchill4NiUMAUIbGaaUlc8gY/view?usp=sharing" },
];

export const gridItems = [
  {
    id: 1,
    title: "I Prioritize Client Collaboration, Fostering Open Communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  // {
  //   id: 3,
  //   title: "My tech stack",
  //   description: "I constantly try to improve",
  //   className: "lg:col-span-2 md:col-span-3 md:row-span-2",
  //   imgClassName: "",
  //   titleClassName: "justify-center",
  //   img: "",
  //   spareImg: "",
  // },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently working on MERN stack projects and learning new technologies",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-80",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/software-dev.jpg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "AI-Powered Next-Gen Calculator",
    des: "An innovative calculator that integrates handwriting recognition, equation solving, graph generation, and abstract drawing interpretation, delivering a seamless and interactive experience for user's devices.",
    img: "/AI.webp",
    iconLists: ["/re.svg", "/FastAPI.svg", "/ts.svg", "/Python.svg"],
    link: "https://ai-cal-frontend-yijz.vercel.app/",
  },
   {
    id: 2,
    title: "Student Performance Indicator ",
    des: "Machine Learning model to predict student performance based on various factors" ,
    img: "/stud.webp",
    iconLists: ["/re.svg","/ts.svg", "/Python.svg"],
    link: "https://github.com/iqbal7230/Student-Perfomance-System.git",
  },
  
  // {
  //   id: 3,
  //   title: "Finetech - A Finance App",
  //   des: "This is like paytm app with all transaction feature..",
  //   img: "/Finance.png",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
  //   link: "https://github.com/iqbal7230/Paytm",
  // },
  // {
  //   id: 4,
  //   title: "Task Management App",
  //   des: "The To-Do App is designed to help you stay organized and productive by allowing you to easily add, fetch, delete, and mark tasks as completed. With a clean interface, you can quickly manage your daily activities, ensuring nothing is missed. The app is also evolving with a feature to edit tasks, enabling better task management and flexibility.",
  //   img: "/todo.png",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
  //   link: "#",
  // },
  // {
  //   id: 5,
  //   title: "TourVenture - An web progressive app to Explore",
  //   des: " It aims to connect travellers with unique local experiences and services using Next.js, MongoDB, Cloudinary and secure userauthentication" ,
  //   img: "/tour.jpg",
  //   iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
  //   link: "https://github.com/iqbal7230/Tour-Venture-App",
  // },
];


export const workExperience = [
  {
    id: 1,
    title: "Data Science Associate Intern",
    desc: "Celonis process mining, data analysis, and visualization, and machine learning model development.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 2,
    title: "Python Developer Intern",
    desc: "Assisted in the development of a web-based platform using Django, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 3,
    title: "Bussiness Analyst Intern",
    desc: "App scripting to automate data analysis and reporting, improving efficiency by 40%.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  }
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/iqbal7230",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/Iqbal7230"
  },
  {
    id: 3,
    img: "/link.svg",
    link:"https://www.linkedin.com/in/iqbal-ansari-53406a253/"
  },
];
