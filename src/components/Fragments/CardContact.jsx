import PagesName from "../Elements/PagesName";

const CardContact = ({icon,text,children,style}) => {
  return (
    <>
      <PagesName name={"Contact"} />
      <div className={`${style} px-5 pt-5 pb-2 flex flex-col ju rounded-xl`}>
        <div className="flex justify-start items-center gap-1 mb-2">
          <div>
            {icon}
          </div>
          <div className={`font-poppins font-semibold text-lg`}>
            {text}
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

const CardText = ({desk,style}) => {
  return (
    <div className={`font-poppins font-semibold ${style} text-sm mb-3`}>
    {desk}  
    </div>
  );
};

const CardItem = ({style,icon,contact,text,link,colorText}) => {
  return (
    <a
      href={link}
      className={`${style} flex items-center gap-2 w-full px-1 py-[6px] rounded-lg mb-4 border`}
    >
      <div>
        {icon}
      </div>
      <div className="truncate">
        <div className="text-xs font-poppins">{text}</div>
        <div className={`font-poppins text-sm font-bold ${colorText} w-fit`}>
          {contact}
        </div>
      </div>
    </a>
  );
};

CardContact.CardText = CardText;
CardContact.CardItem = CardItem;

export default CardContact;
