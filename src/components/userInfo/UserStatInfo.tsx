import React, { useRef, useState, useEffect } from 'react';
import type { ChartData, ChartArea, ChartType } from 'chart.js';

import {
  UserStatInfoWrapper,
  GraphText,
  GraphImg,
  UserInfoText,
  UserInfoTitle,
  UserInfoContent,
  UserInfoSubTitle,
} from './styles/userStatInfo.s';
import { faker } from '@faker-js/faker';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import * as Palette from '../../assets/colorPalette';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
import { SumInfoProps } from './type';
Chart.register(ArcElement);

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
);
const labels = ['Blue', 'Red'];

const options = {
  options: {
    maintainAspectRatio: false,
  },
  cutout: 14,
  elements: {
    point: {
      radius: 0, // 점 제거
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

const data = {
  labels,
  datasets: [
    {
      label: '정잭영',
      data: [52, 48],
      backgroundColor: ['#5d7fde', Palette.GG_WHITE_100],
      hoverOffset: 1,
      borderWidth: 0,
    },
  ],
};

export const UserStatInfo = ({ summonerInfo }: SumInfoProps) => {
  const {
    solowinrate,
    solowin,
    sololose,
    avgkda,
    avgkill,
    avgdeath,
    avgassist,
    avgposition,
    positionrate,
  } = summonerInfo;
  const chartRef = useRef<ChartJS>(null);
  const [chartData, setChartData] = useState<ChartData<'doughnut'>>({
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
    <UserStatInfoWrapper>
      <GraphImg>
        <GraphText>{solowinrate}%</GraphText>
        <Doughnut data={data} options={options} />
      </GraphImg>
      <UserInfoText>
        <UserInfoTitle>승률</UserInfoTitle>
        <UserInfoContent>{solowinrate}%</UserInfoContent>
        <UserInfoSubTitle>
          {solowin}승 {sololose}패
        </UserInfoSubTitle>
      </UserInfoText>
      <UserInfoText>
        <UserInfoTitle>KDA</UserInfoTitle>
        <UserInfoContent>{avgkda}</UserInfoContent>
        <UserInfoSubTitle>
          {avgkill}/{avgdeath}/{avgassist}
        </UserInfoSubTitle>
      </UserInfoText>
      <UserInfoText>
        <UserInfoTitle>선호 포지션</UserInfoTitle>
        <UserInfoContent>{avgposition}</UserInfoContent>
        <UserInfoSubTitle>{positionrate}%</UserInfoSubTitle>
      </UserInfoText>
    </UserStatInfoWrapper>
  );
};
