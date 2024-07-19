import { useContext } from "react";
import PagesName from "../components/Elements/PagesName";
import { AppContext } from "../AppContext";

const Projects = () => {
  const { dark } = useContext(AppContext);

  return (
    <div
      id="project"
      className={`${dark && "bg-[#121212]"} py-20 lg:px-40 px-4 sm:px-20 md:px-40`}
    >
      <PagesName name={"Projects"} />
      <div
        className={`${
          dark ? "bg-[#1E1E1E] text-white" : "bg-zinc-100"
        } px-2 rounded-xl mb-5 h-64  flex justify-center items-center `}
      >
        <div className="text-center text-2xl font-poppins font-bold">
          New Projects Coming Soon.. <br />
          🤠
        </div>
      </div>
    </div>
  );
};

export default Projects;
