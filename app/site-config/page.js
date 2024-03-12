import {
    getStoryblokApi,
  } from "@storyblok/react/rsc";
  import StoryblokStory from "@storyblok/react/story";
  
//   export const dynamicParams = true;
  
  export default async function Page() {
    // let slug = params.slug ? params.slug.join("/") : "home";

    const storyblokApi = getStoryblokApi();
    let { data } = await storyblokApi.get(`cdn/stories/site-config`, {version: 'draft', resolve_links: 'url'}, {cache: "no-store"});

  
    return (
      <div>
        <StoryblokStory story={data.story} bridgeOptions={{}} />
      </div>
    );
  }
  
