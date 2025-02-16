
import Chart from "react-apexcharts";
function ActiveEntityBarChart(){
return(
    <Chart
    type="area"
    height={70}
    width={190}
    series={[
      {
        data: [50,70, 30,60, 20,30],
      },
    ]}
  options={{
    chart: {  
      sparkline: { enabled: true },
      offsetX:-45,
      offsetY:-9
    },
    yaxis: {
      min: 0,
      max: 100,
      tickAmount: 3,
      
      labels: {
        show:false,
        
      },
    },
    legend:{
      show:false
    },
    stroke:{
        width:3,
        curve:"smooth"
    },
    
    grid:{
        show: true,
                borderColor: '#EA90101A',
                strokeDashArray: 0, 
            
                xaxis: {
                  lines: {
                    show: false, 
                  },
                  
                },
                yaxis: {
                  lines: {
                    show: true, 
                  },
                  
                },
       
    },
      colors: ["#EA9010"],
    responsive: [
      {
        breakpoint: 650,
        options: { plotOptions: { bar: { height: 30 } } , chart: { width: 130, offsetX:-28 , offsetY:-15 }},
      },
      {
        breakpoint: 850,
        options: { plotOptions: { bar: { height: "80%" } } ,  chart: { width: 130, offsetX:-35 , offsetY:-15 } },
      },
      {
        breakpoint:1326,
        options: { plotOptions: { bar: { height: 30 } } , chart: { width: 160, offsetX:-45 , offsetY:-8 } },
        
      },
    ],
  }}
  
  
 
/>
)
}
export default ActiveEntityBarChart