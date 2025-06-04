import { SpotlightBorder } from '@/components/Effects/SpotlightBorder.js';
import { motion } from 'framer-motion';
import { ExpertiseCard } from './ExpertiseCard.tsx';

interface ExpertiseItem {
  title: string;
  description: string;
  icon: JSX.Element;
}

const expertiseData: ExpertiseItem[] = [
  {
    title: 'Frontend Development',
    description:
      'Building responsive and modern web applications using React, TypeScript, and cutting-edge frameworks.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="mb-4 h-12 w-12 text-indigo-300"
      >
        <path d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" />
      </svg>
    ),
  },
  {
    title: 'Backend Development',
    description:
      'Creating scalable server solutions and APIs using Node.js, Python, and cloud technologies.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="mb-4 h-12 w-12 text-indigo-300"
      >
        <path
          fillRule="evenodd"
          d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.75.75 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    title: 'UI/UX Design',
    description:
      'Designing intuitive and beautiful user interfaces with a focus on user experience and accessibility.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="mb-4 h-12 w-12 text-indigo-300"
      >
        <path
          fillRule="evenodd"
          d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    title: 'Full Stack Development',
    description:
      'Building end-to-end applications with seamless integration between frontend and backend systems.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="mb-4 h-12 w-12 text-indigo-300"
      >
        <path
          fillRule="evenodd"
          d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z"
          clipRule="evenodd"
        />
      </svg>
    ),
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

const ExpertisePage = () => {
  return (
    <div className="px-4 pb-6 pt-2 sm:px-4 lg:px-6">
      <div className="mb-10 text-center">
        <h2 className="text-6xl font-bold tracking-tight text-white">
          My{' '}
          <span className="bg-gradient-to-r from-[#6a11cb] to-[#2575fc] bg-clip-text text-transparent">
            Expertise
          </span>
        </h2>
      </div>

      <div className="mx-auto max-w-[1800px]">
        <div className="grid grid-cols-1 justify-items-center gap-x-16 gap-y-1 md:grid-cols-2 xl:grid-cols-2">
          {expertiseData.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              custom={index}
              className="mt-6"
            >
              <SpotlightBorder className="h-[320px] w-[300px] rounded-xl">
                <ExpertiseCard
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                />
              </SpotlightBorder>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpertisePage;
