import React, { useRef, useState, useEffect } from 'react';
import type { ChartData, ChartArea, ChartType } from 'chart.js';

import {
  UserStatInfoWrapper,
  GraphText,
  GraphImg,
  UserFirstInfo,
  UserInfoText,
  UserInfoTitle,
  UserInfoContent,
  UserInfoSubTitle,
} from '../styles/userStatInfo.s';
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
import * as Palette from '../../../assets/colorPalette';
import { Chart, Doughnut } from 'react-chartjs-2';
import { ArcElement } from 'chart.js';
import { SumInfoProps } from '../../type';
// Chart.register(ArcElement);

ChartJS.register(
  ArcElement,
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
  events: [],
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
      data: [30, 70],
      backgroundColor: ['#5d7fde', Palette.GG_WHITE_100],
      hoverOffset: 1,
      borderWidth: 0,
    },
  ],
};

export const UserStatInfo = ({ summonerInfo }: SumInfoProps) => {
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
      ...data, //
      datasets: data.datasets.map(dataset => ({
        ...dataset,
        label: summonerInfo.name,
        data: [summonerInfo.solo.win_rate, 100 - summonerInfo.solo.win_rate],
      })),
    };
    setChartData(chartData);
    chart.update();
  }, []);
  return (
    <UserStatInfoWrapper>
      <UserFirstInfo>
        <GraphImg>
          <GraphText>{summonerInfo.solo.win_rate}%</GraphText>
          <Chart
            ref={chartRef}
            type="doughnut"
            data={chartData}
            options={options}
          />
        </GraphImg>
        <UserInfoText>
          <UserInfoTitle>승률</UserInfoTitle>
          <UserInfoContent>{summonerInfo.solo.win_rate}%</UserInfoContent>
          <UserInfoSubTitle>
            {summonerInfo.solo.win}승 {summonerInfo.solo.losses}패
          </UserInfoSubTitle>
        </UserInfoText>
      </UserFirstInfo>
      <UserInfoText>
        <UserInfoTitle>KDA</UserInfoTitle>
        <UserInfoContent>{summonerInfo.kda_avg}</UserInfoContent>
        <UserInfoSubTitle>
          {summonerInfo.kills_avg}/{summonerInfo.deaths_avg}/
          {summonerInfo.assists_avg}
        </UserInfoSubTitle>
      </UserInfoText>
      <UserInfoText>
        <UserInfoTitle>선호 포지션</UserInfoTitle>

        <UserInfoContent>
          {Object.keys(summonerInfo.prefer_position)}
        </UserInfoContent>
        <UserInfoSubTitle>
          {Object.values(summonerInfo.prefer_position)}%
        </UserInfoSubTitle>
      </UserInfoText>
    </UserStatInfoWrapper>
  );
};
export default UserStatInfo;
