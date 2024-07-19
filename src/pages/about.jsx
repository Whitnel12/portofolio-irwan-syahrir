import Education from "../components/Fragments/CardEducation";
import PagesName from "../components/Elements/PagesName";
import { VscVerifiedFilled } from "react-icons/vsc";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { IconBase } from "react-icons/lib";

const About = () => {
  const { dark } = useContext(AppContext);

  return (
    <div id="about" className={`py-20 px-4 lg:px-40 sm:px-20 md:px-40 ${dark ? `bg-[#121212]` : `bg-white`}` }>
      <PagesName name={"About Me"} />
      <div className="mb-10">
        <div className="flex gap-2 mb-3">
          <div className="border relative border-zinc-500 rounded-2xl justify-between white p-2 h-auto ">
            <div className={` rounded-full p-1 absolute -left-3 -top-3 ${dark ?  `bg-[#121212]`:`bg-white`} `}>
              <VscVerifiedFilled  size={40} className="text-blue-700" />
            </div>
            <img
              src="/public/images/kartun2.jpg"
              alt="profil"
              className="size-28 rounded-lg min-w-28 min-h-full "
            />
          </div>
          <div className="flex flex-col justify-between px-3 py-2 ">
            <div className="font-poppins flex flex-col gap-1">
              <div className={`font-bold min text-2xl ${dark ? `text-[#CDCDCD]`:`text-slate-800`} `}>
                Irwan Syahrir
              </div>
              <div className={`w-fit font-light text-sm ${dark ? `text-[#CDCDCD]`:`text-slate-800`} `}>
                Freelencer | Web Developer
              </div>
            </div>
            <div className={`w-fit text-xs font-poppins ${dark ? `text-[#CDCDCD]`:`text-slate-800`}  font-light`}>
              Masssepe,Sidrap,Makassar ,Sulawesi Selatan,Indonesia 91662
            </div>
          </div>
        </div>

        <div className={`font-poppins font-semibold ${dark ?  `text-[#CDCDCD]`:`text-slate-800`} `}>
          I am a frontend developer with a primary focus on React.js, Next.js,
          Tailwind CSS, and Framer Motion technologies. I am an individual who
          is diligent and passionate about the learning process, with the
          ultimate goal of realizing my aspirations as a professional frontend
          developer.
        </div>
      </div>

      <Education style={`${dark ? `text-[#CDCDCD]` : `text-gray-900` }`} colorIcon={`${dark && `text-[#CDCDCD]`}`}>
        <Education.Body style={`${dark ? `bg-[#1E1E1E] border-none` : `bg-gradient-to-t from-blue-50 to-indigo-50`}`}>
          <Education.BodyImage
            image={"./public/images/undipa.png"}
            alt={"undipa"}
          />
          <Education.BodyUniversityName
            university={"Universitas Dipa Makassar"}
            style={`${dark && "text-white"}`}
          />
          <Education.BodyBachelor
            bachelor={"Bachelor's Degree"}
            major={"Informatics Engineering (S.Kom)"}
            style={`${dark ? 'text-[#CDCDCD]':'text-gray-600'}`}
          />
          <Education.BodyStartingYear style={`${dark ? 'text-[#CDCDCD]':'text-gray-600'}`} year={"2022 - Present"} />
        </Education.Body>
      </Education>
    </div>
  );
};

export default About;
