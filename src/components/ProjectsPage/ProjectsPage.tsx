import RecycloBot from '@/assets/images/Recyclobot.jpg';
import ContainerTitle from '@/components/Common/ContainerTitle.js';
import { ProjectCard } from '@/components/ProjectsPage/ProjectCard.js';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  projectUrl: string;
}

const projects: Project[] = [
  {
    title: 'Personal Portfolio',
    description:
      'A modern portfolio built using React and TypeScript, showcasing proficiency with modern web technologies.',
    imageUrl:
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'Portfolio Project',
    projectUrl: 'https://github.com/Dharavshah915/Portfolio',
  },
  {
    title: 'Cybersecurity System',
    description:
      'Developed a robust security system containing a password manager, facial recognition, and file encryption utalizing OpenCV, Flask, SQL.',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1700830193661-f6822dca5eee?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'Security System',
    projectUrl:
      'https://github.com/Dharavshah915/Cyber_Security_and_Encryption_System',
  },
  {
    title: 'RecycloBot',
    description:
      'An Ai waste management system designed for automated seperation of diffrent types of waste accompanied by an app.',
    imageUrl: RecycloBot,
    imageAlt: 'Waste Managment Ai bin ',
    projectUrl: 'https://github.com/Dharavshah915/RecycloBot',
  },
  {
    title: 'Employee Authenticator',
    description:
      'Developed a facial recognition-based employee authentication system using AWS Rekognition to verify user identities.',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1674506652857-6c816df228c4?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'Authenticator',
    projectUrl: 'https://github.com/Dharavshah915/Employee_Authenticator',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.2,
    },
  }),
};

const ProjectsPage = () => {
  return (
    <div className="mx-auto mt-2 max-w-[1200px] space-y-2 px-4">
      <div className="relative flex items-center justify-center py-20">
        {/* Background blobs */}
        <div className="absolute left-1/3 top-0 -z-10 h-72 w-72 animate-pulse rounded-full bg-indigo-500 opacity-30 blur-2xl"></div>
        <div className="absolute bottom-0 right-1/4 -z-10 h-72 w-72 animate-pulse rounded-full bg-blue-500 opacity-30 blur-2xl"></div>

        <svg
          className="absolute left-20 top-12 -z-10 h-16 w-16 animate-ping text-white/20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path d="M12 2v2M12 20v2M2 12H4M20 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4l1.4-1.4M17 7l1.4-1.4" />
        </svg>

        <h1 className="relative z-10 bg-gradient-to-r from-purple-500 via-blue-300 to-indigo-500 bg-clip-text text-6xl font-extrabold tracking-tight text-transparent">
          My Projects
        </h1>

        <div className="absolute bottom-8 h-1 w-80 rounded-full bg-gradient-to-r from-purple-500 via-indigo-300 to-blue-500 blur-sm"></div>
      </div>

      <div className="mx-auto max-w-[1800px]">
        <div className="grid grid-cols-1 justify-items-center gap-x-7 gap-y-1 md:grid-cols-2 xl:grid-cols-2 ">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              custom={index}
              className="mt-6"
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                imageAlt={project.imageAlt}
                projectUrl={project.projectUrl}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
