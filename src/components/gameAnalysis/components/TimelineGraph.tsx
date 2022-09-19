import React from 'react';
import { TimelineWrappper } from '../styles/timelineGraph';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
      position: 'top' as const,
    },
  },
  scales: {
    x: {
      display: false,
      stacked: true,
    },
    y: {
      display: false,
      stacked: true,
    },
  },
};

const labels = [
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
  '0',
];

const data = {
  labels,
  datasets: [
    {
      lineTension: 0.5,
      fill: {
        target: 'origin',
        above: 'rgba(53, 162, 235, 0.5)', // Area will be red above the origin
        below: 'rgba(232, 64, 87, 0.4)', // And blue below the origin
      },
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: -50, max: 50 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
const TimelineGraph = () => {
  return (
    <TimelineWrappper>
      <Line options={options} data={data} height={72} width={328} />
    </TimelineWrappper>
  );
};

export default TimelineGraph;
