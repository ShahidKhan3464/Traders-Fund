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
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const options = {
  responsive: true,

  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [
        1000, 2000, 1000, 500, 1000, 2000, 4000, 5000, 4000, 3000, 2000, 5000,
      ],
      borderColor: "#22C36B",
      backgroundColor: "#22C36B",
    },
  ],
};

function ChallengeChart() {
  return <Line options={options} data={data} />;
}

export default ChallengeChart;
