import React, { useMemo } from 'react';
import { VictoryChart, VictoryAxis, VictoryGroup, VictoryArea } from 'victory';

export const formatHour = (date: Date) => {
  let hours = date.getHours();
  let ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
  return hours + ampm;
};

export default function PieChart() {
  const dates = [
    new Date('2022-07-21T09:00:00.00Z'), // 4am
    new Date('2022-07-21T13:00:00.00Z'), // 8am
    new Date('2022-07-21T17:00:00.00Z'), // 12pm
    new Date('2022-07-21T21:00:00.00Z'), // 4pm
    new Date('2022-07-22T01:00:00.000Z'), // 8pm
    new Date('2022-07-22T05:00:00.000Z'), // 12am
  ];
  const collectionData = [
    {
      x: new Date('2022-07-21T09:00:00.00Z'),
      y: 20000,
    },
    {
      x: new Date('2022-07-21T13:00:00.00Z'),
      y: 180000,
    },
    {
      x: new Date('2022-07-21T17:00:00.00Z'),
      y: 120000,
    },
    {
      x: new Date('2022-07-21T21:00:00.00Z'),
      y: 200000,
    },
    {
      x: new Date('2022-07-21T23:00:00.000Z'),
      y: 160000,
    },
    {
      x: new Date('2022-07-22T05:00:00.000Z'),
      y: 100000,
    },
  ];
  const bourbonData = [
    {
      x: new Date('2022-07-21T09:00:00.00Z'),
      y: 22000,
    },
    {
      x: new Date('2022-07-21T11:00:00.00Z'),
      y: 130000,
    },
    {
      x: new Date('2022-07-21T13:00:00.00Z'),
      y: 210000,
    },
    {
      x: new Date('2022-07-21T17:00:00.00Z'),
      y: 130000,
    },
    {
      x: new Date('2022-07-21T21:00:00.00Z'),
      y: 220000,
    },
    {
      x: new Date('2022-07-21T23:00:00.000Z'),
      y: 180000,
    },
    {
      x: new Date('2022-07-22T05:00:00.000Z'),
      y: 120000,
    },
  ];
  const data = [
    { label: 'Collection', color: 'cyan', data: collectionData },
    { label: 'Bourbon', color: 'magenta', data: bourbonData },
  ];
  return (
    <div className="price-chart-card">
      <h1>Prices</h1>
      <VictoryChart width={500} height={400} scale={{ x: 'time' }}>
        <VictoryAxis tickValues={dates} tickFormat={(d) => formatHour(d)} />
        {dates.map((d, i) => {
          return (
            <VictoryAxis
              dependentAxis
              key={i}
              axisValue={d}
              style={{ tickLabels: { fill: 'none' } }}
            />
          );
        })}
        <VictoryGroup
          style={{
            data: { strokeWidth: 3, fillOpacity: 0.2 },
          }}
        >
          {data.map(({ color, data }) => (
            <VictoryArea
              key={color}
              style={{
                data: { fill: color, stroke: color },
              }}
              data={data}
            />
          ))}
        </VictoryGroup>
      </VictoryChart>
      {data.map(({ color, label }) => (
        <a key={color}>
          <svg
            className="h-8 w-8 text-red-500"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              color,
            }}
          >
            {' '}
            <path stroke="none" d="M0 0h24v24H0z" />
            <circle cx="12" cy="12" r="4" />
          </svg>
          {label}
        </a>
      ))}
    </div>
  );
}
