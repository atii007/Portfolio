"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Promptopia",
    description:
      "A prompt sharing React Application with user Authentication using Next-Auth and MongoDB for saving user details and activity.",
    image: "/images/projects/web4.png",
    tag: ["All", "Web"],
    previewUrl: "https://promptopia-zeta-ivory.vercel.app/",
  },
  {
    id: 2,
    title: "Topic",
    description:
      "A learning platform developed using React JS with the functionality of user authentication. MongoDB used for saving user Singup and Signin.",
    image: "/images/projects/web5.png",
    tag: ["All", "Web"],
    previewUrl: "https://custom-hooks-ac50d.web.app/",
  },
  {
    id: 3,
    title: "Dashboard",
    description:
      "Designed using figma and could easily be developed using React JS, Next JS and Material UI.",
    image: "/images/projects/web1.png",
    tag: ["All", "Web"],
    previewUrl: "https://dribbble.com/shots/22793108-Dashboard",
  },
  {
    id: 4,
    title: "E-commerce",
    description:
      "Frontend using React JS and Backend integration with Express using MongoDB. Admin Panel developed separately to manage products",
    image: "/images/projects/web3.png",
    tag: ["All", "Web"],
    previewUrl: "https://github.com/atii007/E-Commerce",
  },
  {
    id: 5,
    title: "Gaming Dashboard",
    description: "Demonstartion of the figma skills",
    image: "/images/projects/web2.png",
    tag: ["All", "Figma"],
    previewUrl:
      "https://dribbble.com/shots/17722714-Game-Dashboard-UI-UX-Deisgn",
  },

  {
    id: 6,
    title: "Game Store",
    description:
      "Perfect demonstartion using Figma that how a mobile game store must look like",
    image: "/images/projects/mob1.png",
    tag: ["All", "Figma"],
    previewUrl: "https://dribbble.com/shots/22794757-Game-Store",
  },
  {
    id: 7,
    title: "Event Management",
    description: "Design for Event Management Mobile App",
    image: "/images/projects/mob2.png",
    tag: ["All", "Figma"],
    previewUrl: "https://dribbble.com/shots/22793429-Event-Mobile-App",
  },
  {
    id: 8,
    title: "Grocery Store",
    description:
      "This figma designs demonstrates the perfect theme and styling of how a grocery store must look like",
    image: "/images/projects/mob3.png",
    tag: ["All", "Figma"],
    previewUrl: "https://dribbble.com/shots/17722686-Grocery-Mobile-App",
  },
  {
    id: 8,
    title: "Admin Dashboard",
    description:
      "Completely working dashboard with managing team functionality, built with Material UI having features like Light and Dark theme. Data management done using Axios library.",
    image: "/images/projects/web7.png",
    tag: ["All", "Web"],
    previewUrl: "https://github.com/atii007/admin-dashboard",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Figma"
          isSelected={tag === "Figma"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
