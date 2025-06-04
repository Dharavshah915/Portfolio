import {
  Briefcase,
  FolderGit,
  FolderGit2,
  Home,
  Lightbulb,
  Plane,
  UserPlus,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const RouteButtons = () => {
  const [activeSection, setActiveSection] = useState('/');

  useEffect(() => {
    const handleScroll = () => {
      const sections = {
        '/': document.getElementById('home'),
        '/expertise': document.getElementById('expertise'),
        '/projects': document.getElementById('projects'),
        '/experience': document.getElementById('experience'),
        '/connect': document.getElementById('connect'),
      };

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const [path, section] of Object.entries(sections)) {
        if (
          section &&
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(path);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    {
      path: '/',
      name: 'Home',
      icon: <Home className="h-4 w-4 stroke-[1.5]" />,
    },
    {
      path: '/expertise',
      name: 'Expertise',
      icon: <Lightbulb className="h-4 w-4 stroke-[1.5]" />,
    },
    {
      path: '/projects',
      name: 'Projects',
      icon: <FolderGit className="h-4 w-4 stroke-[1.5]" />,
    },
    {
      path: '/experience',
      name: 'Experience',
      icon: <Briefcase className="h-4 w-4 stroke-[1.5]" />,
    },
    {
      path: '/connect',
      name: 'Connect',
      icon: <UserPlus className="h-4 w-4 stroke-[1.5]" />,
    },
  ];

  return (
    <div className="space-y-1.5">
      {links.map((link, index) => {
        const isActive = activeSection === link.path;
        return (
          <Link
            className={
              `flex cursor-pointer items-center gap-3 rounded-md px-4 py-2 text-sm tracking-wide text-gray-300 transition-colors hover:bg-white/15 ` +
              (isActive ? ' bg-white/20 text-white ' : '')
            }
            key={index}
            to={link.path}
          >
            {link.icon}
            <span className="font-light">{link.name}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default RouteButtons;
