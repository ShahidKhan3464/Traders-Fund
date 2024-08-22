import React from 'react';
import {Line} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';
import moment from "moment/moment";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const options = {
    responsive: true,
    interaction: {
        mode: 'index',
        intersect: false,
    },
    stacked: false,
    plugins: {
        title: {
            display: true,
            text: 'Chart.js Line Chart - Multi Axis',
        },
    },
    scales: {
        y: {
            type: 'linear',
            display: true,
            position: 'left',
        },
        y1: {
            type: 'linear',
            display: true,
            position: 'right',
            grid: {
                drawOnChartArea: false,
            },
        },
    },
};

const labels = [
    '12 AM',
    '1 AM',
    '2 AM',
    '3 AM',
    '4 AM',
    '5 AM',
    '6 AM',
    '7 AM',
    '8 AM',
    '9 AM',
    '10 AM',
];

function Chart({charData}) {
    const profitData = charData?.map((trade) => trade.profit > 0 ? trade.profit : 0);
    const lossData = charData?.map((trade) => trade.profit < 0 ? trade.profit : 0);
    const labels = charData?.map((trade) => moment(trade.createdAt).format('hh:mm A'));

    const data = {
        labels,
        datasets: [
            {
                label: 'Profit',
                data: profitData,
                borderColor: '#6EFDEB',
                yAxisID: 'y',
                fill: true,
                backgroundColor: (context) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 200);
                    gradient.addColorStop(0, '#37E89E');
                    gradient.addColorStop(1, 'rgba(0, 0, 0, 0.0001)');
                    return gradient;
                },
            },
            {
                label: 'Loss',
                data: lossData,
                borderColor: '#E84A4D',
                backgroundColor: (context) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 200);
                    gradient.addColorStop(0, '#E84A4D');
                    gradient.addColorStop(1, 'rgba(0, 0, 0, 0.0001)');
                    return gradient;
                },
                yAxisID: 'y1',
                fill: true,
            },
        ],
    };

    return <Line options={options} data={data}/>;
}

export default Chart;
