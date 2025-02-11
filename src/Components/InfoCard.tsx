import Chart from "react-apexcharts";
import { InfoCardProps } from "../Types/InfoCardTypes";
import { ApexOptions } from "apexcharts";

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  value,
  percentage,
  chartData,
  color,
  type,
  className,
  
}) => {
  const chartOptions: ApexOptions = {
    chart: {
      type: "line",
      sparkline: { enabled: true },
    },
    stroke: {
      width: 2,
      curve: "smooth",
    },
    colors: [color],
    tooltip: { enabled: false },
  };

  return (
    <div className={`rounded-2xl shadow-lg p-4 w-[190px] h-[150px] ${className}`}>
      <p className="text-2xl font-semibold">{value}</p>
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <div className="flex">
        <p className="text-sm text-black mt-12 font-bold">{percentage}%</p>
        <div className="mt-4">
          <Chart
            options={chartOptions}
            series={[{ data: chartData ?? [] }]}
            type={type}
            height={50}
            width={150}
          />
        </div>
      </div>
    </div>
  );
};
export default InfoCard;
