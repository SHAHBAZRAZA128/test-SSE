import Chart from "react-apexcharts";

function ReferalBarChart() {
  return (
    <div className="w-[400px] h-[200px] bg-white rounded-lg">
      <h1 className="text-lg font-semibold pl-6 pt-2 mb-[-25px]">Referral</h1>
      
      <Chart
        type="bar"
        width={450}
        height={190}
        
        series={[
          {
            name: "Referrals",
            data: [12345, 9420, 6350, 3720],
          },
        ]}
        options={{
          colors: ["#D80032"], // Base color
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      type: "horizontal", // "horizontal" ya "vertical" adjust karein
      // shadeIntensity: 0.5,
      gradientToColors: ["#FF7091"], // End color for gradient
      opacityFrom: 1, // Gradient start opacity
      opacityTo: 1, // Gradient end opacity
      stops: [0, 100], // Gradient direction (0% se 100% tak)
    },
  },
  stroke: {
    width: 1, // Border thickness
    colors: ["#D80032"], 
  },
          plotOptions: {
            bar: {
              horizontal: true,
              borderRadius: 4,
              barHeight: "70%",
              
            },
          },
          xaxis: {
            categories: ["John", "Chrish", "Christoph", "William"],
            labels: { show: false }, // X-axis labels hide kar diye
            axisBorder : {show:false}
          },
          yaxis: {
            labels: {
              show: true, // Y-axis par names dikhane ke liye
              offsetX:75,
              offsetY:3,
              align:"left",
              style: {
                fontSize: "14px",
                fontWeight: "normal",
                colors: "White", // White color taake background me clear dikhai de
                
              },
            },
          },

          // colors: ["#ff4d97"],
          chart: {
            toolbar: { show: false },
            offsetX: -60,
          },
          dataLabels: {
            enabled: true,
            
            // textAnchor: 'start',
            formatter: function (val: number | string): string {
              return val.toString(); // Ensure string output to fix TypeScript error
            },
            offsetX: 300, 
            offsetY:-2,// Value ko bar ke end par shift karne ke liye
            style: {
              colors: ["ffff"], // White text taake clearly dikhe
              fontSize: "18px",
               fontWeight: "500",
            },
            // background: {
            //   enabled: true, // Background enable karein
            //   foreColor: "#000", // Text color
            //   padding: 6, // Padding bar ke andar adjust karne ke liye
            //   borderRadius: 4, // Rounded corners
            //   opacity: 1, // Fully visible
            //   dropShadow: {
            //     enabled: false, // Agar shadow nahi chahiye to disable
            //   },
            // },
          },
          grid: {
            show: false , // Grid lines remove kar di
            borderColor: "#D80032",
            strokeDashArray: 0,
            padding: {
              // top: 20, // Top padding badhaye
              // bottom: 20, // Bottom padding bhi adjust kare
            },
            row : {
              colors: ["rgba(255, 112, 145, 0.5)"], 
               
              opacity: 0.3,
            }
          },
        }}
      />
    </div>
  );
}

export default ReferalBarChart;
