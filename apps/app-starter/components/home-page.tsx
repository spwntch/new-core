'use client';

import { FullImageHero } from "@spwntch/react-ui";
import { HERO_CONTENT, HERO_IMAGE } from "../config/website/home/hero";

const HomePage = () => {
  return  <div className="flex flex-col">
  <FullImageHero
    innerContent={HERO_CONTENT}
    className="text-white"
   
  />
  </div>
};

export default HomePage;
