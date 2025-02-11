import Chart from "react-apexcharts";
import { useState } from "react";

function AreaGraph() {
  const [selectedOption, setSelectedOption] = useState("Year");
  return (
    <div className="bg-white rounded-lg w-[400px] h-[200px]">
      <div>
        {/* Title & Dropdown Container */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "0px 20px",
          }}
        >
          <h2
            style={{
              fontSize: "20px",
              fontFamily: "Lato, serif",
              fontWeight: 600,
            }}
          >
            Growth
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
        <div>
          <Chart
            type="area"
            width={400}
            height={170}
            series={[
              {
                name: "Commits",
                data: [7000, 10000, 25000, 50000, 8000, 90000],
              },
            ]}
            options={{
              chart: {
                toolbar: {
                  show: false, // Toolbar ko hide karega
                },
              },
              stroke: {
                curve: "smooth", // Smooth curve
                dashArray: 3,
                width: 1, 
              },
              grid: {
                show: true,

                strokeDashArray: 0, 
                xaxis: {
                  lines: {
                    show: true, 
                  },
                },
                yaxis: {
                  lines: {
                    show: true, 
                  },
                },
              },
              dataLabels: { enabled: false },
              yaxis: {
                min: 0, // Minimum value
                max: 100000, // Maximum value (100k)
                tickAmount: 4, // Ensure 5 ticks (0, 10k, 20k, 50k, 100k)
                labels: {
                  formatter: (value) => {
                    const customLabels: Record<number, string> = {
                      0: "0",
                      10000: "10k",
                      20000: "20k",
                      50000: "50k",
                      100000: "100k",
                    };
                    return customLabels[value] || `${value / 1000}k`; // Default to formatted number
                  },
                },
              },
              fill: {
                type: "gradient",
                gradient: {
                  shadeIntensity: 1,
                  type: "vertical", 
                  gradientToColors: ["#25CD25"], // 👈 End color
                  stops: [0, 40], 
                },
              },
              colors: ["#25CD25"],

              // fill:{opacity:1 , type:'solid'}

              xaxis: {
                tickAmount: 8, 
                categories: [
                  "2016",
                  "2017",
                  "2018",
                  "2019",
                  "2020",
                  "2021",
                  "2022",
                  "2023",
                ], // 
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default AreaGraph;
