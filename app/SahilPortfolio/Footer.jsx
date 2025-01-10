"use client";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BackgroundBeams } from "@/components/ui/background-beams";

export function Footer() {
  const socialLinks = [
    {
      id: 1,
      icon: <FaLinkedin className="w-12 h-12" />,
      href: "https://www.linkedin.com/in/sahil-dhillon-294a05208/",
      label: "LinkedIn Profile"
    },
    {
      id: 2,
      icon: <FaGithub className="w-12 h-12" />,
      href: "https://github.com/SahilDhillon0",
      label: "GitHub Profile"
    },
    {
      id: 3,
      icon: <MdEmail className="w-12 h-12" />,
      href: "mailto:SahilDhillon609@gmail.com",
      label: "Email Contact"
    }
  ];
  return (
    <div
      className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased mt-20">
      <div className="max-w-2xl mx-auto p-4">
        <h1
          className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Get connected on my socials
        </h1>
        <div className="flex items-center justify-center space-x-14 mt-10 relative z-20">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="transform transition-transform  hover:text-gray-400 hover:scale-110"
              >
                {link.icon}
              </a>
            ))}
          </div>
          <div className="text-sm text-gray-400 text-center mt-5">
            <p>©2024 Codethics. All rights reserved.</p>
          </div>
      </div>
      <BackgroundBeams className="z-0" />
    </div>
  );
}
