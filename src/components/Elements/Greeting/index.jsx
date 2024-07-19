import { useContext } from "react";
import { AppContext } from "../../../AppContext";

const Greeting = ({children}) => {

  const { dark } = useContext(AppContext)

  return (
    <div className="flex justify-center mb-6 ">
      <div className={`${dark ? `bg-[#222222] text-[#CCCCCC]` : `bg-zinc-100 text-[#666666]`} px-6 py-1 rounded-full cursor-pointer`}>
        <div className=" font-poppins font-semibold text-sm flex items-center ">{children}</div>
      </div>
    </div>
  );
};

export default Greeting;
