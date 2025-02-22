import Chart from "react-apexcharts";
import { useState } from "react";

function AreaGraph() {
  const [selectedOption, setSelectedOption] = useState("Year");
  
  return (
    <div className="bg-white rounded-lg laptop:w-[500px] w-[400px] tablet:w-[280px] tablet:h-[220px]  mobile:w-[300px] mobile:mx-2 mobile:pb-2 mobile:h-[220px] h-[230px]">
      <div className="text-end relative z-10 top-[22px] laptop:top-2 right-5 text-[#454545] mobile:top-[5px] tablet:top-1">

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
            height={200}
            series={[
              {
                data: [15000, 25000, 65000, 85000, 18000, 30000,80000,100000],
              },
            ]}
            
            options={{
              chart: {
                toolbar: {
                  show: false, 
                },
                offsetX:-5
                
              },
              title: {
                text: "Growth",
                align:"left",
              style: {
                fontSize: "24px",
                fontFamily: "Lato, serif",
                fontWeight: 700,
              
              },
              offsetX:10,
              offsetY:-5,
              margin:0
            },
              stroke: {
                curve: "straight", 
                dashArray: 2,
                width: 1, 
              },
              grid: {
                show: true,
                borderColor: '#EAEDED',
                strokeDashArray: 0, 
                padding:{
                  top:-15,
                  bottom:0,
                  right:0
                },
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
                min: 0, 
                max: 100000, 
                tickAmount:4,
                axisBorder: {
                  show: true, 
                  color:"#EAEDED"
    
                },
                labels: {
                  formatter: (value) => {
                    const labelMap = new Map<number, string>([
                      [0, "0"],
                      [25000, "10k"],
                      [50000, "20k"],
                      [75000, "50k"],
                      [100000, "100k"],
                    ]);
                  
                    
                    return labelMap.get(value) + "";
                  
                     
                  },
                  style: {
                    colors: "#A0A0A0", 
                    fontSize: "10px",  
                    fontWeight: 400,       
                },
                },
              },
              fill: {
                type: "gradient", 
                gradient: {
                  shadeIntensity: 0.4, 
                  opacityFrom: 0.5, 
                  opacityTo: 0, 
                  stops: [0, 100], 
                  colorStops: [
                    {
                      offset: 0,
                      color: "#25CD25", 
                      opacity: 0.3,
                    },
                    {
                      offset: 100,
                      color: "#25CD25", 
                      opacity: 0,
                    },
                  ],
                },
              },
              colors: ["#25CD25"], 
             
              xaxis: {
                
                categories: [ "2016","2017","2018", "2019", "2020","2021", "2022", "2023"],
                labels: {
                  style: {
                    colors: "#A0A0A0", 
                    fontSize: "10px",  
                    fontWeight: 400,   
                  },
                },
              },
              responsive: [
                {
                  breakpoint: 1326,
                  options: { plotOptions: { bar: { height: 200 } } , chart: { width: 500 ,offsetY:-15 } ,title: { style: { fontSize: "24px" } },},
                },
                {
                  breakpoint: 850,
                  options: { plotOptions: { bar: { height: 200 } } , chart: { width: 280 ,offsetY:-15 } ,title: { style: { fontSize: "18px" } },},
                },
                {
                  breakpoint: 650,
                  options: { plotOptions: { bar: { height: 200 } } , chart: { width: 300 ,offsetY:-15 } ,title: { style: { fontSize: "18px" } },},
                },
                
              ],
            }}
            
          />
        </div>
      </div>
   
  );
}

export default AreaGraph;
