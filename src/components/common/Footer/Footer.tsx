import Image from "next/image";
import Link from "next/link";
import footerLogo from "@/assets/footerLogo.png";
import NavMenu from "../Navbar/NavMenu";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#412537] text-white pt-20 pb-16">
      <div className="grid grid-cols-2 md:grid-cols-4 items-center container">
        <div className="flex flex-col md:items-center ">
          <Link href={"/"} className="">
            <div className="flex items-center gap-2">
              <Image
                src={footerLogo}
                alt="Booksy.buzz"
                width={200}
                height={200}
                className="rounded mb-6"
              />
            </div>
          </Link>
          <NavMenu className="flex-col md:items-start gap-4 text-base font-normal" />
        </div>

        <div className=" flex justify-center items-center mt-12 text-base font-normal">
          <ul className="space-y-4">
            <li>
              <Link href={"/about"}>
                <span className="hover:text-primary">Terms Of Service</span>
              </Link>
            </li>
            <li>
              <Link href={"/careers"}>
                <span className="hover:text-primary">Support</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className=" flex justify-center items-center mt-2 text-base font-normal">
          <div className=" text-center ">

            <p>Copyright © 2024 Booksy.buzz</p>

          </div>
        </div>

        <div className=" flex justify-center items-center mt-16 text-base font-normal">
          <div className="flex flex-col gap-4   items-end">
            <p className="text-xl font-medium mb-1">Follow Us</p>

            <Link href={"/Instagram"}>
              <div className="flex items-center gap-2">
                <span className="hover:text-primary">Instagram</span>
                <PiInstagramLogoFill size={20} />
              </div>
            </Link>
            <Link href={"/Instagram"}>
              <div className="flex items-center gap-2">
                <span className="hover:text-primary">Facebook</span>
                <FaFacebook size={18} />
              </div>
            </Link>


          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
