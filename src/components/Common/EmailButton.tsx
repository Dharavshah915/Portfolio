import { Button } from '@/components/ui/button.js';
import { FiCopy } from 'react-icons/fi';

const EmailButton = () => {
  const handleClick = () => {
    window.location.href =
      "mailto:dharav.ps@gmail.com?subject=Let's%20Connect&body=Hi%20Dharav,";
  };

  return (
    <Button onClick={handleClick}>
      <span className="pr-2 text-sm text-gray-500">
        <FiCopy className="m-0" size={12} />
      </span>
      <span>E-Mail</span>
    </Button>
  );
};

export default EmailButton;
