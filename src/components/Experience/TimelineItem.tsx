import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  description: string;
  year: string;
  isExpanded: boolean;
  onExpand: () => void;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
}

export default function TimelineItem({
  title,
  subtitle,
  description,
  year,
  isExpanded,
  onExpand,
  responsibilities,
  technologies,
  achievements,
}: TimelineItemProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    expanded: {
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    collapsed: {
      scale: 1,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <div className="relative flex flex-col items-start">
      <div className="pointer-events-none absolute -left-8 top-8 z-10 h-[100px] w-6">
        <div
          className="absolute left-2.5 top-0 h-full w-[1px]"
          style={{ backgroundColor: '#6a11cb' }}
        ></div>
        <div
          className="bg-gray-1000 absolute left-[1.125rem] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full border"
          style={{ borderBlock: 2, borderColor: '#6a11cb' }}
        ></div>
      </div>

      <div className="relative w-full max-w-2xl">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="bg-gray-1000 hover:bg-gray-1000 group cursor-pointer rounded-2xl p-6 transition-all duration-300"
          onClick={onExpand}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          style={{ transformOrigin: 'right center' }}
        >
          <div className="absolute right-4 top-4 text-indigo-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1.5em"
              height="1.5em"
              className="animate-[size-pulse_1s_ease-in-out_infinite]"
            >
              <style>
                {`
                  @keyframes size-pulse {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.2); }
                    100% { transform: scale(1); }
                  }
                `}
              </style>
              <path
                fill="currentColor"
                d="M11.71 17.99A5.993 5.993 0 0 1 6 12c0-3.31 2.69-6 6-6c3.22 0 5.84 2.53 5.99 5.71l-2.1-.63a3.999 3.999 0 1 0-4.81 4.81zM22 12c0 .3-.01.6-.04.9l-1.97-.59c.01-.1.01-.21.01-.31c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8c.1 0 .21 0 .31-.01l.59 1.97c-.3.03-.6.04-.9.04c-5.52 0-10-4.48-10-10S6.48 2 12 2s10 4.48 10 10m-3.77 4.26L22 15l-10-3l3 10l1.26-3.77l4.27 4.27l1.98-1.98z"
              ></path>
            </svg>
          </div>
          <div className="text-sm font-bold text-indigo-500">{year}</div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <h4 className="text-md text-gray-300">{subtitle}</h4>
          <p className="mt-2 text-gray-300">{description}</p>
        </motion.div>

        <AnimatePresence mode="wait">
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: 1,
                height: 'auto',
                transition: {
                  duration: 0.6,
                  ease: [0.4, 0, 0.2, 1],
                  staggerChildren: 0.1,
                },
              }}
              exit={{
                opacity: 0,
                height: 0,
                transition: {
                  duration: 0.6,
                  ease: [0.4, 0, 0.2, 1],
                  staggerChildren: 0.05,
                  staggerDirection: -1,
                },
              }}
              className="mt-6 w-full overflow-hidden"
            >
              <motion.div
                className="bg-gray-1000 rounded-2xl border-l-2 border-purple-800 p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.4,
                    delay: 0.1,
                    ease: [0.4, 0, 0.2, 1],
                  },
                }}
                exit={{
                  opacity: 0,
                  y: 20,
                  transition: {
                    duration: 0.3,
                    ease: [0.4, 0, 0.2, 1],
                  },
                }}
              >
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.4,
                        delay: 0.2,
                        ease: [0.4, 0, 0.2, 1],
                      },
                    }}
                    exit={{
                      opacity: 0,
                      x: -20,
                      transition: {
                        duration: 0.3,
                        ease: [0.4, 0, 0.2, 1],
                      },
                    }}
                  >
                    <h5 className="mb-2 text-lg font-semibold text-white">
                      Key Responsibilities
                    </h5>
                    <ul className="list-inside list-disc space-y-2 text-gray-300">
                      {responsibilities.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.4,
                        delay: 0.3,
                        ease: [0.4, 0, 0.2, 1],
                      },
                    }}
                    exit={{
                      opacity: 0,
                      x: -20,
                      transition: {
                        duration: 0.3,
                        ease: [0.4, 0, 0.2, 1],
                      },
                    }}
                  >
                    <h5 className="mb-2 text-lg font-semibold text-white">
                      Technologies Used
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-indigo-500/20 px-3 py-1 text-sm text-indigo-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.4,
                        delay: 0.4,
                        ease: [0.4, 0, 0.2, 1],
                      },
                    }}
                    exit={{
                      opacity: 0,
                      x: -20,
                      transition: {
                        duration: 0.3,
                        ease: [0.4, 0, 0.2, 1],
                      },
                    }}
                  >
                    <h5 className="mb-2 text-lg font-semibold text-white">
                      Achievements
                    </h5>
                    <ul className="list-inside list-disc space-y-2 text-gray-300">
                      {achievements.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
