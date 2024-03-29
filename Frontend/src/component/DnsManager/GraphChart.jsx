import React from 'react';
import { Bar } from 'react-chartjs-2';
import secureLocalStorage from "react-secure-storage";
import { ToastContainer, toast } from 'react-toastify';

const ChartComponent = ({ data }) => {
  const chartData = {
    labels: ['A', 'CNAME', 'MX', 'TXT'], // Example labels for different record types
    datasets: [
      {
        label: 'Record Type Distribution',
        data: data,
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Record Type Distribution</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default ChartComponent;
