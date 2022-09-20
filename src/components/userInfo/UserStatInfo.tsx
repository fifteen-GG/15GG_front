import {
  UserStatInfoWrapper,
  GraphImg,
  UserInfoText,
  UserInfoTitle,
  UserInfoContent,
  UserInfoSubTitle,
} from './styles/userStatInfo.s';
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

const data = {
  labels: ['Blue', 'Red'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [50, 50],
      backgroundColor: ['rgb(54, 162, 235)', 'rgb(255, 99, 132)'],
      hoverOffset: 1,
      borderWidth: 0,
    },
  ],
};

export const UserStatInfo = () => {
  return (
    <UserStatInfoWrapper>
      <GraphImg>
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
