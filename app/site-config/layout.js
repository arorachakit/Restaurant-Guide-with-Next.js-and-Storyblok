import { storyblokInit, apiPlugin, getStoryblokApi} from "@storyblok/react/rsc"
import StoryblokProvider from "@/components/StoryblokProvider"



storyblokInit({
  accessToken: 'M24xBdK0QU4MgbvqyeCNyQtt',
  use: [apiPlugin]
})

export default function RootLayout({ children }) {
  return (
    <StoryblokProvider>
          {/* <SiteConfig blok={data.story.content}> */}
            {children}
          {/* </SiteConfig> */}
        {/* <Footer/> */}
    </StoryblokProvider>
  )
}

