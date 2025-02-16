
import Chart from "react-apexcharts";
function InActiveEntityBarChart(){
return(
    <Chart
    type="bar"
    height={150}
    width={130}
    series={[
      {
        data: [40, 30, 70],
      },
    ]}
  options={{
    chart: {  
      sparkline: { enabled: true },
      offsetX:28,
      offsetY:-84
    },
    yaxis: {
      min: 0,
      max: 100,
      tickAmount: 5,
      
      labels: {
        show:false,
        
      },
    },
    legend:{
      show:false
    },
    plotOptions:{
      bar:{
        distributed: true,  
     borderRadius:2,
      }
    },
    fill: {
      
      colors: ["#CCEBFF", "#D0ECFF", "#4AB7FF"], 
    },
    colors: ["rgba(255, 255, 255, 0.4)"],
    responsive: [
      {
        breakpoint: 650,
        options: { plotOptions: { bar: { height: 30 } } , chart: { width: 80, offsetX:28 , offsetY:-98 }},
      },
      {
        breakpoint: 850,
        options: { plotOptions: { bar: { height: "80%" } } ,chart: { width: 80, offsetX:26 , offsetY:-98 }},
      },
      {
        breakpoint:1350,
        options: { plotOptions: { bar: { height: "80%" } } ,chart: { width: 100, offsetX:26 , offsetY:-83 }},
      },
    ],
  }}
  
  
 
/>
)
}
export default InActiveEntityBarChart