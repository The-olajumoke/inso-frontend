import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);
const LineChart = ({ labels, lineData1, lineData2 }) => {
  var data = {
    labels,
    datasets: [
      {
        data: lineData1,
        backgroundColor: "rgb(229, 229, 229,0.5)",
        borderColor: "rgba(14, 180, 246, 1)",
        lineTension: 0.5,
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 0,
        pointHoverRadius: 0,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 0,
        pointRadius: 0,
        pointHitRadius: 0,
      },
      {
        data: lineData2,
        backgroundColor: "rgb(255, 0, 0)",
        borderColor: "#07A098",
        borderWidth: 2,
        lineTension: 0.5,
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 0,
        pointHoverRadius: 0,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 0,
        pointRadius: 0,
        pointHitRadius: 0,
      },
    ],
  };

  var options = {
    maintainAspectRatio: false,

    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
          drawBorder: false,
          borderWidth: 0,
        },
      },
      x: {
        grid: {
          display: false,
          drawBorder: false,
          borderWidth: 0,
        },
        ticks: {
          display: false,
        },
      },
    },

    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="h-full bg-white-white">
      <div className=" relative">
        <Line height={300} data={data} options={options} />
        {/* <div className="absolute border h-45 bg-white-white bottom-0  left-8 right-0"></div> */}
      </div>
    </div>
  );
};

export default LineChart;
