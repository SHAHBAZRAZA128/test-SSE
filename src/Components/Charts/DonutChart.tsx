import Chart from "react-apexcharts";
function DonutChart() {
  return (
    <div className="w-[500px] laptop:w-[500px] mobile:w-[300px] tablet:w-[280px]">
      <Chart
        type="donut"
        width={430}
        height={1520}
        series={[40, 25, 20, 15]}
        options={{
          labels: ["USA", "JAPAN", "Germany", "UK"],
          colors: ["#D80032", "#00D9C0", "#F9DEC9", "#EA9010"],
          plotOptions: {
            pie: {
              expandOnClick: false,
              donut: {
                size: "55%",
                background: "white",
                
                labels: {
                  show: true, 
                  name: {
                    show: true,
                  },
                  
                  value: {
                    show: false,
                  },
                  total: {
                    show: true,
                    label: "Countries", 
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "#000",
                  },
                },
              },
            },
          },
          responsive: [
            {
              breakpoint: 650,
              options: {
                plotOptions: { pie: { donut: { size: "45%" ,labels: {
                  total: {
                    fontSize: "14px", 
                    
                  },
                }, } } },
                 chart: { width: 300} ,
                 stroke: { width: 15 },
                 dataLabels: {
                  style: { fontSize: "14px" }, 
                
                },
            },
            
            },
            {
              breakpoint: 850,
              options: {
                plotOptions: { pie: { donut: { size: "45%" ,labels: {
                  total: {
                    fontSize: "14px", 
                    
                  },
                }, } } },
                 chart: { width: 300} ,
                 stroke: { width: 15 },
                 dataLabels: {
                  style: { fontSize: "14px" }, 
                
                },
            },
            
            },
            {
              breakpoint: 1326,
              options: {
                plotOptions: { pie: { donut: { size: "55%" ,labels: {
                  total: {
                    fontSize: "18px", 
                    
                  },
                }, } } },
                 chart: { width: 500} ,
                 stroke: { width: 25 },
                 dataLabels: {
                  style: { fontSize: "18px" }, 
                
                },
            },
            
            },
          ],
          stroke: {
            width: 25,
            colors: ["#E0E1E2"],
            lineCap: "square",
            

          },
          dataLabels: {
            enabled: true,
            formatter: function (val, opts) {
              let country = opts.w.globals.labels[opts.seriesIndex];
              return `${Math.round(val as number)}%\n\n\n${country}`; 
            },
            style: {
              fontSize: "18px", 
              fontWeight: "bold",
             
              
            },
            background: {
              enabled: true,
              foreColor: "#000", 
              borderRadius: 6, 
              borderWidth: 2,
              
              dropShadow: {
                enabled: true,
                top: 5,
                left: 1,
                blur: 3,
                color: "rgba(0, 0, 0, 0.2)", 
              },
            },
          },
          
           
          
          legend: {
            show: false,
            position: "right", 
            fontSize: "16px",
           
            markers: {
              size: 12, 
            },
            labels: {
              colors: ["#000"], 
              useSeriesColors: false,
            },
            itemMargin: {
              horizontal: 10,
              vertical: 5,
            },
          },
          tooltip: {
            enabled: true,
          },
        }}
      />
    </div>
  );
}
export default DonutChart;
