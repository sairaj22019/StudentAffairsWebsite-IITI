"use client";

import Carousel from "@/components/carousel";
import AboutUs from "@/components/about-us";
import QuickLinks from "@/components/quick-links";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="flex flex-col lg:flex-row gap-0 md:gap-4 px-4 sm:px-6 lg:px-8 py-6 md:py-8 max-w-7xl mx-auto">
        <div className="w-full lg:w-1/2">
          <Carousel />
        </div>
        <div className="w-full lg:w-1/2">
          <AboutUs />
        </div>
      </div>
      <QuickLinks />
    </main>
  );
}
