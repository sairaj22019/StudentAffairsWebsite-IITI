'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function QuickLinks() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  /* Simplified quick links to show only image and title, removed descriptions */
  const quickLinks = [
    {
      id: 1,
      title: 'Alumni',
      image: '/image1.jpg',
      link: 'https://alumni.iiti.ac.in/',
    },
    {
      id: 2,
      title: 'Fluxus',
      image: '/image2.jpg',
      link: 'http://www.fluxus.co.in/',
    },
    {
      id: 3,
      title: 'NIRF',
      image: '/image3.png',
      link: 'https://www.nirfindia.org/Home',
    },
  ];

  return (
    <section
      ref={ref}
      className="py-10 md:py-14 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-start mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            Quick Links
          </h2>
          <div className="h-[2.5px] w-24 bg-gradient-to-r from-primary to-accent"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {quickLinks.map((item, index) => (
            <Link
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group transition-all duration-500 transform ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="h-full flex flex-col items-center text-center transition-transform duration-300 group-hover:scale-[1.05]">
                {/* Image Container */}
                <div className="w-full max-h-[200px] rounded-lg overflow-hidden shadow-md transition-all duration-300 mb-3 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:shadow-lg group-hover:from-primary/20 group-hover:to-accent/20">
                  <img
                    src={item.image || '/placeholder.svg'}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Title */}
                <h3 className="text-sm md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
