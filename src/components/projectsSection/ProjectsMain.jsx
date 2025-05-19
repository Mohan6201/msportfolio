import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Vacation of Africa",
    year: "Mar2022",
    align: "right",
    image: "/images/website-img-1.jpg",
    link: "#",
    description: {
      job: "Trainee Consultant",
      company: "Enterprise SoftLabs Pvt Ltd",
      date: "2022 - Present",
      responsibilities: [
        "Managing Supply Chain Management change requests for Maersk.",
        "Analyzed and modified SQL stored procedures using SSMS.",
        "Troubleshot Azure and Cisco VPN Connectivity and Server Network Issues.",
        "Handling product installation and configuration.",
        "Administering Windows Active Directory.",
      ],
    },
  },
  {
    name: "Moola App",
    year: "Sept2022",
    align: "left",
    image: "/images/website-img-2.webp",
    link: "#",
    description: {
      job: "Trainee Consultant",
      company: "Enterprise SoftLabs Pvt Ltd",
      date: "2022 - Present",
      responsibilities: [
        "Managing Supply Chain Management change requests for Maersk.",
        "Analyzed and modified SQL stored procedures using SSMS.",
        "Troubleshot Azure and Cisco VPN Connectivity and Server Network Issues.",
        "Handling product installation and configuration.",
        "Administering Windows Active Directory.",
      ],
    },
  },
  {
    name: "Tourzania",
    year: "Jan2023",
    align: "right",
    image: "/images/website-img-3.jpg",
    link: "#",
    description: {
      job: "Trainee Consultant",
      company: "Enterprise SoftLabs Pvt Ltd",
      date: "2022 - Present",
      responsibilities: [
        "Managing Supply Chain Management change requests for Maersk.",
        "Analyzed and modified SQL stored procedures using SSMS.",
        "Troubleshot Azure and Cisco VPN Connectivity and Server Network Issues.",
        "Handling product installation and configuration.",
        "Administering Windows Active Directory.",
      ],
    },
  },
  {
    name: "Bank of Luck",
    year: "May2024",
    align: "left",
    image: "/images/website-img-4.jpg",
    link: "#",
    description: {
      job: "Trainee Consultant",
      company: "Enterprise SoftLabs Pvt Ltd",
      date: "2022 - Present",
      responsibilities: [
        "Managing Supply Chain Management change requests for Maersk.",
        "Analyzed and modified SQL stored procedures using SSMS.",
        "Troubleshot Azure and Cisco VPN Connectivity and Server Network Issues.",
        "Handling product installation and configuration.",
        "Administering Windows Active Directory.",
      ],
    },
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => (
          <SingleProject
            key={index}
            name={project.name}
            year={project.year}
            align={project.align}
            image={project.image}
            link={project.link}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsMain;
