import ContactButton from '@/components/Common/ContactButton.js';
import ContainerTitle from '@/components/Common/ContainerTitle.js';
import EmailButton from '@/components/Common/EmailButton.js';
import { Mouse } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

const HomePage = () => {
  return (
    <div className="mx-auto mt-[80px] max-w-2xl space-y-6">
      <div
        className="text-white text-shadow-glow"
        style={{ ['--tw-shadow-color' as any]: 'grey' }}
      >
        <ContainerTitle title="Welcome, I'm Dharav" />
      </div>
      <h2 className="text-4xl font-medium text-gray-300">
        I am{' '}
        <span className="text-white">
          <Typewriter
            words={[
              'a Software Engineer',
              'an Innovator',
              'a Developer',
              'an AI Enthusiast',
              'an Engineer @ McMaster',
            ]}
            cursor
            loop={0}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1800}
          />
        </span>
      </h2>

      <div className="text-md mt-8 max-w-[535px] space-y-4 font-light tracking-wider text-gray-300 md:space-y-6">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation
        </p>

        <p>
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla
        </p>

        <p>pariatur. Excepteur sint occaecat cupidatat non proident</p>
      </div>

      <div className="mt-2 flex items-center gap-3">
        <ContactButton />
        <EmailButton />
      </div>

      <div className="flex -translate-y-5 justify-center pb-2 pt-0">
        <div className="relative animate-bounce">
          <Mouse className="h-8 w-8 text-gray-400" />
          <div className="absolute inset-0 animate-ping-slow rounded-full bg-gray-400 opacity-20"></div>
          <svg
            className="absolute left-[32%] top-[10px] h-5 w-3 -translate-x-1/2 animate-scroll-wheel text-gray-400"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <div className="absolute left-[44%] top-[6px] h-2 w-1 animate-scroll-wheel rounded-full bg-gray-400"></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
