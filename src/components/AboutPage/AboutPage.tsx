import aboutImg from '@/assets/about.png';
import ContainerTitle from '@/components/Common/ContainerTitle.js';
import EmailButton from '@/components/Common/EmailButton.js';
import GetInTouchButton from '@/components/Common/GetInTouchButton.js';

const AboutPage = () => {
  return (
    <>
      <div className="space-y-1">
        <ContainerTitle title="Dharav Shah" />
        <h3 className="text-sm">
          Full-Stack Dev | AI Engineer | Software | AI | LLMs | McMaster
        </h3>

        <img src={aboutImg} alt="about" className="h-auto" />

        <div className="space-y-2 text-sm text-gray-500">
          <p>
            Lorem ipsumonsectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco
          </p>
          <p>Currently I am weir MVPs / Apps.</p>
          <p>
            Earlier, I have built multiple products leading development and
            design for some of them. Some of them are Dreamboat.ai, Engagebud,
            Influencerbit.
          </p>
          <p>
            I am amazed by LLMs / AI, With LLMs, a lot of boring tasks will be
            automated and workflows are going to completely revolutionize from
            what we see today. I want to be at the forefront of this change.
          </p>
          <p>
            I love music (Techno, House), am deep into F1 and love GoKarting, &
            chess.
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <GetInTouchButton />

          <EmailButton />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
