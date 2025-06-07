import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import TimelineItem from './TimelineItem.tsx';

interface Experience {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
}

const experiences: Experience[] = [
  {
    year: '2024-Current',
    title: 'Battery Workforce Challenge',
    subtitle:
      'Battery Management System (BMS) SW Team Member, club at McMaster',
    description:
      'Worked on testing and developing logical components through Stateflow in a team enviornment',
    responsibilities: [
      'Implemented Stateflow models to meet BMS requirements.',
      'Developed a test harness to systematically test logic correctness',
      'Collaborated with cross-functional teams in the club',
    ],
    technologies: ['MATLAB', 'Stateflow', 'Simulink', 'GitLab'],
    achievements: [
      'Contributed to team success',
      'Year 2 Batt Challange champions',
    ],
  },
  {
    year: '2024-Current',
    title: 'Software Engineer, GIS and Maps Assistant',
    subtitle: 'McMaster University, Mills Library',
    description:
      'Developed Data Analysis Python Scripts and educational tutorials on behalf of McMaster Dash.',
    responsibilities: [
      'Created Python scripts for geospatial data analysis',
      'Developed tutorials for student learning',
      'Supported data visualization projects',
    ],
    technologies: ['Python', 'MatPlotLib', 'Pandas', 'Jupyter Notebooks'],
    achievements: [
      'Enhanced data analysis workflows',
      'Authored well-received tutorials',
    ],
  },
  {
    year: '2022-2023',
    title: 'iOS App Developer Co-op',
    subtitle: 'Apple / Swiftkids',
    description:
      'Designed personal app and gained practical experience in technical project management and delivering innovative solutions.',
    responsibilities: [
      'Developed iOS app using Swift Sprite Kit',
      'Managed project timelines and deliverables',
      "Presented App at Apple's Showcase",
    ],
    technologies: ['Swift', 'Sprite Kit', 'SKPhysicsBody', 'Git'],
    achievements: [
      'Successfully shipped app features',
      'Learned agile development practices',
      'Created my own animations and physics',
    ],
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
