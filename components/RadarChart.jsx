import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js/auto';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const RadarChart = () => {
  const data = {
    labels: ['Front-end', 'Designing', 'Back-end', 'Database', 'Coding'],
    datasets: [
      {
        data: [80, 90, 70, 55, 65],
        backgroundColor: 'rgba(49, 130, 256, 0.8)',
        borderColor: 'rgba(49, 130, 256, 1)',
        borderWidth: 2.5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allows the chart to stretch within the container
    scales: {
      r: {
        beginAtZero: true,
        angleLines: {
          color: 'rgba(49, 130, 256, 1)',
        },
        ticks: {
          display: false, // Hides ticks
        },
        grid: {
          color: '#3182F8',
        },
        pointLabels: {
          font: {
            family: 'Poppins',
            size: 16,
            weight: 'bold',
          },
          color: 'rgba(49, 130, 256, 1)',
          padding: 10, // Padding around point labels
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Removes unnecessary legend space
      },
    },
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-md h-96">
        <Radar data={data} options={options} />
      </div>
    </div>
  );
};

export default RadarChart;
