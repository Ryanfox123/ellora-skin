import NavLinks from "./NavLinks";
import NavSocials from "./NavSocials";

const Nav = () => {
  return (
    <div className="md:fixed w-full">
      <NavSocials />
      <div className="mx-auto text-center border-b pb-4 border-lavender mt-2">
        <h1 className="text-orchid">
          <span className="font-league text-6xl font-bold block leading-none md:text-8xl">
            Ellora
          </span>
          <span className="font-sans text-3xl block -mt-1 leading-none md:text-5xl">
            Skin
          </span>
        </h1>
      </div>
      <NavLinks />
    </div>
  );
};

export default Nav;
