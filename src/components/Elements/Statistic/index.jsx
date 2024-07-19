import { useContext } from "react";
import { AppContext } from "../../../AppContext";

const Statistic = ({expert, experTitle}) => {

  const {dark} = useContext(AppContext)

  return (
    <div className="leading-none flex w-fit flex-col items-center max-w-10">
      <div className={` mb-2 w-fit px-2 py-1 rounded-lg ${dark ? `bg-[#222222]` : `bg-zinc-100`}  font-poppins font-semibold text-[#999999]  `}>
        {expert}
      </div>
      <div className="text-gray-500 text-[10px] text-center relative min-w-20">
        {experTitle}
      </div>
    </div>
  );
};

export default Statistic;
