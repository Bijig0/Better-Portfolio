import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="SwiftQu"
        description="A modern queuing management system launched in 17 businesses around Australia. The SwiftQu project includes an admin dashboard for businesses, a mobile application for end users, and a landing page for marketing purposes."
        link="/"
        img={{
          src: '/assets/images/SwiftQuLogo.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Select for more info</Tags>
          </>
        }
      />
      <Project
        name="Intstitute"
        description="A programming academy for young kids, offering programming tutoring and workshops. Built with the Shopify Dawn theme, with minor customizations done using Javascript and CSS"
        link="https://www.intstitute.com"
        img={{ src: '/assets/images/IntstituteLogo.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Shopify</Tags>
            <Tags color={ColorTags.YELLOW}>Javascript</Tags>
            <Tags color={ColorTags.BLUE}>CSS</Tags>
          </>
        }
      />
      <Project
        name="Mortal Kombat Leaderboard"
        description="My very first project! A leaderboard for the Mortal Kombat 11 video game built with CRA and deployed onto Netlify. Has my hand-made pagination, data fetching, and terrible design :)"
        link="/"
        img={{
          src: '/assets/images/MortalKombatLogo.png',
          alt: 'Project Maps',
        }}
        category={
          <>
            <Tags color={ColorTags.BLUE}>React</Tags>
            <Tags color={ColorTags.INDIGO}>Netlify</Tags>
            <Tags color={ColorTags.YELLOW}>Javascript</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
