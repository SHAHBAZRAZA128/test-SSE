import Chart from "react-apexcharts";
import { useState } from "react";

function BarChat() {
  const [selectedOption, setSelectedOption] = useState("Week");
  return (
    <div className="bg-white rounded-lg w-[400px] h-[200px]">
      <div>
        {/* Title & Dropdown Container */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "10px",
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              fontFamily: "Lato, serif",
              fontWeight: 700,
            }}
          >
            Renewal Success Rate
          </h2>
          {/* Dropdown */}
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            style={{ fontSize: "14px" }}
          >
            <option value="Week"> Week</option>
            <option value="Month"> Month</option>
            <option value="Year"> Year</option>
          </select>
        </div>

        <Chart
          type="bar"
          width={400}
          height={150}
          series={[
            {
              //   name: "Social Media Subscribers",
              data: [60, 95, 72, 45, 80, 80, 80],
            },
            {
              // name: "Subscribers B",
              data: [45, 82, 40, 40, 55, 55, 55],
            },
          ]}
          options={{
            chart: {
              toolbar: {
                show: false, // ✅ Zoom In/Out aur Pan Disable
              },
            },
            title: {
              //   text: "Renewal Succes Rate",
              style: {
                fontSize: "24px",
                fontFamily: "Lato, serif",
                fontWeight: 700,
              },
            },
            // subtitle: {
            //   text: "This is a BarChart",
            //   style: { fontSize: "13px" },
            // },

            xaxis: {
              tickPlacement: "on",
              categories: [
                "Mon",
                "Tues",
                "Wednes",
                "Thurs",
                "Fri",
                "Sat",
                "Sun",
              ],
            },
            yaxis: {
              min: 20,
              max: 100,
              tickAmount: 4,
              axisBorder: {
                show: true, // ✅ Y-axis ki left side line dikhayega
              },
            },
            grid: {
              show: true, // ✅ Grid Lines Enable
              borderColor: "#d3d3d3", // ✅ Grid Line Color
              strokeDashArray: 0, // ✅ Dashed Grid Lines
            },
            colors: ["#008FFB", "#00E396"], // ✅ 2 Bars ke liye different colors
            plotOptions: {
              bar: {
                columnWidth: "40%",
                barHeight: "60%",
                distributed: false,
              },
            },
            legend: {
              show: false,
              position: "right",
            },
            dataLabels: {
              enabled: false,
              
            },
          }}
        />
      </div>
    </div>
  );
}
export default BarChat;
