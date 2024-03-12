/** 1. Tag it as client component */
"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

/** 2. Import your components */
import FeaturedRestaurants from "./FeaturedRestaurants";
import SiteConfig from './SiteConfig';
import LandingPage from "./LandingPage";
import Hero from "./Hero";
import Restaurant from "./Restaurant";
import AllRestaurants from "./AllRestaurants";

/** 3. Initialize it as usual */
storyblokInit({
  accessToken: "M24xBdK0QU4MgbvqyeCNyQtt",
  use: [apiPlugin],
  components: {
    restaurant: Restaurant,
    hero : Hero,
    "landing_page": LandingPage,
    "site_config": SiteConfig,
    "featured_restaurants": FeaturedRestaurants,
    "all_restaurants": AllRestaurants
  },
});

export default function StoryblokProvider({ children }) {
  return children;
}