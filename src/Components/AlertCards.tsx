import AlertCardsProps from "../Types/AlertCardTypes";

const AlertCards: React.FC<AlertCardsProps> = ({
  img,
  title,
  description,
  date,
  className,
}) => {
  return (
    <div className="bg-[#FFFFFF] p-4 rounded-lg mb-4 shadow-lg border hover:border-2 hover:border-blue-600">
      <div className="flex space-x-2">
        {img && <img className="w-[14px]" src={img} alt="icon" />}
        <h1 className={`text-[10px] font-bold ${className}`}>{title}</h1>
      </div>
      <div className="flex justify-between">
        <p className={`text-[10px] `}>{description}</p>
        <span className="text-[10px]">{date}</span>
      </div>
    </div>
  );
};
export default AlertCards;
