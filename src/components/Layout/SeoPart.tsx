import portfolioLogo from '@/assets/images/portfolio_logo_DharavShah.png';
import { Helmet } from 'react-helmet';

const SeoPart = () => {
  return (
    <Helmet>
      <title>Welcome, I'm Dharav | SWE @ McMaster | Innovator</title>
      <meta
        name="description"
        content="Personal portfolio website of Dharav Shah"
      />
      <meta name="keywords" content="Studetn, McMaster, developer, portfolio" />
      <meta name="author" content="Dharav Shah" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <link rel="icon" type="image/png" href={portfolioLogo} />
    </Helmet>
  );
};

export default SeoPart;
