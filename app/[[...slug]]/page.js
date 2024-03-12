import {
    getStoryblokApi,
  } from "@storyblok/react/rsc";
  import StoryblokStory from "@storyblok/react/story";
  
//   export const dynamicParams = true;
  
  export default async function Page({params}) {
    let slug = params.slug ? params.slug.join("/") : "home";

    const storyblokApi = getStoryblokApi();
    let { data } = await storyblokApi.get(`cdn/stories/${slug}`, {version: 'draft', resolve_relations: ["featured_restaurants.restaurants"]}, {cache: "no-store"});
    let restaurants = []
    if(slug == 'restaurants'){
      const all_restaurants = await storyblokApi.get('cdn/stories/', {version: 'draft', starts_with: 'restaurants', is_startpage: false },  { cache: "no-store" })
      restaurants = all_restaurants.data.stories
    }
  
    return (
      <div className="mb-40">
        <StoryblokStory restaurants={restaurants} story={data.story} bridgeOptions={{resolveRelations: ["featured_restaurants.restaurants"]}} />
      </div>
    );
  }
  

  export async function generateStaticParams() {

    const storyblokApi = getStoryblokApi();
    let { data } = await storyblokApi.get("cdn/links/" ,{
        version: 'draft'
    });
    let paths = [];
    Object.keys(data.links).forEach((linkKey) => {
        if (data.links[linkKey].is_folder) {
        return;
        }
        const slug = data.links[linkKey].slug;
        
        if(slug == 'home'){
            return
        }

        let splittedSlug = slug.split("/");
    
        paths.push({ slug: splittedSlug });
    });
    return paths

  }