import { CgFileDocument } from "react-icons/cg";
import Greeting from "../components/Elements/Greeting";
import Line from "../components/Elements/LineBorder";
import Statistic from "../components/Elements/Statistic";
import Counter from "../components/Fragments/Counter";
import CardProfil from "../components/Elements/ProfilCard";
import Profil from "../components/Fragments/Profil";
import Stack from "../components/Fragments/CardStack";
import { useContext } from "react";
import { AppContext } from "../AppContext";

const image = [
  {
    src: "./public/images/html.png",
    label: "HTML",
  },
  {
    src: "./public/images/css.png",
    label: "CSS",
  },
  {
    src: "./public/images/js.png",
    label: "JavaScript",
  },
  {
    src: "./public/images/react.png",
    label: "ReactJS",
  },
  {
    src: "./public/images/tailwind.png",
    label: "Tailwind",
  },
];

const Home = () => {
  const { dark } = useContext(AppContext);

  return (
    <div
      id="home"
      className={`top-0 pt-20 px-4 lg:px-20 sm:px-20 md:px-40 ${dark ? `bg-[#121212]` : `bg-white`} `}
    >
      <div>
        <Greeting>Hello, I'm Irwan Syahrir <span className="text-xl">👋</span>
        </Greeting>
        <div className="flex justify-center mb-10 leading-[44px] ">
          <div className="font-poppins font-bold text-[50px] lg:text-[60px] lg:leading-[53px]  sm:text-4xl  text-center max-w-[650px]">
            <span className="text-yellow-500">front-end developer</span>{" "}
            <span className={`${dark && `text-white`}`}>
              with a focus on creating
            </span>{" "}
            <span className="text-red-600">dynamic</span>{" "}
            <span className={`${dark && `text-white`}`}>and</span>
            <span className="text-blue-600"> responsive </span>{" "}
            <span className={`${dark && `text-white`}`}>web interfaces</span>.
          </div>
        </div>

        <Counter>
          <Statistic expert={"2k+"} experTitle={"Cups of milk consumed"} />
          <Line />
          <Statistic expert={"10k+"} experTitle={"Lines of code written"} />
          <Line />
          <Statistic expert={"100"} experTitle={"Cups of tea consumed"} />
        </Counter>

        <Profil>
          <CardProfil
            icon={<CgFileDocument size={24} />}
            title={"Resume"}
            bg={`${
              dark ? `bg-[#F3F3F3] text-black` : ` bg-[#191919] text-white `
            }`}
          />
          <CardProfil
            icon={<CgFileDocument size={24} />}
            title={"Contact"}
            bg={`${
              dark ? `bg-[#191919] text-white border-none` : ` bg-[#F3F3F3] text-[#121212] `
            }`}
          />
         
        </Profil>
      </div>

      <Stack title={"Tech Stack"} style={`${dark ? `text-[#CDCDCD]` : `text-gray-600`}`}>
        {image.map((item, index) => (
          <Stack.Body key={index} style={`${dark ? `bg-[#1E1E1E] text-[#CDCDCD]` : `bg-[#EFF0F1]`}`} >
            <Stack.Header image={item.src} />
            <Stack.Footer label={item.label} />
          </Stack.Body>
        ))}
      </Stack>
    </div>
  );
};

export default Home;
