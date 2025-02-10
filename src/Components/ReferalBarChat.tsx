import Chart from "react-apexcharts";

function ReferalBarChart() {
  return (
    <div className="w-[400px] h-[200px] bg-white rounded-lg">
      <h1 className="text-lg font-semibold pl-6 pt-2 mb-[-25px]">Referral</h1>
      <Chart
        type="bar"
        width={400}
        height={190}
        series={[
          {
            name: "Referrals",
            data: [12345, 9420, 6350, 3720],
          },
        ]}
        options={{
          plotOptions: {
            bar: {
              horizontal: true,
              borderRadius: 4,
              barHeight: "60%",
            },
          },
          xaxis: {
            categories: ["John", "Chrish", "Christoph", "William"],
            labels: { show: false }, // X-axis labels hide kar diye
          },
          yaxis: {
            labels: {
              show: true, // Y-axis par names dikhane ke liye
              style: {
                fontSize: "14px",
                fontWeight: "bold",
                colors: "black", // White color taake background me clear dikhai de
              },
            },
          },

          colors: ["#ff4d97"],
          chart: {
            toolbar: { show: false },
          },
          dataLabels: {
            enabled: true,
            formatter: function (val: number | string): string {
              return val.toString(); // Ensure string output to fix TypeScript error
            },
            offsetX: 300, // Value ko bar ke end par shift karne ke liye
            style: {
              colors: ["#000"], // White text taake clearly dikhe
              fontSize: "14px",
              fontWeight: "bold",
            },
          },
          grid: {
            show: false, // Grid lines remove kar di
          },
        }}
      />
    </div>
  );
}
export default ReferalBarChart;
