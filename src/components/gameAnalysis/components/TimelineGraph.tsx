import React, { useRef, useState, useEffect } from 'react';
import type { ChartData, ChartArea, ChartType } from 'chart.js';

import {
  TimelineBorderBox,
  TimelineWrappper,
  WinningRate,
} from '../styles/timelineGraph.s';
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
import { Chart, Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

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
  '0:00',
  '1:00',
  '2:00',
  '3:00',
  '4:00',
  '5:00',
  '6:00',
  '7:00',
  '8:00',
  '9:00',
  '10:00',
];

const options = {
  responsive: true,
  maintainAspectRatio: false,
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
    },
    y: {
      display: true,
      stacked: true,
      min: -50,
      max: 50,
      grid: {
        color: (context: any) => {
          if (context.tick.value === 0) {
            return '#ffffff';
          } else return 'rgba(255, 255, 255, 0.0)';
        },
      },
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

function createGradient(ctx: CanvasRenderingContext2D, area: ChartArea) {
  const colorStart = 'rgba(53, 162, 235, 0.5)';
  // const colorMid = '#ffffff';
  const colorEnd = 'rgba(232, 64, 87, 0.4)';

  // area.bottom = -50;
  // area.top = 50;
  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);

  gradient.addColorStop(0, colorStart);
  // gradient.addColorStop(0.5, colorMid);
  gradient.addColorStop(1, colorEnd);

  return gradient;
}

function createGradient2(ctx: CanvasRenderingContext2D, area: ChartArea) {
  const colorStart = '#61676b';
  const colorEnd = 'rgba(232, 64, 87, 0.4)';

  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);

  gradient.addColorStop(0, colorStart);
  gradient.addColorStop(1, colorEnd);

  return gradient;
}

function createGradient3(ctx: CanvasRenderingContext2D, area: ChartArea) {
  const colorStart = 'rgba(53, 162, 235, 0.5)';
  const colorEnd = '#61676b';

  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);

  gradient.addColorStop(0, colorStart);
  gradient.addColorStop(1, colorEnd);

  return gradient;
}

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
        borderColor: createGradient(chart.ctx, chart.chartArea),
        fill: {
          target: 'origin',
          // above: 'rgba(232, 64, 87, 0.4)',
          // below: 'rgba(53, 162, 235, 0.5)',
          above: createGradient2(chart.ctx, chart.chartArea),
          below: createGradient3(chart.ctx, chart.chartArea),
        },
      })),
    };

    setChartData(chartData);
  }, []);

  return (
    <TimelineBorderBox>
      <TimelineWrappper>
        <Chart
          type="line"
          ref={chartRef}
          options={options}
          data={chartData}
          height={84}
          width={328}
        />
      </TimelineWrappper>
    </TimelineBorderBox>
  );
};

export default TimelineGraph;
