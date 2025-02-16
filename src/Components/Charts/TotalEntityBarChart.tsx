
import Chart from "react-apexcharts";
function TotalEntityBarChart(){
return(
    <Chart
    type="bar"
    height={85}
    width={130}
    series={[
      {
        data: [80, 30, 50],
      },
    ]}
  options={{
    chart: {  
      sparkline: { enabled: true },
      offsetX:11,
      offsetY:-19
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
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.5,
        gradientToColors: ["#FFC97D"], 
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
      colors: ["#EA9010", "rgba(255, 255, 255, 0.6)", "rgba(255, 255, 255, 0.6)"], // First bar Red, others Blue
    },
    colors: ["rgba(255, 255, 255, 0.4)"],
    responsive: [
      {
        breakpoint: 1326,
        options: { plotOptions: { bar: { height: 20 } } , chart: { width: 100, offsetX:6 , offsetY:-19 }},
      },
      {
        breakpoint: 850,
        options: { plotOptions: { bar: { height: 20 } } , chart: { width: 80, offsetX:6 , offsetY:-34 }},
      },
      {
        breakpoint: 650,
        options: { plotOptions: { bar: { height: 50 } } , chart: { width: 80, offsetX:16 , offsetY:-33 }},
      },
      
      
    ],
  }}
  
  
 
/>
)
}
export default TotalEntityBarChart