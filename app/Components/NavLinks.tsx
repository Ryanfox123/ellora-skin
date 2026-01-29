"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { SlArrowRight } from "react-icons/sl";

const NavLinks = () => {
  const [hovered, setHovered] = useState<false | string>(false);

  const links = [
    { label: "About Me" },
    { label: "Treatments", hasDropdown: true },
    { label: "Gallery" },
    { label: "Contact Me" },
  ];

  return (
    <div className="w-1/2 mx-auto hidden md:block my-4">
      <ul className="flex flex-row justify-around font-bold text-orchid gap-10">
        {links.map((link, idx) => {
          return (
            <motion.div
              key={idx}
              onHoverStart={() => setHovered(link.label)}
              onHoverEnd={() => setHovered(false)}
              className="flex flex-row"
            >
              {link.hasDropdown && (
                <SlArrowRight
                  className={`m-1 transition-transform duration-250 ${link.label === hovered ? "rotate-90" : "rotate-0"} fill-orchid stroke-3`}
                />
              )}
              <div className="flex flex-col">
                <Link href="/">
                  <li>{link.label}</li>
                </Link>
                <div
                  className={`transition-all duration-250 border-b-2 border-orchid rounded-b-4xl ${link.label === hovered ? "w-full" : "w-0"}`}
                />
              </div>
            </motion.div>
          );
        })}
      </ul>
    </div>
  );
};

export default NavLinks;
