import { Logo } from "../../assets/images";
import { Navlinks } from "../../assets/constants";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "../ui";
import { MdClose, MdMenu } from "react-icons/md";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [activeLink, setActiveLink] = useState(null);
  const [open, setOpen] = useState(false);

  console.log(currentPath);
  return (
    <header className="w-full  h-20 grid place-items-center shadow-sm bg-light fixed top-0 z-[1000]">
      <nav className="mx-auto w-[95%] lg:w-[90%] flex justify-between items-center">
        <div className="flex justify-between items-center w-full ">
          <img src={Logo} alt="#" width={220} />
          <div
            onClick={() => setOpen(!open)}
            className="cursor-pointer md:hidden"
          >
            {!open ? <MdMenu size={30} /> : <MdClose size={30} />}
          </div>
        </div>

        <ul className=" *:text-base gap-2 lg:gap-4 hidden md:flex">
          {Navlinks.map((link, id) => (
            <motion.li
              layout
              key={id}
              className={` pr-2 lg:px-2 cursor-pointer relative grid overflow-hidden place-items-center `}
              onMouseOver={() => setActiveLink(link)}
              onMouseLeave={() => setActiveLink(null)}
            >
              <Link
                to={link.href}
                className={`${
                  currentPath === link.href
                    ? "text-primary font-medium border-b border-primary"
                    : "text-title"
                } whitespace-nowrap `}
              >
                {link.linkname}
              </Link>

              <>
                {activeLink?.linkname == link.linkname ||
                currentPath == link.linkname ? (
                  <motion.span
                    layoutId="highlight"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="h-0.5 block absolute bottom-0 w-full bg-primary"
                  />
                ) : null}
              </>
            </motion.li>
          ))}
          <div className="">
            <Button>Join Our Community</Button>
          </div>
        </ul>

        <ul className={`w-full md:hidden fixed right-0 bg-light shadow-xl py-6 top-20 flex flex-col justify-center transition-all items-center z-[40] gap-5 ${open ? 'right-0':'-right-[100%]'}`}>
          {Navlinks.map((link, id) => (
            <motion.li
              layout
              key={id}
              className={`px-2 cursor-pointer border-b border-title/5 w-full relative z-20 grid  place-items-center `}
              onMouseOver={() => setActiveLink(link)}
              onMouseLeave={() => setActiveLink(null)}
            >
              <Link
                to={link.href}
                className={`${
                  currentPath === link.href
                    ? "text-primary font-medium "
                    : "text-title"
                } whitespace-nowrap `}
              >
                {link.linkname}
              </Link>

              <>
                {activeLink?.linkname == link.linkname ||
                currentPath == link.linkname ? (
                  <motion.span
                    layoutId="highlight"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="h-0.5 block absolute bottom-0 w-full z-20 bg-primary"
                  />
                ) : null}
              </>
            </motion.li>
          ))}
          <div className="">
            <Button>Join Our Community</Button>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
