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
import { SumInfoProps } from '../../../type';
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

export const UserStatInfo = (props: SumInfoProps) => {
  const dataProof = (s: SumInfoProps) => {
    let result = 0;
    if (!s.summonerInfo.solo) result = 0;
    else result = s.summonerInfo.solo.win_rate;
    return result;
  };
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
        data: [statInfo(props).win_rate, 100 - statInfo(props).win_rate],
      })),
    };
    setChartData(chartData);
    chart.update();
  }, []);
  return (
    <UserStatInfoWrapper>
      <UserFirstInfo>
        <GraphImg>
          <GraphText>{statInfo(props).win_rate}%</GraphText>
          <Chart
            ref={chartRef}
            type="doughnut"
            data={chartData}
            options={options}
          />
        </GraphImg>
        <UserInfoText>
          <UserInfoTitle>승률</UserInfoTitle>
          <UserInfoContent>{statInfo(props).win_rate}%</UserInfoContent>
          <UserInfoSubTitle>
            {statInfo(props).win}승 {statInfo(props).losses}패
          </UserInfoSubTitle>
        </UserInfoText>
      </UserFirstInfo>
      <UserInfoText>
        <UserInfoTitle>KDA</UserInfoTitle>
        <UserInfoContent>{statInfo(props).kda_avg}</UserInfoContent>
        <UserInfoSubTitle>
          {statInfo(props).kills_avg}/{statInfo(props).deaths_avg}/
          {statInfo(props).assists_avg}
        </UserInfoSubTitle>
      </UserInfoText>
      <UserInfoText>
        <UserInfoTitle>선호 포지션</UserInfoTitle>
        <UserInfoContent>{statInfo(props).prefer_position}</UserInfoContent>
        <UserInfoSubTitle>{statInfo(props).position_rate}%</UserInfoSubTitle>
      </UserInfoText>
    </UserStatInfoWrapper>
  );
};
export default UserStatInfo;
