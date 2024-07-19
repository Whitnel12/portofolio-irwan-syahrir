const Stack = ({ children, title,style }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className={`w-fit font-poppins font-semibold text-sm  border-b-[1px] border-gray-500 mb-4 ${style}`}>
        {title}
      </div>  
      <div className="flex gap-4 flex-wrap max-w-72 items-center justify-center">
        {children}
      </div>
    </div>
  );
};

const Body = ({ children, style = `px-4` }) => {
  return (
    <div
      className={`flex flex-col justify-center size-20 items-center py-3 ${style} rounded-xl cursor-pointer`}
    >
      {children}
    </div>
  );
};

const Header = ({ image, alt = `logo` }) => {
  return (
    <div>
      <img src={image} alt={alt} className="size-8 mb-1" />
    </div>
  );
};

const Footer = ({ label }) => {
  return <div className="text-[7px]">{label}</div>;
};

Stack.Body = Body;
Stack.Header = Header;
Stack.Footer = Footer;

export default Stack;
