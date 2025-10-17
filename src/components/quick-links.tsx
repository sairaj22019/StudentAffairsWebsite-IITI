"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

export default function QuickLinks() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  /* Simplified quick links to show only image and title, removed descriptions */
  const quickLinks = [
    {
      id: 1,
      title: "Academic Portal",
      image: "/academic-portal-books.jpg",
      link: "#",
    },
    {
      id: 2,
      title: "Club Directory",
      image: "/student-clubs-activities.jpg",
      link: "#",
    },
    {
      id: 3,
      title: "Event Calendar",
      image: "/calendar-events.jpg",
      link: "#",
    },
    {
      id: 4,
      title: "Hostel Services",
      image: "/hostel-accommodation.jpg",
      link: "#",
    },
    {
      id: 5,
      title: "Sports & Recreation",
      image: "/sports-activities.jpg",
      link: "#",
    },
    {
      id: 6,
      title: "Counseling Services",
      image: "/counseling-support.jpg",
      link: "#",
    },
  ]

  return (
    <section ref={ref} className="py-10 md:py-14 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">Quick Links</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickLinks.map((item, index) => (
            <Link
              key={item.id}
              href={item.link}
              className={`group transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="h-full flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
                {/* Image Container */}
                <div className="w-full aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 mb-3 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Title */}
                <h3 className="text-sm md:text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
