import { Logo } from "../../assets/images";
import { Navlinks } from "../../assets/constants";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "../ui";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [activeLink, setActiveLink] = useState(null);

  console.log(currentPath);
  return (
    <header className="w-full h-20  grid place-items-center shadow-sm">
      <nav className="mx-auto w-[90%] flex justify-between items-center">
        <div>
          <img src={Logo} alt="#" width={220} />
        </div>

        <ul className="flex *:text-base gap-3">
          {Navlinks.map((link, id) => (
            <motion.li
              layout
              key={id}
              className={`px-2 cursor-pointer relative grid overflow-hidden place-items-center `}
              onMouseOver={() => setActiveLink(link)}
              onMouseLeave={() => setActiveLink(null)}
            >
              <Link
                to={link.href}
                className={`${
                  currentPath === link.href
                    ? "text-primary font-medium "
                    : "text-title"
                }`}
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
          <div className="ml-3">
            <Button>Join Our Community</Button>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
