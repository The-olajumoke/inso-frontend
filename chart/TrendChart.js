import React, { useState } from "react";
import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement);

const TrendChart = ({ thick, radius, labels, barData, color }) => {
  var data = {
    labels: labels,

    datasets: [
      {
        data: barData,
        backgroundColor: color,
        borderColor: color,
        pointBorderColor: color,
        borderWidth: 1,
        // borderRadius: radius,
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
    <div className="p-0 w-full">
      <Bar height={40} data={data} options={options} />
    </div>
  );
};

export default TrendChart;
