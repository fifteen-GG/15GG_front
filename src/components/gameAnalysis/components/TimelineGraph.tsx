import React, { useRef, useState, useEffect } from 'react';
import type { ChartData, ChartArea } from 'chart.js';
import * as Palette from '../../../assets/colorPalette';
import { TimelineContainer } from '../styles/timelineGraph.s';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
);

const labels = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
];

const options = {
  responsive: true,
  maintainAspectRatio: false,
  events: [],
  plugins: {
    legend: {
      display: false,
      position: 'top' as const,
    },
  },
  scales: {
    x: {
      display: true,
      stacked: true,
      // grid: {
      //   color: (context: any) => {
      //     if (context.tick.value % 1 === 0) {
      //       return '#ffffff';
      //     } else return 'rgba(255, 255, 255, 0.0)';
      //   },
      // },
    },
    y: {
      display: false,
      stacked: true,
      min: -50,
      max: 50,
    },
  },
};
export const data = {
  labels,
  datasets: [
    {
      fill: {
        target: 'origin',
        above: 'rgba(232, 64, 87, 0.4)',
        below: 'rgba(53, 162, 235, 0.5)',
      },
      data: [50, 40, 30, -10, 40, -50, 10, 20, 10, 50, 50, 50, 50],
      // borderColor: createGradient(chart.ctx, chart.chartArea),
      borderColor: 'red',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      lineTension: 0.5,
      pointRadius: 0,
      borderWidth: 1.5,
    },
  ],
};

const createGradient = (
  ctx: CanvasRenderingContext2D,
  area: ChartArea,
  graphType: string,
) => {
  const graphRed = 'rgba(232, 64, 87, 0.4)';
  const graphBlue = 'rgba(53, 162, 235, 0.5)';
  const graphNeutral = `${Palette.GG_GRFTITLE}`;
  let gradient;

  area.top = 8;
  area.bottom = 45;

  const lineGradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);
  const redTeamGradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);
  const blueTeamGradient = ctx.createLinearGradient(
    0,
    area.bottom,
    0,
    area.top,
  );

  lineGradient.addColorStop(0, graphBlue);
  lineGradient.addColorStop(1, graphRed);
  redTeamGradient.addColorStop(0, graphNeutral);
  redTeamGradient.addColorStop(1, graphRed);
  blueTeamGradient.addColorStop(0, graphBlue);
  blueTeamGradient.addColorStop(1, graphNeutral);

  graphType === 'line'
    ? (gradient = lineGradient)
    : graphType === 'red'
    ? (gradient = redTeamGradient)
    : (gradient = blueTeamGradient);

  return gradient;
};

const TimelineGraph = () => {
  const chartRef = useRef<ChartJS>(null);
  const [chartData, setChartData] = useState<ChartData<'line'>>({
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
        borderColor: createGradient(chart.ctx, chart.chartArea, 'line'),
        fill: {
          target: 'origin',
          above: createGradient(chart.ctx, chart.chartArea, 'red'),
          below: createGradient(chart.ctx, chart.chartArea, 'blue'),
        },
      })),
    };

    setChartData(chartData);
  }, []);

  return (
    <TimelineContainer>
      <Chart
        type="line"
        ref={chartRef}
        options={options}
        data={chartData}
        // height={84}
        width={360}
      />
    </TimelineContainer>
  );
};

export default TimelineGraph;
