import { useContext, useEffect, useState } from "react";
import { TbMenuDeep } from "react-icons/tb";
import { WiDaySunny } from "react-icons/wi";
import { CgClose } from "react-icons/cg";
import { AppContext } from "../../AppContext";
import { MdNightlight } from "react-icons/md";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuHeight, setMenuHeght] = useState("0px");
  const { dark, setDark } = useContext(AppContext);

  useEffect(() => {
    isOpen ? setMenuHeght("50%") : setMenuHeght("0px");
  }, [isOpen]);

  const handleScroll = (sectionId) => {
    const id = document.getElementById(sectionId);
    id && id.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      <div
        className={`flex lg:px-40 justify-center top-0 fixed w-full px-4 py-4 sm:px-20 md:px-40 ${
          dark ? `bg-[#121212]` : `bg-white`
        } shadow-sm rounded-xl z-50`}
      >
        <div className="flex items-center justify-between w-full ">
          <div className="bg-blue-600 w-6 h-6 rounded-md"></div>
          <div>
            {dark ? (
              <MdNightlight
                size={20}
                className="text-slate-500 cursor-pointer"
                onClick={() => setDark(!dark)}
              />
            ) : (
              <WiDaySunny
                size={24}
                className="text-slate-500 cursor-pointer"
                onClick={() => setDark(!dark)}
              />
            )}
            
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? (
              <CgClose
                size={28}
                className={`${
                  dark ? `bg-gray-700 text-slate-100` : `bg-slate-200`
                } p-1 rounded-lg `}
              />
            ) : (
              <TbMenuDeep size={28} className=" text-slate-500" />
            )}
          </div>
        </div>
      </div>
      <div
        className={`fixed w-full h-1/2 ${
          dark ? `bg-[#121212]` : `bg-gray-200`
        }  z-40 rounded-xl  overflow-hidden transition-all ease-in-out duration-500 `}
        style={{ height: menuHeight }}
      >
        <ul className={`${dark ? `text-[#CDCDCD]` : `text-gray-700 `} flex pt-14  flex-col text-center justify-evenly  h-full font-poppins font-semibold `}>
          <li>
            <button
              className=" focus:outline-none"
              onClick={() => handleScroll("home")}
            >
              Home
            </button>
          </li>
          <li>
            <button
              className=" focus:outline-none"
              onClick={() => handleScroll("about")}
            >
              About
            </button>
          </li>
          <li>
            <button
              className=" focus:outline-none"
              onClick={() => handleScroll("project")}
            >
              Project
            </button>
          </li>
          <li>
            <button
              className=" focus:outline-none"
              onClick={() => handleScroll("contact")}
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
