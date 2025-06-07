import { Button } from '@/components/ui/button.js';

const ContactButton = () => {
  const handleClick = () => {
    window.open('https://www.linkedin.com/in/dharav-shah-035758297/', '_blank');
  };

  return <Button onClick={handleClick}>Connect</Button>;
};

export default ContactButton;
