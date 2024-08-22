import React from 'react';
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js';
import {Bar} from 'react-chartjs-2';
import moment from 'moment';
import Zoom from 'chartjs-plugin-zoom';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, Zoom);

function Chart({charData}) {
    const options = {
        plugins: {
            zoom: {
                pan: {
                    enabled: true
                },
                zoom: {
                    enabled: true
                }
            }
        },
        maintainAspectRatio: false, responsive: true, pan: {
            enabled: true, mode: 'x'
        }, zoom: {
            enabled: true, mode: 'xy'
        }, animation: false, throttle: 100, cache: true,
    };
    const labels = charData?.map(trade => moment(trade.createdAt).format('MMM'));
    const profitData = charData?.map(trade => (trade.profit > 0 ? trade.profit : 0));
    const lossData = charData?.map(trade => (trade.profit < 0 ? trade.profit : 0));

    const data = {
        labels, datasets: [{
            label: 'Profit', data: profitData, backgroundColor: '#3CCB7F', borderWidth: 4, borderColor: '#1C1D20'
        }, {
            label: 'Loss', data: lossData, backgroundColor: '#F04438', borderWidth: 4, borderColor: '#1C1D20'
        }]
    };

    return <Bar options={options} data={data}/>;
}

export default Chart;
