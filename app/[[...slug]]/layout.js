import {
  storyblokInit,
  apiPlugin,
  getStoryblokApi,
} from "@storyblok/react/rsc";
import StoryblokProvider from "@/components/StoryblokProvider";
import SiteConfig from "@/components/SiteConfig";

storyblokInit({
  accessToken: "M24xBdK0QU4MgbvqyeCNyQtt",
  use: [apiPlugin]
});

export default async function RootLayout({ children }) {
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(
    "cdn/stories/site-config",
    {
      version: "draft", resolve_links: 'url'
    },
    { cache: "no-store" }
  );
  return (
    <StoryblokProvider>
      <SiteConfig data={data.story.content}>{children}</SiteConfig>
      {/* <Footer/> */}
    </StoryblokProvider>
  );
}
