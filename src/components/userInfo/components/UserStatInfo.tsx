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
import { Chart } from 'react-chartjs-2';
import { ArcElement } from 'chart.js';
import { SummonerInfo } from '../../types/summonerInfo';
import { statInfo } from '../userInfo';
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

export const UserStatInfo = (props: { summonerInfo: SummonerInfo }) => {
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
        label: props.summonerInfo.name,
        data: [
          statInfo(props.summonerInfo).win_rate,
          100 - statInfo(props.summonerInfo).win_rate,
        ],
      })),
    };
    setChartData(chartData);
    chart.update();
  }, []);
  return (
    <UserStatInfoWrapper>
      <UserFirstInfo>
        <GraphImg>
          <GraphText>{statInfo(props.summonerInfo).win_rate}%</GraphText>
          <Chart
            ref={chartRef}
            type="doughnut"
            data={chartData}
            options={options}
          />
        </GraphImg>
        <UserInfoText>
          <UserInfoTitle>승률</UserInfoTitle>
          <UserInfoContent>
            {statInfo(props.summonerInfo).win_rate}%
          </UserInfoContent>
          <UserInfoSubTitle>
            {statInfo(props.summonerInfo).win}승{' '}
            {statInfo(props.summonerInfo).losses}패
          </UserInfoSubTitle>
        </UserInfoText>
      </UserFirstInfo>
      <UserInfoText>
        <UserInfoTitle>KDA</UserInfoTitle>
        <UserInfoContent>
          {statInfo(props.summonerInfo).kda_avg}
        </UserInfoContent>
        <UserInfoSubTitle>
          {statInfo(props.summonerInfo).kills_avg}/
          {statInfo(props.summonerInfo).deaths_avg}/
          {statInfo(props.summonerInfo).assists_avg}
        </UserInfoSubTitle>
      </UserInfoText>
      <UserInfoText>
        <UserInfoTitle>선호 포지션</UserInfoTitle>
        <UserInfoContent>
          {statInfo(props.summonerInfo).prefer_position}
        </UserInfoContent>
        <UserInfoSubTitle>
          {statInfo(props.summonerInfo).position_rate}%
        </UserInfoSubTitle>
      </UserInfoText>
    </UserStatInfoWrapper>
  );
};
export default UserStatInfo;
