"use client";

import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#003DA5] mb-4">
          404
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-[#003DA5] text-white font-semibold rounded-lg hover:bg-[#0052cc] transition-colors"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}
