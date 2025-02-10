import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const HeatmapChart = () => {
  const options: ApexOptions = {
    chart: {
      type: "heatmap",
      toolbar: {
        show: false, // 🔥 Hide hamburger menu (toolbar)
      },
    },
    xaxis: {
      categories: ["Entity Name", "Entity Type", "Due Date", "1st"],
      position: "top", // ✅ Move x-axis labels to the top
      labels: {
        show: false, // ❌ Hide x-axis labels
      },
      axisBorder: {
        show: false, // ❌ Hide x-axis border line
      },
      axisTicks: {
        show: false, // ❌ Hide x-axis ticks
      },
    },

    legend: {
      show: false, // ❌ Hide legend completely
    },
    yaxis: {
      show: false, // ✅ Hides Y-axis labels
    },
    grid: {
      show: true, // ✅ Enable grid lines
      borderColor: "#888", // ✅ Black color for row separators

      strokeDashArray: 0, // ✅ Solid black lines

      xaxis: {
        lines: {
          show: false, // ❌ Hide column lines
        },
      },
      yaxis: {
        lines: {
          show: true, // ✅ Show row lines
        },
      },
    },
    plotOptions: {
      heatmap: {
        shadeIntensity: 0,
        colorScale: {
          ranges: [
            { from: 1, to: 1, color: "#FFFFFF", name: "✔" }, // ✅ Green for checkmark
            { from: 2, to: 2, color: "#FFFFFF", name: "Annual Report" }, // ✅ Red for text
            { from: 3, to: 3, color: "#FFFFFF", name: "Annual Report" }, // ✅ Red for text
            { from: 4, to: 4, color: "#FFFFFF", name: "Annual Report" }, // ✅ Red for text
          ],
        },
        // useFillColorAsStroke: true, // ✅ Cells ke border enable karein
        // ✅ Border ki width set karein
        // distributed: true, // ✅ Spread columns evenly
        // useFillColorAsStroke: false, // ❌ No extra borders inside cells
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "12px",
        colors: ["#000"], // ✅ Change text color to BLACK
        fontWeight: "400",
      },
      formatter: (
        _: number,
        context: { seriesIndex: number; dataPointIndex: number; w: any },
      ) => {
        return context.w.config.series[context.seriesIndex].data[
          context.dataPointIndex
        ].original; // ✅ Show Original String
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
          return w.config.series[seriesIndex].data[dataPointIndex].original; // ✅ Show String in Tooltip
        },
      },
    },
  };

  // 🔹 Mapping String Values to Numbers
  const dataMapping: { [key: string]: number } = {
    "Abdullah anc Co. LLC": 1,
    "Annual Report": 2,
    "6/5/2023": 3,
    "✔": 4,
  };

  // 🔹 Raw Table Data
  const rawData = [
    ["Abdullah anc Co. LLC", "Annual Report", "6/5/2023", "✔"],
    ["Abdullah anc Co. LLC", "Annual Report", "6/5/2023", "✔"],
    ["Abdullah anc Co. LLC", "Annual Report", "6/5/2023", "✔"],
    ["Abdullah anc Co. LLC", "Annual Report", "6/5/2023", "✔"],
    ["Abdullah anc Co. LLC", "Annual Report", "6/5/2023", "✔"],
  ];

  // 🔹 Convert Data into ApexChart Format
  const series = rawData.map((row, index) => ({
    name: `Entity ${index + 1}`,
    data: row.map((value, colIndex) => ({
      x: ["Entity Name", "Entity Type", "Due Date", "1st"][colIndex], // ✅ Column Names
      y: dataMapping[value], // ✅ Convert String to Number
      original: value, // ✅ Save Original String for Tooltip
    })),
  }));

  return (
    <div className="pl-6 bg-white rounded-lg shadow-md w-[400px] h-[250px]">
      <h2 className="text-lg font-semibold mb-2">Reminder</h2>
      <div className="flex space-x-4">
        <span className="bg-[#14B8A6] text-white rounded px-1">
          Entity Name
        </span>
        <span className="bg-[#FF0000] text-white  rounded px-1">
          Entity Type
        </span>
        <span className="bg-[#52B6FF] text-white  rounded px-1">Due Date</span>
        <span className="bg-[#14B8A6] text-white  rounded px-1">1st</span>
      </div>
      <Chart
        options={options}
        series={series}
        type="heatmap"
        height={200}
        width={400}
        className="ml-[-10px] "
      />
    </div>
  );
};

export default HeatmapChart;
