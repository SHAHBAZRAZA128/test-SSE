import Chart from "react-apexcharts";

function ReferalBarChart() {
  return (
    <div className="w-[390px] h-[230px] bg-white rounded-lg laptop:w-[500px] tablet:w-[280px] tablet:h-[220px] mobile:w-[300px] mobile:mx-2 mobile:pb-2 mobile:h-[220px]">
      <h1 className="text-[24px] font-semibold pl-6 pt-2 mb-[-25px] tablet:text-[18px] mobile:text-[18px]">Referral</h1>
      
      <Chart
        type="bar"
        width={450}
        height={200}
        
        series={[
          {
            name: "Referrals",
            data: [12345, 9420, 6350, 3720],
          },
        ]}
        options={{
          colors: ["#D80032"], 
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      type: "horizontal", 
      
      gradientToColors: ["#FF7091"], 
      opacityFrom: 1,
      opacityTo: 1, 
      stops: [0, 100], 
    },
  },
  stroke: {
    width: 1, 
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
            labels: { show: false }, 
            axisBorder : {show:false}
          },
          yaxis: {
            
            labels: {
              show: true, 
              offsetX:75,
              offsetY:3,
              align:"left",
              style: {
                fontSize: "14px",
                fontWeight: "normal",
                colors: "White", 
                
              },
            },
          },

          
          chart: {
            toolbar: { show: false },
            offsetX: -70,
          },
          dataLabels: {
            enabled: true,
            
            
            formatter: function (val: number | string): string {
              return val.toString(); 
            },
            offsetX: 380, 
            offsetY:-2,
            style: {
              colors: ["ffff"], 
              fontSize: "18px",
               fontWeight: "500",
            },
            
          },
          
          grid: {
            show: false , 
            borderColor: "#D80032",
            strokeDashArray: 0,
           
            row : {
              colors: ["rgba(255, 112, 145, 0.5)"], 
               
              opacity: 0.3,
            }

          },
          responsive: [
            {
              breakpoint: 1326,
              options: {
                 plotOptions: { bar: { barHeight: "70%",} } ,
                 chart: { width: 550,height: 200 ,offsetY:-3,offsetX:-60 } ,
                 
                 
                },
                
            },
            {
              breakpoint: 650,
              options: {
                 plotOptions: { bar: { barHeight: "50%",} } ,
                 chart: { width: 370,height: 200 ,offsetY:-3,offsetX:-75 } ,
                 
                 
                },
                
            },
            {
              breakpoint: 850,
              options: {
                 plotOptions: { bar: { barHeight: "50%",} } ,
                 chart: { width: 350,height: 200 ,offsetY:-3,offsetX:-75 } ,
                 
                 
                },
                
            },
            
          ],
        }}
      />
    </div>
  );
}

export default ReferalBarChart;
