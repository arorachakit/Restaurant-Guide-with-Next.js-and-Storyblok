import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
 
const LandingPage = ({ blok, restaurants }) => (
  <main {...storyblokEditable(blok)}>
    {blok.body.map((nestedBlok) => (
      <StoryblokComponent restaurants={restaurants} blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);
 
export default LandingPage;