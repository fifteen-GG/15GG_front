import {
  UserStatInfoWrapper,
  GraphText,
  GraphImg,
  UserInfoText,
  UserInfoTitle,
  UserInfoContent,
  UserInfoSubTitle,
} from './styles/userStatInfo.s';
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
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
Chart.register(ArcElement);

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
);

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
  labels: ['Blue', 'Red'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [52, 48],
      backgroundColor: ['#5d7fde', '#ffffff'],
      hoverOffset: 1,
      borderWidth: 0,
    },
  ],
};

export const UserStatInfo = () => {
  return (
    <UserStatInfoWrapper>
      <GraphImg>
        <GraphText>52%</GraphText>
        <Doughnut data={data} options={options} />
      </GraphImg>
      <UserInfoText>
        <UserInfoTitle>승률</UserInfoTitle>
        <UserInfoContent>52%</UserInfoContent>
        <UserInfoSubTitle>164승 154패</UserInfoSubTitle>
      </UserInfoText>
      <UserInfoText>
        <UserInfoTitle>KDA</UserInfoTitle>
        <UserInfoContent>2.15</UserInfoContent>
        <UserInfoSubTitle>8.5/7.2/11.4</UserInfoSubTitle>
      </UserInfoText>
      <UserInfoText>
        <UserInfoTitle>선호 포지션</UserInfoTitle>
        <UserInfoContent>ADC</UserInfoContent>
        <UserInfoSubTitle>87%</UserInfoSubTitle>
      </UserInfoText>
    </UserStatInfoWrapper>
  );
};
