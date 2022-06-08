import React, { useState } from "react";
import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement);

const Barchart = ({ thick, radius, labels, barData }) => {
  var data = {
    labels: labels,

    datasets: [
      {
        // label: "# of Votes",
        data: barData,
        backgroundColor: "rgba(7, 160, 152, 0.3)",
        borderColor: "rgba(7, 160, 152, 0.3)",
        pointBorderColor: "rgba(7, 160, 152, 0.3)",
        borderWidth: 1,
        borderRadius: radius,
        barThickness: thick,
        // categoryPercentage: 1.0,
        // barPercentage: 0.98,
        barValueSpacing: 1,
      },
    ],
  };

  var options = {
    maintainAspectRatio: false,
    barValueSpacing: 1,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
          drawBorder: false,
          borderWidth: 0,
        },
        ticks: {
          display: false,
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
    <div className=" bg-white-white pt-40">
      <Bar height={150} data={data} options={options} />
    </div>
  );
};

export default Barchart;
