import { useState } from "react";

const NavLinks = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const links = ["About Me", "Pricing", "Treatments", "Gallery", "Contact Me"];

  return (
    <div className="w-2/3 mx-auto hidden md:block mt-4">
      <ul className="flex flex-row justify-around font-bold text-orchid">
        <li>About Me</li>
        <li>Pricing</li>
        <li>Treatments</li>
        <li>Gallery</li>
        <li>Contact Me</li>
      </ul>
    </div>
  );
};

export default NavLinks;
