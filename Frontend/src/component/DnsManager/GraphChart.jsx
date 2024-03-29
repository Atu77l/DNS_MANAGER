import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip, Title } from 'chart.js';

ChartJS.register(
LineElement,
CategoryScale,
LinearScale,
PointElement,
Legend,
Tooltip,
Title
);

function LineChart() {
const labels = ['1', '2', '3'];
const [data, setData] = useState({
label: labels,
datasets: [{
  label: 'Data of the selected period',
  data: [3, 6, 9],
  backgroundColor: [
  'green'
],
  borderColor: [
  'grey'
],
  pointBorderColor: [
  'green'
],
  borderWidth: 1,
  fill: true,
  tension: 0.4
}
]

});

const options = {
plugins: {
legend: true
},
scales: {
y: {
min: 0,
max: 16
}
}
};
return <Line data={data} option={options} />;
}
export default LineChart;

//   const chartData = {
//     labels: ['A', 'CNAME', 'MX', 'TXT'], // Example labels for different record types
//     datasets: [
//       {
//         label: 'Record Type Distribution',
//         data: data,
//         backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)'],
//         borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
//         borderWidth: 1,
//       },
//     ],
//   };