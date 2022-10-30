import { useRef, useState, useEffect } from 'react';
import type { ChartData, ChartArea, ChartType } from 'chart.js';

import {
  UserStatInfoContainer,
  UserWinRateWrapper,
  GraphText,
  GraphImg,
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
import { formatStatInfo } from '../userInfo';
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
      label: '',
      data: [0, 0],
      backgroundColor: [Palette.GG_DOUGHNUT, Palette.GG_WHITE_100],
      hoverOffset: 1,
      borderWidth: 0,
    },
  ],
};

export interface userStat {
  win_rate: number;
  win: number;
  losses: number;
  kda_avg: number;
  kills_avg: number;
  deaths_avg: number;
  assists_avg: number;
  prefer_position: string[];
  position_rate: number[];
}
interface propsType {
  summonerInfo: SummonerInfo;
}
export const UserStatInfo = (props: propsType) => {
  const [userStat, setUserStat] = useState<userStat>(
    formatStatInfo(props.summonerInfo),
  );
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
        data: [userStat.win_rate, 100 - userStat.win_rate],
      })),
    };
    setChartData(chartData);
    chart.update();
  }, []);
  return (
    <UserStatInfoContainer>
      <UserWinRateWrapper>
        <GraphImg>
          <GraphText>{userStat.win_rate}%</GraphText>
          <Chart
            ref={chartRef}
            type="doughnut"
            data={chartData}
            options={options}
          />
        </GraphImg>
        <UserInfoText>
          <UserInfoTitle>승률</UserInfoTitle>
          <UserInfoContent>{userStat.win_rate}%</UserInfoContent>
          <UserInfoSubTitle>
            {userStat.win}승 {userStat.losses}패
          </UserInfoSubTitle>
        </UserInfoText>
      </UserWinRateWrapper>
      <UserInfoText>
        <UserInfoTitle>KDA</UserInfoTitle>
        <UserInfoContent>{userStat.kda_avg}</UserInfoContent>
        <UserInfoSubTitle>
          {userStat.kills_avg}/{userStat.deaths_avg}/{userStat.assists_avg}
        </UserInfoSubTitle>
      </UserInfoText>
      <UserInfoText>
        <UserInfoTitle>선호 포지션</UserInfoTitle>
        <UserInfoContent>{userStat.prefer_position}</UserInfoContent>
        <UserInfoSubTitle>{userStat.position_rate}%</UserInfoSubTitle>
      </UserInfoText>
    </UserStatInfoContainer>
  );
};
export default UserStatInfo;
