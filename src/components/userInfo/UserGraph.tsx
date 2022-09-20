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
  elements: {
    point: {
      radius: 0, // 점 제거
    },
  },
  scale: {
    ticks: { beginAtZero: true, display: false, max: 10, min: 0, stepSize: 2 }, //maxTicksLimit data 최대값의 2배
    pointLabels: {
      fontSize: 12, // radar 차트 fontsize
      fontColor: '#607D8B',
      // fontStyle: "bold",
      // padding: 100, // x3.5에서 사용가능 지금 2.9.4인데 3위 이상에서는 ie11 작동 안함
    },
  },
  tooltips: {
    enabled: false, // 툴팁 제거
    mode: 'nearest',
    position: 'average',
    intersect: false,
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
      label: '노동욱',
      data: [5, 5, 5, 5, 5, 5],
      backgroundColor: 'rgba(255, 255, 153, 0.2)',
      borderColor: 'rgba(255, 255, 153, 1)',
      borderWidth: 1,
    },
    {
      label: 'Average',
      data: [3, 3, 3, 3, 3, 3],
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
