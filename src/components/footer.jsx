"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {/* About */}
          <div>
            <h3 className="text-base font-bold mb-3">IIT Indore</h3>
            <p className="text-xs opacity-90">
              Student Affairs Division dedicated to fostering a vibrant campus community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold mb-3">Quick Links</h3>
            <ul className="space-y-1 text-xs">
              <li>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  Events
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  Clubs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-bold mb-3">Contact</h3>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2">
                <Mail size={14} />
                <span>studentaffairs@iiti.ac.in</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} />
                <span>+91-XXXX-XXXXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} />
                <span>IIT Indore, Madhya Pradesh</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-base font-bold mb-3">Follow Us</h3>
            <div className="flex gap-3">
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <Facebook size={18} />
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <Twitter size={18} />
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <Instagram size={18} />
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <Linkedin size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-6">
          <p className="text-center text-xs opacity-75">© 2025 IIT Indore Student Affairs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
