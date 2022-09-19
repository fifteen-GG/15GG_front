import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { UserGraphDraw, UserGraphWrapper } from './styles/userGraph.s';
import { nodeModuleNameResolver } from 'typescript';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
);

const options = {
  maintainAspectRatio: false,
  elements: {
    point: {
      radius: 0, // 점 제거
    },
  },
  scales: {
    r: {
      ticks: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      position: 'left' as 'left',
      // position: 'top' as 'top',
    },
  },
};

export const data = {
  labels: ['Kill', 'Assist', '15min', '30min', 'Gold', 'Cs'],
  datasets: [
    {
      label: '정잭영',
      data: [1, 9, 3, 5, 2, 3],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
    {
      label: 'Average',
      data: [5, 5, 5, 5, 5, 5],
      backgroundColor: 'rgba(255, 153, 51, 0.2)',
      borderColor: 'rgba(255, 153, 51, 1)',
      borderWidth: 1,
    },
  ],
};

export function UserGraph() {
  return (
    <UserGraphWrapper>
      <UserGraphDraw>
        <Radar data={data} options={options} />
      </UserGraphDraw>
    </UserGraphWrapper>
  );
}
