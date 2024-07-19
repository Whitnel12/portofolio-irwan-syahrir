const CardProfil = ({ icon, title,bg,iconColor}) => {
  return (
    <a
      href="#"
      className={`flex items-center justify-center w-fit border ${bg} text-xs px-10 py-5 min-w-4 min-h-4 rounded-full`}
    >
      <div className={`${iconColor}`}>{icon}</div>
      <div className={`font-poppins font-medium text-[16px] ${iconColor}`}>{title}</div>
    </a>
  );
};

export default CardProfil;
