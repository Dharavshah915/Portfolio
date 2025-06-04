import ConnectPage from '@/components/ConnectPage/ConnectPage.js';
import ExperiencePage from '@/components/Experience/ExperiencePage.js';
import ExpertisePage from '@/components/ExpertisePage/ExpertisePage.js';
import HomePage from '@/components/HomePage/HomePage.js';
import Container from '@/components/Layout/Container.js';
import Footer from '@/components/Layout/Footer.js';
import SeoPart from '@/components/Layout/SeoPart.js';
import Sider from '@/components/Layout/Sider/Sider.js';
import ProjectsPage from '@/components/ProjectsPage/ProjectsPage.js';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const homeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const expertiseRef = useRef<HTMLDivElement>(null);
  const connectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollToSection = () => {
      if (location.pathname === '/') {
        homeRef.current?.scrollIntoView({ behavior: 'smooth' });
      } else if (location.pathname === '/expertise') {
        expertiseRef.current?.scrollIntoView({ behavior: 'smooth' });
      } else if (location.pathname === '/projects') {
        projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
      } else if (location.pathname === '/experience') {
        experienceRef.current?.scrollIntoView({ behavior: 'smooth' });
      } else if (location.pathname === '/connect') {
        connectRef.current?.scrollIntoView({ behavior: 'smooth' });
      }
    };
    scrollToSection();
  }, [location]);

  return (
    <>
      <SeoPart />
      <div className="flex min-w-full items-stretch font-light">
        <Sider />
        <div className="ml-[275px] grow bg-primary ">
          <div className="pb-2 md:pb-3">
            <div ref={homeRef} id="home">
              <Container>
                <HomePage />
              </Container>
            </div>

            <div ref={expertiseRef} id="expertise">
              <Container>
                <ExpertisePage />
              </Container>
            </div>

            <div ref={projectsRef} id="projects">
              <Container>
                <ProjectsPage />
              </Container>
            </div>

            <div ref={experienceRef} id="experience">
              <Container>
                <ExperiencePage />
              </Container>
            </div>

            <div ref={connectRef} id="connect">
              <Container>
                <ConnectPage />
              </Container>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
