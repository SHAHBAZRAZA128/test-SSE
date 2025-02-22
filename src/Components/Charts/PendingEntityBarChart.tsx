
import Chart from "react-apexcharts";
function TotalEntityBarChart(){
return(
    <Chart
    type="area"
    height={70}
    width={190}
    series={[
      {
        data: [2,60, 30, 80],
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
        width:4,
        curve:"smooth"
    },
    
    grid:{
        show: true,
                borderColor: '#00D9C01A',
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
    
    colors: ["rgba(0, 217, 192, 0.5)" , "rgba(0, 217, 192, 0.3)"],
    responsive: [
      {
        breakpoint: 650,
        options: { plotOptions: { bar: { height: 30 } } , chart: { width: 130, offsetX:-27 , offsetY:-18 }},
      },
      {
        breakpoint: 850,
        options: { plotOptions: { bar: { height: 30 } } , chart: { width: 120, offsetX:-27 , offsetY:-18 } },
      },
      {
        breakpoint:1350,
        options: { plotOptions: { bar: { height: 30 } } , chart: { width: 150, offsetX:-37 , offsetY:-8 } },
        
      },
    ],
  }}
  
  
 
/>
)
}
export default TotalEntityBarChart