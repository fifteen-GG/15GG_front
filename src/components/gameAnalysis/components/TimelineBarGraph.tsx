import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { Graph } from '../index.s';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  indexAxis: 'y' as const,
  maintainAspectRatio: false,
  scales: {
    x: {
      display: false,
      stacked: true,
      grid: {
        offset: true,
      },
    },
    y: {
      display: false,
      stacked: true,
    },
  },
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: 'right' as const,
    },
    title: {
      display: false,
      text: 'Chart.js Horizontal Bar Chart',
    },
  },
};

const labels = [''];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [30],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [70],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
const TimelineBarGraph = () => {
  return (
    <Graph>
      <Bar data={data} options={options} width={100} height={20} />
    </Graph>
  );
};

export default TimelineBarGraph;
