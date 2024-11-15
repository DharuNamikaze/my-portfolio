// components/RadarChart.js
import { useEffect, useState } from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js/auto';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const RadarChart = () => {
  const data = {
    labels: ['Front-end', 'Designing', 'Back-end', 'Database', 'Coding'],
    datasets: [
      {
        data: [80, 90, 70, 55, 65],
        backgroundColor: 'rgba(49, 130, 256, 0.8)', // Light blue background with transparency
        borderColor: 'rgba(49, 130, 256, 1)',        // Solid blue for the border
        borderWidth: 2.5,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, // Disables the legend entirely
      },
    },
   scales: {
      r: {
        beginAtZero: true,
        angleLines: { color: 'rgba(49, 130, 256, 1)' },
        ticks: {
          display: false,
        },
        grid: {
          color: '#3182F8', // Light blue grid color
        },
        pointLabels: {
          font: {
            family:'poppins',
            size: 16,
            weight: 'bold',
          },
          color: 'rgba(49, 130, 256, 1)', // Label text color in solid blue
          padding: 20,
        },
      },
    },
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-96 h-96">
        <Radar data={data} options={options} />
      </div>
    </div>
  );
};

export default RadarChart;