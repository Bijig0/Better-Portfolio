import { GradientText, HeroAvatar, HeroSocial, Section } from '@/exports';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Brady</GradientText> 👋
        </>
      }
      description={
        <>
          I am a solo{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            full-stack
          </a>{' '}
          web and app developer based in Melbourne, Australia, specializing in
          supercharging{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            startups.
          </a>{' '}
          Passionate about technology, music and working out!
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="/">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
