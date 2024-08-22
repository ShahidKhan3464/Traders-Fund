import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Income", "Expenses"],
  datasets: [
    {
      label: "Income & Expenses",
      data: [25, 10],
      backgroundColor: ["rgba(39, 187, 101, 0.5)", "rgba(203, 55, 55, 0.2)"],
      borderColor: [],
      borderWidth: 1,
    },
  ],
};

function Chart() {
  return <Pie data={data} />;
}

export default Chart;
