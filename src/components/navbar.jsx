"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  const navItems = [
    { label: "Home", href: "#" },
    { label: "Organisation", href: "#" },
    { label: "EBSB", href: "#" },
    {
      label: "Gymkhana",
      href: "#",
      submenu: [
        { label: "IIT Indore Gymkhana", href: "#" },
        { label: "Gymkhana Constitution", href: "#" },
        { label: "Student Gymkhana Election", href: "#" },
      ],
    },
    {
      label: "Committees",
      href: "#",
      submenu: [
        { label: "Cultural Committee", href: "#" },
        { label: "Science and Technology Committee", href: "#" },
        { label: "Sports Committee", href: "#" },
      ],
    },
    { label: "Sports", href: "#" },
    {
      label: "Best All Rounder Performance",
      href: "#",
      submenu: [
        { label: "Nomination Form for Best All Rounder", href: "#" },
        { label: "Information for Submission", href: "#" },
      ],
    },
    {
      label: "Insurance",
      href: "#",
      submenu: [
        { label: "Details of Students", href: "#" },
        { label: "Student List", href: "#" },
        { label: "IIT Indore Empanelled Hospitals", href: "#" },
      ],
    },
  ]

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label)
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b-2 border-[#003DA5] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Name */}
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RUJ4hUvDOPKiuV5lTpQcj4Hop9YHnr.png"
              alt="IIT Indore Logo"
              className="w-12 h-12 group-hover:scale-110 transition-transform duration-300"
            />
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-[#003DA5]">IIT Indore</h1>
              <p className="text-xs text-gray-600">Student Affairs</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <button
                  onClick={() => item.submenu && toggleDropdown(item.label)}
                  className="text-gray-700 hover:text-[#003DA5] font-medium transition-colors duration-300 px-3 py-2 text-sm flex items-center gap-1 rounded-lg hover:bg-blue-50"
                >
                  {item.label}
                  {item.submenu && <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />}
                </button>

                {/* Desktop Dropdown */}
                {item.submenu && (
                  <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.label}
                        href={subitem.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-[#003DA5] transition-colors text-sm"
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-blue-50 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} className="text-[#003DA5]" /> : <Menu size={24} className="text-[#003DA5]" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-1 animate-fade-in-up">
            {navItems.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() => item.submenu && toggleDropdown(item.label)}
                  className="w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-[#003DA5] rounded-lg transition-colors flex items-center justify-between"
                >
                  {item.label}
                  {item.submenu && (
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`}
                    />
                  )}
                </button>

                {/* Mobile Dropdown */}
                {item.submenu && openDropdown === item.label && (
                  <div className="bg-blue-50 rounded-lg ml-4 mt-1 space-y-1">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.label}
                        href={subitem.href}
                        className="block px-4 py-2 text-gray-700 hover:text-[#003DA5] transition-colors text-sm rounded-lg hover:bg-blue-100"
                        onClick={() => setIsOpen(false)}
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
