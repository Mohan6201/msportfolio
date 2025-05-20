import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Txenia Web App",
    year: "Mar2024",
    align: "right",
    image: "/images/Txenia.png",
    link: "https://txenia.ai/",
    description: {
      responsibilities: [
        "Developed the web application using Django (backend) and React (frontend).",
        "Automated service management using Supervisor and Python shell scripts.",
        "Integrated MLflow for live model prediction metrics and experiment tracking.",
        "Used Apache Superset for database visualization and model result dashboards.",
        "Configured Route 53 with load balancer DNS for production-ready access.",
        "Set up virtual environments for isolated service deployments and model execution.",
        "Designed the system to support warehouse management operations end-to-end.",
      ],
    },
  },
  {
    name: "Portfolio Web App",
    year: "April2025",
    align: "left",
    image: "/images/Reactp2.png",
    link: "#",
    description: {
      responsibilities: [
        "Built a personal portfolio web app using React to showcase skills, projects, and experience.",
        "Added smooth animations and interactive transitions using Framer Motion for enhanced user experience.",
        "Integrated project cards, skill badges, and animated sections for dynamic presentation.",
        "Optimized for performance and mobile responsiveness across all screen sizes.",
        "Structured the app with reusable components and clean code architecture for scalability.",
        "Deployed the app on a cloud platform using firebase hosting",
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
