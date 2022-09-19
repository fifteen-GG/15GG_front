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
import { Graph } from '../styles/index.s';
import {
  BarWrapper,
  RateWrapper,
  WinningRate,
  GraphTitle,
} from '../styles/timelineBarGraph.s';

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
      max: 100,
      display: false,
      stacked: true,
      grid: {
        offset: true,
      },
    },
    y: {
      max: 100,
      display: false,
      stacked: true,
    },
  },
  elements: {
    bar: {
      borderWidth: 1,
      borderRadius: 2,
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
      data: [80.4],
      borderColor: '#e84057',
      backgroundColor: '#e84057',
      borderWidth: 0,
    },
    {
      label: 'Dataset 2',
      data: [100],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: '#5383e8',
      borderWidth: 0,
    },
  ],
};
const TimelineBarGraph = () => {
  return (
    <Graph>
      <BarWrapper>
        <Bar data={data} options={options} height="5px" />
      </BarWrapper>
      <RateWrapper>
        <WinningRate>80.4%</WinningRate>
        <GraphTitle>승률</GraphTitle>
        <WinningRate>19.6%</WinningRate>
      </RateWrapper>
    </Graph>
  );
};

export default TimelineBarGraph;
