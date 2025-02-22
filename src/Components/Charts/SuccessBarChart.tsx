import Chart from "react-apexcharts";
import { useState } from "react";

function BarChat() {
  const [selectedOption, setSelectedOption] = useState("Week");

  return (
    <div className="bg-white rounded-lg w-full max-w-[400px] laptop:max-w-[600px] tablet:w-[280px]  h-[230px] mb-4 mobile:w-[300px] mobile:h-[200px]">
      <div className="text-end relative z-10 top-[22px] right-5 text-[#454545] tablet:top-[18px] tablet:text-[10px] mobile:top-[15px]">
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="text-sm bg-white cursor-pointer mobile:text-[10px]"
        >
          <option value="Week">Week</option>
          <option value="Month">Month</option>
          <option value="Year">Year</option>
        </select>
      </div>

      <Chart
        type="bar"
        width="100%" 
        height={200}
        series={[
          { data: [60, 95, 72, 45, 80, 80, 80] },
          { data: [45, 82, 40, 40, 55, 55, 55] },
        ]}
        options={{
          chart: {
            toolbar: { show: false },
            background: "transparent",
          },
          title: {
            text: "Renewal Success Rate",
            align: "left",
            style: {
              fontSize: "18px",
              fontFamily: "Lato, serif",
              fontWeight: 700,
            },
            offsetX: 10,
            offsetY: -5,
            margin: 0,
          },
          xaxis: {
            categories: ["Mon", "Tues", "Wednes", "Thurs", "Fri", "Sat", "Sun"],
            labels: {
              style: { colors: "#A0A0A0", fontSize: "10px", fontWeight: 400 },
            },
          },
          yaxis: {
            min: 0,
            max: 100,
            tickAmount: 5,
            axisBorder: { show: true, color: "#EAEDED" },
            labels: {
              style: { colors: "#A0A0A0", fontSize: "10px", fontWeight: 400 },
            },
          },
          grid: {
            show: true,
            borderColor: "#EAEDED",
            strokeDashArray: 0,
            padding: { top: -15, bottom: 0, right: 0 },
          },
          colors: ["#008FFB", "#00E396"],
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: "55%",
              barHeight: "100%",
            },
          },
          stroke: { width: 3, colors: ["transparent"] },
          legend: { show: false },
          dataLabels: { enabled: false },
          responsive: [
            {
              breakpoint: 1320,
              options: {
                chart: { width: 500 , height:"200px" , offsetY:0 ,offsetX:-5 },
                title: {
                  style: { fontSize: "24px" }, 
                  offsetY: -1,
                },
                plotOptions: { bar: { columnWidth: "50%" } },
              },
            },
            {
              breakpoint: 850,
              options: {
                chart: { width: "100%" , height:"220px" , offsetY:0 ,offsetX:-5 },
                title: {
                  style: { fontSize: "14px" }, 
                  offsetY: -1,
                },
                plotOptions: { bar: { columnWidth: "50%" } },
              },
            },
           
            {
              breakpoint: 650,
              options: {
                chart: { width: "100%"  , offsetY:0 ,offsetX:-5 },
                title: {
                  style: { fontSize: "12px" }, 
                  offsetY: -1,
                },
                plotOptions: { bar: { columnWidth: "50%" } },
              },
            },
          ],
        }}
      />
    </div>
  );
}

export default BarChat;
