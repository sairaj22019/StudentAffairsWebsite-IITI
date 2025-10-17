"use client";

import React from "react";
import { Mail, Phone } from "lucide-react";

const organisationMembers = [
  {
    id: 1,
    name: "Professor Amod C. Umarikar",
    designation: "Dean, Student Affairs",
    image:
      "/person1.jpg",
    email: "dean_sa@iiti.ac.in",
    phone: "+91-XXXX-XXXXXX",
  },
  {
    id: 2,
    name: "Dr. Jayaprakash Murugesan",
    designation: "Associate Dean-I, Student Affairs",
    image:
      "/person2.jpeg",
    email: "adean1_sa@iiti.ac.in",
    phone: "+91-XXXX-XXXXXX",
  },
  {
    id: 3,
    name: "Dr. Abhijeet Joshi",
    designation: "Associate Dean-II, Student Affairs",
    image:
      "/person3.jpeg",
    email: "adean2_sa@iiti.ac.in",
    phone: "+91-XXXX-XXXXXX",
  },
  {
    id: 4,
    name: "Cdr. Sunil Kumar (Retd.)",
    designation: "Joint Registrar, Student Affairs",
    image:
      "/person4.jpg",
    email: "jr_sa@iiti.ac.in",
    phone: "+91-XXXX-XXXXXX",
  },
];

const page = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#003DA5] to-[#0052cc] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 animate-fade-in-up">
            STUDENT AFFAIRS OFFICE
          </h1>
          <p className="text-blue-100 text-sm sm:text-base animate-fade-in-up">
            Meet the dedicated team committed to student welfare and development
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
  );
};

export default page;
