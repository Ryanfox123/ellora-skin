import Link from "next/link";
import NavLinks from "./NavLinks";
import NavSocials from "./NavSocials";

const Nav = () => {
  return (
    <div className="md:fixed z-0 bg-blush w-full border-b border-lavender">
      <NavSocials />
      <div className="mx-auto text-center border-b pb-4 border-lavender mt-2">
        <h1 className="text-orchid w-max mx-auto">
          <Link href="/">
            <span className="font-league text-4xl font-bold block leading-none md:text-7xl">
              Ellora
            </span>
            <span className="font-sans text-3xl block mt-1 md:mt-0 leading-none md:text-4xl">
              Skin
            </span>
          </Link>
        </h1>
      </div>
      <NavLinks />
    </div>
  );
};

export default Nav;
