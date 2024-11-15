// components/RadarChart.js
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
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 1.5,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        beginAtZero: true,
        ticks: {
          display: false, // Hides the tick labels
        },
        pointLabels: {
          font: {
            family: "'Arial', sans-serif", // You can change the font family
            size: 16, // Increase font size
            weight: 'bold', // Make labels bold
          },
          color: '#4A90E2', // Change label text color
          padding: 20, // Increase padding between labels and center
        },
      },
    },
  };

  return <Radar data={data} options={options} />;
};

export default RadarChart;
