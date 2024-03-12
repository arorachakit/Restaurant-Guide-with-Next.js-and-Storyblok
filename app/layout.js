import { storyblokInit, apiPlugin, getStoryblokApi} from "@storyblok/react/rsc"
import StoryblokProvider from "@/components/StoryblokProvider"
import SiteConfig from "@/components/SiteConfig";


import './globals.css';

export const metadata = {
  title: 'Storyblok and Next.js 13',
  description: 'A Next.js and Storyblok app using app router ',
}

// storyblokInit({
//   accessToken: 'M24xBdK0QU4MgbvqyeCNyQtt',
//   use: [apiPlugin]
// })


// const storyblokApi = getStoryblokApi();
// let { data } = await storyblokApi.get("cdn/stories/site-config", {
//   version: "draft",
// }, {cache: "no-store"});


export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <body>
          {/* <SiteConfig blok={data.story.content}> */}
            {children}
          {/* </SiteConfig> */}
        {/* <Footer/> */}
      </body>
      </html>
  )
}

