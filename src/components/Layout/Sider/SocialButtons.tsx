import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';

const SocialButtons = () => {
  const socialLinks = [
    {
      icon: <FaGithub />,
      title: 'Github',
      link: 'https://github.com/Dharavshah915',
    },
    {
      icon: <FaLinkedin />,
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/dharav-shah-035758297/',
    },
  ];

  return (
    <div className="space-x-2 py-5">
      <span className="text-sm">Follow</span>
      <div>
        {socialLinks.map((socialLink, index) => {
          return (
            <a
              className={
                `flex cursor-pointer items-center justify-start gap-2 rounded-md py-1.5 text-sm hover:text-white ` +
                `text-gray-400 `
              }
              href={socialLink.link}
              key={index}
              target={'_blank'}
            >
              <span>{socialLink.icon}</span>
              <span>{socialLink.title}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialButtons;
