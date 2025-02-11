import Chart from "react-apexcharts";
function DonutChart() {
  return (
    <div className="w-[500px]">
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
                  show: true, // ❌ Center labels hata diye
                  name: {
                    show: true,
                  },
                  value: {
                    show: false,
                  },
                  total: {
                    show: true,
                    label: "Countries", // ✅ Country yahan set karo
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "#000",
                  },
                },
              },
            },
          },

          stroke: {
            width: 25,
            colors: ["#E0E1E2"],
            lineCap: "square",
          },
          dataLabels: {
            enabled: true,
            formatter: function (val, opts) {
              let country = opts.w.globals.labels[opts.seriesIndex];
              return `${Math.round(val as number)}%\n${country}`; // ✅ Proper formatting
            },
            style: {
              fontSize: "18px", // ✅ Bigger font size
              fontWeight: "bold",
              // colors: ['#000'], // ✅ Black text color
              
            },
            background: {
              enabled: true,
              foreColor: "#000", // ✅ Black text inside box
              borderRadius: 6, // ✅ Rounded box
              padding: 5, // ✅ Extra padding for bigger box
              opacity: 1,
              borderWidth: 2,
              // borderColor: 'white',
              //className: 'apexcharts-datalabel-label' ,
              
              // ✅ Black border
              dropShadow: {
                enabled: true,
                top: 5,
                left: 1,
                blur: 3,
                color: "rgba(0, 0, 0, 0.2)", // ✅ Light shadow effect
              },
            },
          },
          
           
          
          legend: {
            show: false,
            position: "right", // ✅ Labels ko side pe dikhane ke liye
            fontSize: "16px",
            // fontWeight: "bold",
            markers: {
              size: 12, // ✅ Correct property (width/height nahi hoti)
            },
            labels: {
              colors: ["#000"], // ✅ Text color black taake clear dikhe
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
