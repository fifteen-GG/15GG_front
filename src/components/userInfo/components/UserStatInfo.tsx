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
import { SumInfoProps } from '../../../type';
import { Result } from '../styles/gameCard.s';
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
        data: [dataProof(props), 100 - dataProof(props)],
      })),
    };
    setChartData(chartData);
    chart.update();
  }, []);
  return (
    <UserStatInfoWrapper>
      <UserFirstInfo>
        <GraphImg>
          <GraphText>{dataProof(props)}%</GraphText>
          <Chart
            ref={chartRef}
            type="doughnut"
            data={chartData}
            options={options}
          />
        </GraphImg>
        <UserInfoText>
          <UserInfoTitle>승률</UserInfoTitle>
          <UserInfoContent>{dataProof(props)}%</UserInfoContent>
          <UserInfoSubTitle>
            {!props.summonerInfo.solo ? 0 : props.summonerInfo.solo.win}승{' '}
            {!props.summonerInfo.solo ? 0 : props.summonerInfo.solo.losses}패
          </UserInfoSubTitle>
        </UserInfoText>
      </UserFirstInfo>
      {!props.summonerInfo.kda_avg ? (
        <UserInfoText>
          <UserInfoTitle>KDA</UserInfoTitle>
          <UserInfoContent>0</UserInfoContent>
          <UserInfoSubTitle>0/0/0</UserInfoSubTitle>
        </UserInfoText>
      ) : (
        <UserInfoText>
          <UserInfoTitle>KDA</UserInfoTitle>
          <UserInfoContent>{props.summonerInfo.kda_avg}</UserInfoContent>
          <UserInfoSubTitle>
            {props.summonerInfo.kills_avg}/{props.summonerInfo.deaths_avg}/
            {props.summonerInfo.assists_avg}
          </UserInfoSubTitle>
        </UserInfoText>
      )}
      {!props.summonerInfo.prefer_position ? (
        <UserInfoText>
          <UserInfoTitle>선호 포지션</UserInfoTitle>
          <UserInfoContent>없음</UserInfoContent>
          <UserInfoSubTitle>0%</UserInfoSubTitle>
        </UserInfoText>
      ) : (
        <UserInfoText>
          <UserInfoTitle>선호 포지션</UserInfoTitle>
          <UserInfoContent>
            {Object.keys(props.summonerInfo.prefer_position)}
          </UserInfoContent>
          <UserInfoSubTitle>
            {Object.values(props.summonerInfo.prefer_position)}%
          </UserInfoSubTitle>
        </UserInfoText>
      )}
    </UserStatInfoWrapper>
  );
};
export default UserStatInfo;
