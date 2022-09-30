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

const labels = ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'];

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
      display: false,
      stacked: true,
    },
    y: {
      display: false,
      stacked: true,
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
      data: labels.map(() => faker.datatype.number({ min: -50, max: 50 })),
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
  const colorEnd = 'rgba(232, 64, 87, 0.4)';

  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);

  gradient.addColorStop(0, colorStart);
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
          height={72}
          width={328}
        />
      </TimelineWrappper>
    </TimelineBorderBox>
  );
};

export default TimelineGraph;
