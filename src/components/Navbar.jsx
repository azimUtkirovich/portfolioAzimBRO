import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { navbarLinks } from "../data/NavbarLinks";

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  return (
    <div
      className={`w-full md:flex md:items-center md:justify-center bg-[#21325e] text-white transition-all duration-300 md:h-25
        ${openNavbar ? "h-screen" : "h-25"}`}
    >
      <div className="w-full h-25 flex items-center justify-end md:hidden">
        <button
          type="button"
          className="text-white mr-12"
          onClick={() => {
            setOpenNavbar((prev) => !prev);
          }}
        >
          {openNavbar ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <div
        className={`flex-col items-center gap-6 md:h-auto md:w-auto
            ${openNavbar ? "flex w-full mt-20 gap-8 text-xl" : "hidden"} 
            md:flex md:flex-row md:justify-center md:items-center md:text-base`}
      >
        {navbarLinks.map((item) => (
          <Link
            key={item.id}
            to={item.url}
            onClick={() => setOpenNavbar(false)}
            className="hover:text-blue-300 transition-colors w-full text-center md:w-auto text-2xl 2xl:text-4xl"
          >
            {item.link}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
