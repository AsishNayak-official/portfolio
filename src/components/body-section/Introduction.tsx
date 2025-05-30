"use client";

import React from "react";
import Image from "next/image";
import yellowCorner from "@/assets/yellowCorner.webp";
import myPic from '@/assets/mypic-removebg.png'

const webDevProcessKeywords = [
  "Requirement Gathering",
  "Stakeholder Meetings",
  "Wireframing",
  "UI/UX Design",
  "Prototyping",
  "Frontend Development",
  "Backend Development",
  "API Integration",
  "Database Design",
  "Testing & QA",
  "Bug Fixing",
  "Responsive Design",
  "Performance Optimization",
  "SEO Setup",
  "Content Integration",
  "Client Review",
  "Deployment",
  "Post-launch Support",
  "Maintenance",
  "Analytics & Feedback",
];

const Introduction = () => {
  return (
    <div className="w-full">
      {/* Yellow blob image in the top-right */}
      <div className="absolute top-0 right-0  h-[75vh] -z-10 overflow-hidden">
        <Image
          src={yellowCorner}
          alt="yellow blob"
          className="w-full h-full object-contain"
        />
        <div className="absolute top-6 right-5 w-full h-full">
          {/* <Image
            src={myPic} // <- Replace with your actual profile image path
            alt="Profile"
            className="w-full h-full object-cover"
          /> */}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 px-16 py-5 text-xl w-2/3 flex flex-col gap-y-10 mb-20">
        <div className="max-w-[75%] leading-tight">
          <span className="font-semibold text-[70px]">
            Hello, my name is <span className="text-[80px]">Asish Nayak.</span>
          </span>
        </div>
        <div className="w-1/2 border flex flex-col rounded-lg text-sm font-medium">
          <div className="flex flex-row justify-between text-lg items-center px-4 py-1">
            <span>Live</span>
            <div className="w-2 h-2 rounded-full bg-black"></div>
          </div>
          <div className="border-t rounded-t-lg flex flex-col pl-6 py-1">
            <span>Location : Bhubaneshwar, Bangalore</span>
            <span>Experience : 1+ year</span>
            <span>Company : Eximietas Design Pvt Ltd</span>
            <span>Date : 03/01/2024 09:00:00 - 29/05/2025 15:15:23</span>
          </div>
          <div className="border-t rounded-t-lg flex flex-row items-center justify-evenly py-2">
            <span className=" border rounded-full px-2">Github</span>
            <span className=" border rounded-full px-2">LinkedIn</span>
            <span className=" border rounded-full px-2">Resume</span>
          </div>
        </div>
      </div>
      <div className="relative w-full overflow-hidden bg-yellow-200 py-4">
        <div className="whitespace-nowrap animate-marquee text-black text-lg font-medium flex gap-12">
          {[...webDevProcessKeywords, ...webDevProcessKeywords].map(
            (word, index) => (
              <span key={index} className="inline-block">
                {word}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Introduction;
