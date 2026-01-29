import Link from "next/link";
import { SiFacebook, SiInstagram, SiTiktok } from "react-icons/si";

const NavSocials = () => {
  return (
    <div className="mt-2 px-10 hidden md:block">
      <ul className="flex flex-row gap-5 justify-end">
        <li className="flex flex-col">
          <Link href="https://www.facebook.com/?locale=en_GB">
            <SiFacebook
              size={30}
              className="text-[#846B8A] hover:text-[#1877f2]"
            />
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/">
            <SiInstagram
              size={30}
              className="text-[#846B8A] hover:text-purple-400"
            />
          </Link>
        </li>
        <li>
          <Link href="https://www.tiktok.com/en-GB/">
            <SiTiktok size={30} className="text-[#846B8A] hover:text-black" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavSocials;
