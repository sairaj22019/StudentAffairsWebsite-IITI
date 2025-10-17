"use client"

import { useEffect, useRef, useState } from "react"

export default function AboutUs() {
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

  return (
    <section
      id="about"
      ref={ref}
      className="h-full flex flex-col justify-center bg-gradient-to-b from-blue-50 to-white rounded-xl shadow-lg border border-blue-100 p-6 md:p-8"
    >
      <div
        className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-[#003DA5] mb-2">About Student Affairs</h2>
        <div className="h-1 w-12 bg-gradient-to-r from-[#003DA5] to-blue-400 mb-4"></div>

        <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">
          The Student Affairs Division at IIT Indore is dedicated to fostering a vibrant and inclusive campus community.
          We support the holistic development of our students through various programs, clubs, and initiatives that
          complement their academic journey.
        </p>

        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
          With over 50 student clubs spanning technical, cultural, sports, and social domains, we ensure every student
          finds their community and contributes to the vibrant tapestry of campus life at IIT Indore.
        </p>
      </div>
    </section>
  )
}
