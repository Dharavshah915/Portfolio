import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import TimelineItem from './TimelineItem.tsx';

interface Experience {
  year: string;
  title: string;
  subtitle: string;
  description: string;
}

const experiences: Experience[] = [
  {
    year: '2024',
    title: 'Battry Workforce Challange',
    subtitle: 'Battery Managment System SW Team Member, club at Mcmaster',
    description:
      'Worked on building responsive UI components using React and Tailwind. Improved load time by 40%.',
  },
  {
    year: '2023',
    title: 'Software Engineer, GIS and, Maps Assistant',
    subtitle: 'McMaster University, Mills library',
    description:
      'Developed Data Analysis Python Scripts and educational tutorials on behalf of McMaster Dash.',
  },
  {
    year: '2022',
    title: 'IOS App Developer Co-op',
    subtitle: 'Apple/Swiftkids',
    description:
      'Designed personal app and gained practical experience in technical project management and delivering innovative solutions. ',
  },
];

export default function Timeline() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center py-10">
      <motion.div
        className="flex w-full flex-col items-center space-y-6"
        layout
        transition={{
          layout: {
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1],
          },
        }}
      >
        <AnimatePresence mode="wait">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  ease: [0.4, 0, 0.2, 1],
                },
              }}
              exit={{
                opacity: 0,
                y: -20,
                transition: {
                  duration: 0.4,
                  ease: [0.4, 0, 0.2, 1],
                },
              }}
              transition={{
                layout: {
                  duration: 0.6,
                  ease: [0.4, 0, 0.2, 1],
                },
              }}
            >
              <TimelineItem
                {...exp}
                isExpanded={expandedIndex === i}
                onExpand={() =>
                  setExpandedIndex(expandedIndex === i ? null : i)
                }
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
