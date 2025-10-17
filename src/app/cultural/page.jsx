"use client";

import React from "react";
import Link from "next/link";
import { Home, Construction } from "lucide-react";

const page = () => {
  return (
    <div className="flex-1 bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full">
        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-8 sm:p-12 text-center animate-fade-in-up">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-[#003DA5] to-[#0052cc] p-4 rounded-full animate-float">
              <Construction size={48} className="text-white" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cultural Committee
          </h1>

          {/* Divider */}
          <div className="h-1 w-20 bg-gradient-to-r from-[#003DA5] to-blue-400 mx-auto mb-6"></div>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-600 mb-8">
            This page is currently under development. We're working hard to
            bring you exciting content about our cultural activities, events,
            and initiatives.
          </p>

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#003DA5] px-4 py-2 rounded-full text-sm font-semibold mb-8">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#003DA5] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#003DA5]"></span>
            </span>
            Under Development
          </div>

          {/* Back to Home Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#003DA5] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0052cc] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Home size={20} />
            Back to Home
          </Link>
        </div>

        {/* Additional Info */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Check back soon for updates!
        </p>
      </div>
    </div>
  );
};

export default page;
