import userImage from '@/assets/images/my_photo_zoomed.jpg';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.js';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { Typewriter } from 'react-simple-typewriter';

const AvatarBox = () => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  const avatarRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        avatarRef.current &&
        !avatarRef.current.contains(event.target as Node)
      ) {
        setIsExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const returnToHome = () => {
    navigate('/');
  };

  return (
    <div
      ref={avatarRef}
      className={`mb-8 flex cursor-pointer flex-col items-center transition-all duration-300 ease-in-out
        ${isExpanded ? 'rounded-lg bg-gray-800/50 p-6' : 'flex-row items-center justify-start space-x-3'}`}
      onClick={handleClick}
    >
      <Avatar
        className={`transition-all duration-300 ease-in-out
          ${isExpanded ? 'mb-5 h-40 w-40' : 'h-10 w-10'}`}
      >
        <AvatarImage
          alt="Profile Image"
          src={userImage}
          className="object-cover"
        />
        <AvatarFallback>KK</AvatarFallback>
      </Avatar>
      <div
        className={`flex flex-col items-center transition-all duration-300 ease-in-out
          ${isExpanded ? 'space-y-2' : 'space-y-1'}`}
      >
        <span
          className={`min-w-[150px] text-center font-medium text-white transition-all duration-300
          ${isExpanded ? 'text-lg' : 'text-sm'}`}
        >
          Dharav Shah
        </span>
        <span
          className={`min-w-[150px] text-center text-gray-400 transition-all duration-300
          ${isExpanded ? 'text-base' : 'text-xs'}`}
        >
          <Typewriter
            words={[
              'SWE @ MAC',
              'Critical Thinker',
              'Achiever',
              'AI Engineer',
              'iOS Developer',
              'Collaborator',
            ]}
            cursor
            loop={0}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </span>
      </div>
    </div>
  );
};

export default AvatarBox;
