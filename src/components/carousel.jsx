"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Carousel() {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  const slides = [
    {
      id: 1,
      image: "/img1.jpeg",
    },
    {
      id: 2,
      image: "/img2.jpg",
    },
    {
      id: 3,
      image: "/img2.jpg",
    },
    {
      id: 4,
      image: "/img3.jpg",
    },
    {
      id: 5,
      image: "/img5.jpeg",
    },
    {
      id: 6,
      image: "/img6.jpeg",
    },
    {
      id: 7,
      image: "/img7.jpeg",
    },
    {
      id: 8,
      image: "/img8.jpeg",
    },
  ]

  useEffect(() => {
    if (!autoPlay) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [autoPlay, slides.length])

  const next = () => {
    setCurrent((prev) => (prev + 1) % slides.length)
    setAutoPlay(false)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
    setAutoPlay(false)
  }

  return (
    /* Carousel now matches about section height for side-by-side layout */
    <div className="relative w-full h-[280px] md:h-[400px] overflow-hidden bg-muted rounded-xl shadow-lg border border-blue-100">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
          {/* Overlay */}
          {/* <div className="absolute inset-0 bg-gradient-to-r from-[#003DA5]/70 to-[#003DA5]/40"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h2
              className={`text-xl md:text-3xl font-bold text-white mb-2 animate-fade-in-up ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            >
              {slide.title}
            </h2>
            <p
              className={`text-xs md:text-base text-white/90 animate-fade-in-up ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
              style={{ animationDelay: "0.2s" }}
            >
              {slide.subtitle}
            </p> */}
          {/* </div> */}
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm group"
      >
        <ChevronLeft size={20} className="group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm group"
      >
        <ChevronRight size={20} className="group-hover:scale-110 transition-transform" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrent(index)
              setAutoPlay(false)
            }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === current ? "bg-white w-6" : "bg-white/50 w-1.5 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
