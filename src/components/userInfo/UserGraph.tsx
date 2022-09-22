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
  BackgroundCircle,
} from './styles/userGraph.s';
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
          size: '10px',
          lineHeight: '10px',
        },
        color: '#FCFCFC',
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
  labels: ['Kill', 'Assist', '15min', '30min', 'Gold', 'Cs'],
  datasets: [
    {
      label: '정잭영',
      data: [1, 9, 3, 5, 2, 3],
      backgroundColor: 'rgba(59, 68, 78, 0.2)',
      borderColor: '#318eef',
      borderWidth: 1,
    },
    {
      label: 'Average',
      data: [5, 5, 5, 5, 5, 5],
      backgroundColor: 'rgba(60, 60, 60, 0.2)',
      borderColor: '#999999',
      borderWidth: 1,
    },
  ],
};

export function UserGraph() {
  return (
    <UserGraphWrapper>
      <UserGraphText>
        <UserGraphLabel>
          <UserEx></UserEx>
          <UserText>정재경</UserText>
        </UserGraphLabel>
        <AverageGraphLabel>
          <AvgEx></AvgEx>
          <AvgText>Average</AvgText>
        </AverageGraphLabel>
      </UserGraphText>
      <BackgroundCircle></BackgroundCircle>
      <UserGraphDraw>
        <Radar
          data={data}
          options={options}
          style={
            {
              // position: 'absolute',
              // backgroundColor: '#373737',
              // borderRadius: '10px',
            }
          }
        />
      </UserGraphDraw>
    </UserGraphWrapper>
  );
}
