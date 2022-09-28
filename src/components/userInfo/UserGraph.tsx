import React, { useRef, useState, useEffect } from 'react';
import type { ChartData, ChartArea, ChartType } from 'chart.js';

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Chart, Radar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { SumInfoProps } from './type';

import {
  AverageGraphLabel,
  UserGraphDraw,
  UserGraphLabel,
  UserGraphWrapper,
  UserGraphText,
  UserEx,
  UserText,
  AvgEx,
  AvgText,
} from './styles/userGraph.s';

import * as Palette from '../../assets/colorPalette';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
);

const labels = ['Kill', 'Assist', '15min', '30min', 'Gold', 'CS'];

const options = {
  maintainAspectRatio: false,
  elements: {
    point: {
      radius: 0, // 점 제거
    },
  },
  scales: {
    r: {
      angleLines: {
        color: '#373737',
      },
      backgroundColor: 'rgba(55, 55, 55, 0.5)',
      grid: {
        circular: true,
        color: '#373737',
      },
      ticks: {
        maxTicksLimit: 6,
        display: false,
      },
      pointLabels: {
        font: {
          size: 10,
          lineHeight: '10px',
        },
        color: Palette.GG_WHITE_100,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
      // position: 'left' as 'left',
      // position: 'top' as 'top',
    },
  },
};

export const data = {
  labels,
  datasets: [
    {
      label: '정잭영',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 10 })),
      backgroundColor: 'rgba(59, 68, 78, 0.2)',
      borderColor: '#318eef',
      borderWidth: 1,
    },
    {
      label: 'Average',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 10 })),
      backgroundColor: 'rgba(60, 60, 60, 0.2)',
      borderColor: '#999999',
      borderWidth: 1,
    },
  ],
};

const UserGraph = ({ summonerInfo }: SumInfoProps) => {
  const { userID } = summonerInfo;
  const chartRef = useRef<ChartJS>(null);
  const [chartData, setChartData] = useState<ChartData<'radar'>>({
    datasets: [],
  });

  useEffect(() => {
    const chart = chartRef.current;

    if (!chart) {
      return;
    }
    const chartData = {
      ...data,
      datasets: data.datasets.map(dataset => ({
        ...dataset,
        // label: `${userID}`,
      })),
    };
    setChartData(chartData);
  }, []);

  return (
    <UserGraphWrapper>
      <UserGraphText>
        <UserGraphLabel>
          <UserEx></UserEx>
          <UserText>{userID}</UserText>
        </UserGraphLabel>
        <AverageGraphLabel>
          <AvgEx></AvgEx>
          <AvgText>Average</AvgText>
        </AverageGraphLabel>
      </UserGraphText>
      <UserGraphDraw>
        <Chart type="radar" ref={chartRef} data={chartData} options={options} />
      </UserGraphDraw>
    </UserGraphWrapper>
  );
};

export default UserGraph;
