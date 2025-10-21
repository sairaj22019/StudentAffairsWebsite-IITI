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
          When it comes to studying at an IIT, people have the misconception that IITians are studious dweebs, who can't break out of the humdrum monotony of their schedules; trapped in a perpetual loop of assignments, quizzes, vivas and semester examinations. With a panoply of activities organised under the banner of cultural and technical events, to a multitude of clubs that help the students follow their interests, the students gain an impressive repertoire of skills, apart from academic excellence. Whether it be the performance at inter-IITs, at annual TvsMs, or international competitions, the students at IITI have consistently shone with full brilliance. With a close-knit community of more than 1800 students, students here form strong and lasting friendships for life.
        </p>
      </div>
    </section>
  )
}
