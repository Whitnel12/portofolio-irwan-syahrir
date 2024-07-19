import { LuGraduationCap } from "react-icons/lu";

const Education = ({children,style,colorIcon}) => {

  return (
    <div>
      <div className="flex items-center gap-2 mb-3 ">
        <div>
          <LuGraduationCap size={28} className={`${colorIcon}`}/>
        </div>
        <div className={` font-poppins font-medium text-lg ${style}`}>
          Education
        </div>
      </div>
      {children}
    </div>
  );
};

const Body = ({ children,style }) => {
  return (
    <div className={` ${style} rounded-2xl  flex flex-col gap-2 border border-slate-200  px-3 pt-4 pb-8`}>{children}</div>
  );
};

const BodyImage = ({image,alt}) => {
  return (
    <img src={image} alt={alt} className=" size-28" />
  );
};

const BodyUniversityName = ({university,style}) => {
  return (
    <div className={`font-poppins text-base pl-2 ${style} `}>
      {university}
    </div>
  );
};

const BodyBachelor = ({bachelor,major,style}) => {
  return (
    <div className={`font-poppins text-sm pl-2 ${style} `}>
      {bachelor}<span className="mx-2">•</span>
      {major}
    </div>
  );
};

const BodyStartingYear = ({year,style}) => {
  return (
    <div className={`font-poppins text-sm pl-2 font-medium ${style}`}>
      {year}
    </div>
  );
};

Education.Body = Body;
Education.BodyImage = BodyImage;
Education.BodyUniversityName = BodyUniversityName;
Education.BodyBachelor = BodyBachelor;
Education.BodyStartingYear = BodyStartingYear;

export default Education;
