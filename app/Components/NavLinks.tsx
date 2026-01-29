"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

const NavLinks = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [hovered, setHovered] = useState<false | string>(false);

  const links = ["About Me", "Pricing", "Treatments", "Gallery", "Contact Me"];

  return (
    <div className="w-2/3 mx-auto hidden md:block my-4">
      <ul className="flex flex-row justify-around font-bold text-orchid gap-10">
        {links.map((link, idx) => {
          return (
            <motion.div
              key={idx}
              onHoverStart={() => setHovered(link)}
              onHoverEnd={() => setHovered(false)}
            >
              <Link href="/">
                <li>{link}</li>
              </Link>
              <div
                className={`transition-all duration-200 border-b-2 border-orchid ${link === hovered ? "w-full" : "w-0"}`}
              />
            </motion.div>
          );
        })}
      </ul>
    </div>
  );
};

export default NavLinks;
