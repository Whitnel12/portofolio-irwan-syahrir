import { IoLocationSharp } from "react-icons/io5";
import { BsGlobeAsiaAustralia } from "react-icons/bs";
import { GiSmartphone } from "react-icons/gi";
import { HiOutlineMail } from "react-icons/hi";
import { useContext } from "react";
import { AppContext } from "../../AppContext";

const ContactFooter = [
  {
    footerItem: "Home",
    src: "#home",
  },
  {
    footerItem: "About",
    src: "#about",
  },
  {
    footerItem: "Project",
    src: "#project",
  },
  {
    footerItem: "Contact",
    src: "#contact",
  }
];

const InformationFooter = [
  {
    footerItem: "Sidrap - Makassar",
    icon: <IoLocationSharp size={10} className="text-red-500" />,
  },
  {
    footerItem: "Sulawesi Selatan - Indonesia",
    icon: <BsGlobeAsiaAustralia />,
  },
  {
    footerItem: "+6281524678034",
    icon: <GiSmartphone />,
  },
  {
    footerItem: "irwanmousquerade@gmail.com",
    icon: <HiOutlineMail />,
  },
];

const Footer = () => {
  const { dark } = useContext(AppContext);

  return (
    <div className={`px-4 ${dark && "bg-[#121212]"} pt-20 pb-4 lg:px-40 sm:px-20 md:px-40`}>
      <div className="mb-4">
        <div className="flex items-center gap-1 mb-2">
          <div className="bg-blue-600 w-6 h-6 rounded-md"></div>
          <div
            className={`font-poppins text-lg font-semibold ${
              dark ? `text-white` : `text-gray-800`
            }`}
          >
            Irwan Syahrir
          </div>
        </div>

        <ul className="font-poppins text-sm leading-7">
          {ContactFooter.map((item, index) => (
            <li key={index} className={dark && `text-[#CDCDCD]`}>
              <a href={item.src}>{item.footerItem}</a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <div className="flex items-center gap-1 mb-3">
          <div className="bg-blue-600 w-6 h-6 rounded-md"></div>
          <div
            className={`font-poppins text-lg font-semibold ${
              dark ? `text-white` : `text-gray-800`
            }`}
          >
            Information
          </div>
        </div>

        <ul className="font-poppins text-sm leading-7">
          {InformationFooter.map((item, index) => (
            <li key={index} className={`flex items-center gap-1 ${dark && `text-[#CDCDCD]`}`}>
              {item.icon}
              <div>{item.footerItem}</div>
            </li>
          ))}
        </ul>
      </div>

      <div className={`font-poppins text-xs text-center pt-5 ${dark ? `text-[#CDCDCD]` : `text-gray-600`}`}>
        @2024 Irwan Syahrir. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
