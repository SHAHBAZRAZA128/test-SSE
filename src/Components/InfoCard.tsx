
import { InfoCardProps } from "../Types/InfoCardTypes";


const InfoCard: React.FC<InfoCardProps> = ({ title,value, percentage, className ,children}) => {
 

  return (
    <div className={`rounded-2xl shadow-lg laptop:w-[160px] mobile:px-2 mobile:py-1 tablet:py-1 p-4 w-[190px] h-[150px] tablet:w-[130px] tablet:mt-8 tablet:h-[120px]  mobile:w-[130px] mobile:h-[120px] ${className}`}>
      <p className="text-2xl font-semibold mobile:text-lg tablet:text-lg">{value}</p>
      <h3 className="text-[#7D7071] text-sm font-bold mobile:text-[10px] tablet:text-[10px]">{title}</h3>
      <div className="flex">
        <p className="text-sm text-black mt-[50px] font-semibold z-10 mobile:text-[10px] tablet:text-[10px]">{percentage}%</p>
        <div className="mt-4">
        {children}
          {/* <Chart
            options={chartOptions}
            series={[{ data: chartData ?? [] }]}
            type={type}
            height={50}
            width={150}
          /> */}
        </div>
      </div>
    </div>
  );
};
export default InfoCard;
