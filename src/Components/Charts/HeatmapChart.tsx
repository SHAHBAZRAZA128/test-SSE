import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const HeatmapChart = () => {
  
  const options: ApexOptions = {
    chart: {
      type: "heatmap",
      background: "#fff",
      toolbar: {
        show: false, 
      },
      offsetX:-5
    },
    xaxis: {
      categories: ["Entity Name", "Entity Type", "Due Date", "1st"],
      position: "top", 
      labels: {
        show: false, 
      },
      
     
    },

    legend: {
      show: false, 
    },
    yaxis: {
      show: false, 
    },
    grid: {
      show: true, 
      borderColor: "red", 
      strokeDashArray: 0, 
      
padding:{
left:10,
right:-5


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
    responsive: [
      {
        breakpoint: 650,
        options: {
          
           chart: { width: 250,height: 150  } ,
           title: { style: { fontSize: "14px" } },
         
           datalabels:{style: { fontSize: "5px" }}
           
          },
      },
      {
        breakpoint: 850,
        options: {
          
          chart: { width: 250,height: 180  } ,
          title: { style: { fontSize: "14px" } },
        
          datalabels:{style: { fontSize: "5px" }}
          
         },
      },

      {
        breakpoint:1326,
        options: {
          
          chart: { width: 420,height: 170  } ,
          title: { style: { fontSize: "14px" } },
        
          datalabels:{style: { fontSize: "5px" }}
          
         },
      },
    ],
    plotOptions: {
      heatmap: {
        shadeIntensity: 0,
        
        useFillColorAsStroke: false, 
        colorScale: {
          ranges: [
            { from: 1, to: 1, color: "#FFFFFF", name: "✔" }, 
            { from: 2, to: 2, color: "#FFFFFF", name: "Annual Report" }, 
            { from: 3, to: 3, color: "#FFFFFF", name: "Annual Report" }, 
            { from: 4, to: 4, color: "#FFFFFF", name: "Annual Report" }, 
          ],
        },
        
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "12px",
        colors: ["#000"], 
        fontWeight: "400",
        
      },
      offsetX:7,
      offsetY:-2,
      formatter: (
        _: number,
        context: { seriesIndex: number; dataPointIndex: number; w: any },
      ) => {
        return context.w.config.series[context.seriesIndex].data[
          context.dataPointIndex
        ].original; 
      },
    },
    
    tooltip: {
      y: {
        
        formatter: (
          _: number,
          {
            seriesIndex,
            dataPointIndex,
            w,
          }: { seriesIndex: number; dataPointIndex: number; w: any },
        ) => {
          return w.config.series[seriesIndex].data[dataPointIndex].original; 
        },
      },
    },
  };

  
  const dataMapping: { [key: string]: number } = {
    "Abdullah anc Co. LLC": 1,
    "Annual Report": 2,
    "6/5/2023": 3,
    "✔": 4,
  };

  
  const rawData = [
    ["Abdullah anc Co. LLC", "Annual Report", "6/5/2023", "✔"],
    ["Abdullah anc Co. LLC", "Annual Report", "6/5/2023", "✔"],
    ["Abdullah anc Co. LLC", "Annual Report", "6/5/2023", "✔"],
    ["Abdullah anc Co. LLC", "Annual Report", "6/5/2023", "✔"],
    ["Abdullah anc Co. LLC", "Annual Report", "6/5/2023", "✔"],
  ];

 
  const series = rawData.map((row, index) => ({
    name: `Entity ${index + 1}`,
    data: row.map((value, colIndex) => ({
      x: ["Entity Name", "Entity Type", "Due Date", "1st"][colIndex], 
      y: dataMapping[value],
      original: value, 
    })),
  }));

  
  return (
    <div className="pl-6 bg-white rounded-lg laptop:w-[500px] tablet:w-[280px] w-[400px] h-[250px]  mobile:w-[300px] mobile:mx-2 mobile:pb-2 mobile:h-[220px]">
      <h2 className="text-lg font-semibold mb-2 pt-2 laptop:text-[24px] laptop:pb-2">Reminder</h2>
      <div className="flex space-x-4">
        <span className="bg-[#14B8A6] text-white rounded px-1 mobile:text-[10px]
         mobile:py-1 tablet:text-[10px]  laptop:ml-2">
          Entity Name
        </span>
        <span className="bg-[#FF0000] text-white  rounded px-1  mobile:text-[10px] mobile:py-1 tablet:text-[10px] ">
          Entity Type
        </span>
        <span className="bg-[#52B6FF] text-white  rounded px-1 mobile:text-[10px] mobile:py-1 tablet:text-[10px] ">Due Date</span>
        <span className="bg-[#14B8A6] text-white  rounded px-1 mobile:text-[10px] mobile:py-1 tablet:text-[10px] laptop:ml-14">1st</span>
      </div>
      <Chart 
        options={options}
        series={series}
        type="heatmap"
        height={180}
        width={360}
        
      />
    </div>
  );
};

export default HeatmapChart;
