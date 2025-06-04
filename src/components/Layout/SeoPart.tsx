import { Helmet } from 'react-helmet';
import portfolioLogo from '@/assets/images/portfolio_logo_kabir.png';

const SeoPart = () => {
  return (
    <Helmet>
      <title>
        Welcome, I'm Kabir | SWE | CS @ UofT | Pilot
      </title>
      <meta name="description" content="Personal portfolio website of Kabir Kumar"/>
      <meta name="keywords" content="pilot, aviation, developer, portfolio"/>
      <meta name="author" content="Kabir Kumar"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
      <link rel="icon" type="image/png" href={portfolioLogo} />
    </Helmet>
  )
};

export default SeoPart;
