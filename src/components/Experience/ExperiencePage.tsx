import ContainerTitle from '@/components/Common/ContainerTitle';
import { motion } from 'framer-motion';
import Timeline from './Timeline';

const ExperiencePage = () => {
  return (
    <div className="space-y-1">
      <div className="space-y-3 shadow-glow text-shadow-glow">
        <h1 className="font-Montserrat text-6xl text-white">My</h1>

        <div className="inline-block pl-8">
          <h2
            style={{
              textShadow:
                '0 0 10px rgba(90,15,184,0.7), 0 0 20px rgba(26,35,126,0.7)',
            }}
            className="font-Montserrat inline-block rounded border-4 border-[#6a11cb] bg-gradient-to-r from-[#6a11cb] to-[#2575fc] bg-clip-text p-5 text-6xl text-transparent"
          >
            Experience
          </h2>
        </div>
      </div>

      <div>
        <Timeline />
      </div>
    </div>
  );
};

export default ExperiencePage;
