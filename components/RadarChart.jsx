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
        label: 'Skill Proficiency',
        data: [80, 90, 70, 55, 75],
        backgroundColor: 'rgba(49, 130, 256, 0.7)', // Light blue background with transparency
        borderColor: 'rgba(49, 130, 256, 1)',        // Solid blue for the border
        borderWidth: 2.5,
      },
    ],
  };

  const options = {
    plugins: {
        legend: {
          display: true,
          labels: {
            font: {
                family: 'poppins',
                size: 16, // Font size for "Skill Proficiency" label
              weight: 'bold', // Bold text
            },
            color: 'rgba(0, 0, 0, 1)', // Label color
            padding: 20, // Padding around the label
          },
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
    <div className="m-5 flex justify-center items-center">
      <div className="w-96 h-96">
        <Radar data={data} options={options} />
      </div>
    </div>
  );
};

export default RadarChart;