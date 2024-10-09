import { Link } from "react-router-dom";
import { Navlinks } from "../../assets/constants";
import { WhiteLogo } from "../../assets/images";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-footer w-full min-h-[40vh] py-7 px-2">
      <div className="w-full md:w-[80%] mx-auto">
      <div className="flex flex-col items-center gap-7 ">
        <div className="*:text-light">
          <img src={WhiteLogo} alt="logo" width={300} />
          <p className="text-sm text-center mt-4">
            Empowering women in tech through community, <br /> innovation, and
            leadership.
          </p>
        </div>

        <ul className="flex gap-4 sm:gap-7 flex-wrap sm:justify-center items-center *:text-light">
          {Navlinks.map((navlink, id) => (
            <li key={id}>
              <Link to={navlink.href}>{navlink.linkname}</Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 md:gap-10 flex-wrap ">
          <FaFacebook size={25} className="*:text-light" />
          <BsTwitterX size={25} className="*:text-light" />
          <FaInstagram size={25} className="*:text-light" />
          <FaLinkedinIn size={25} className="*:text-light" />
        </div>
      </div>

      <div className="border-t border-light relative mt-6">
        <div className="text-light py-3">
          &copy; 2024 WTMBambili All Rights Reserved
        </div>
      </div></div>
    </footer>
  );
};

export default Footer;
