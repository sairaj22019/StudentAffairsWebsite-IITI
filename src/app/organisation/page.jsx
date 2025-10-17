"use client";

import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Mail, Phone } from "lucide-react";

const organisationMembers = [
  {
    id: 1,
    name: "Professor Amod C. Umarikar",
    designation: "Dean, Student Affairs",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    email: "dean_sa@iiti.ac.in",
    phone: "+91-XXXX-XXXXXX",
  },
  {
    id: 2,
    name: "Dr. Jayaprakash Murugesan",
    designation: "Associate Dean-I, Student Affairs",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    email: "adean1_sa@iiti.ac.in",
    phone: "+91-XXXX-XXXXXX",
  },
  {
    id: 3,
    name: "Dr. Abhijeet Joshi",
    designation: "Associate Dean-II, Student Affairs",
    image:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&crop=face",
    email: "adean2_sa@iiti.ac.in",
    phone: "+91-XXXX-XXXXXX",
  },
  {
    id: 4,
    name: "Cdr. Sunil Kumar (Retd.)",
    designation: "Joint Registrar, Student Affairs",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    email: "jr_sa@iiti.ac.in",
    phone: "+91-XXXX-XXXXXX",
  },
];

const page = () => {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <div className="flex-grow">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-[#003DA5] to-[#0052cc] py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 animate-fade-in-up">
              STUDENT AFFAIRS OFFICE
            </h1>
            <p className="text-blue-100 text-sm sm:text-base animate-fade-in-up">
              Meet the dedicated team committed to student welfare and
              development
            </p>
          </div>
        </div>

        {/* Team Grid Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {organisationMembers.map((member, index) => (
              <div
                key={member.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 hover:border-blue-300 transform hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image Container */}
                <div className="aspect-square bg-gradient-to-br from-blue-50 to-blue-100 p-6 flex items-center justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>

                {/* Content Container */}
                <div className="p-5 text-center border-t-4 border-[#003DA5]">
                  <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-2">
                    {member.name}
                  </h3>
                  <p className="text-sm text-[#003DA5] font-semibold mb-4 line-clamp-2">
                    {member.designation}
                  </p>

                  {/* Contact Info */}
                  <div className="space-y-2 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-center gap-2 text-xs text-gray-600 hover:text-[#003DA5] transition-colors">
                      <Mail size={14} />
                      <span className="truncate">{member.email}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-xs text-gray-600 hover:text-[#003DA5] transition-colors">
                      <Phone size={14} />
                      <span>{member.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Information Section */}
        {/* <div className="bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-[#003DA5] mb-4">
              About Student Affairs
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The Student Affairs Office at IIT Indore is dedicated to ensuring
              the holistic development of students through various academic,
              cultural, and sports activities. Our team works tirelessly to
              provide a supportive environment that fosters personal growth,
              leadership skills, and community engagement.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-[#003DA5] mb-2">
                  Academic Excellence
                </h3>
                <p className="text-sm text-gray-600">
                  Supporting students in their academic journey
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-[#003DA5] mb-2">
                  Student Welfare
                </h3>
                <p className="text-sm text-gray-600">
                  Ensuring overall well-being of students
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-[#003DA5] mb-2">
                  Co-curricular Activities
                </h3>
                <p className="text-sm text-gray-600">
                  Promoting sports, culture, and leadership
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      <Footer />
    </main>
  );
};

export default page;
