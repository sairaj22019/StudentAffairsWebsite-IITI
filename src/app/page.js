"use client";

import Carousel from "@/components/carousel";
import AboutUs from "@/components/about-us";
import QuickLinks from "@/components/quick-links";

export default function Home() {
  return (
    <div className="flex-1 bg-background">
      <div className="flex flex-col lg:flex-row gap-4 md:gap-6 px-4 sm:px-6 lg:px-8 py-6 md:py-8 max-w-7xl mx-auto">
        <div className="w-full lg:w-1/2">
          <Carousel />
        </div>
        <div className="w-full lg:w-1/2">
          <AboutUs />
        </div>
      </div>
      <QuickLinks />
    </div>
  );
}
