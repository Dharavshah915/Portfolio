import portfolioLogo from '@/assets/images/portfolio_logo_DharavShah.png';
import { useEffect, useState } from 'react';

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDateTime = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    }).format(date);
  };

  return (
    <div className="fixed bottom-0 left-[275px] z-10 flex h-8 w-[calc(100%-275px)] items-center justify-between border-t border-gray-700/50 bg-primary px-6 text-sm font-light shadow-[0_-1px_10px_0px_rgba(75,85,99,0.3)] md:h-16">
      <div className="flex items-center gap-2">
        <img
          src={portfolioLogo}
          alt="Portfolio Logo"
          className="h-6 w-6 rounded-full border border-gray-500 object-cover"
        />
        <span className="text-gray-300">
          © {currentTime.getFullYear()} Dharav Shah
        </span>
      </div>
      <a
        href="/public/Dharav Shah resume.pdf"
        download="Dharav's Resume.pdf"
        className="flex items-center gap-1.5 text-gray-300 transition-colors hover:text-white"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        Download Resume
      </a>
      <span className="tracking-wide text-gray-300">
        {formatDateTime(currentTime)}
      </span>
    </div>
  );
};

export default Footer;
