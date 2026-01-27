import { SiFacebook, SiInstagram, SiTiktok } from "react-icons/si";

const NavSocials = () => {
  return (
    <div className="mt-1 px-10 p-2 hidden md:block">
      <ul className="flex flex-row gap-5 justify-end">
        <li>
          <SiFacebook size={30} style={{ color: "#846B8A" }} />
        </li>
        <li>
          <SiInstagram size={30} style={{ color: "#846B8A" }} />
        </li>
        <li>
          <SiTiktok size={30} style={{ color: "#846B8A" }} />
        </li>
      </ul>
    </div>
  );
};

export default NavSocials;
