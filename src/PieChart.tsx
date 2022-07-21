import React, { useMemo } from 'react';
import { VictoryPie } from 'victory';

/**
 * https://formidable.com/open-source/victory/docs/victory-pie
 */
export default function PieChart() {
  const data = [
    {
      x: 'Whisky',
      y: 50,
    },
    {
      x: 'Tequila',
      y: 18,
    },
    {
      x: 'Rum',
      y: 11,
    },
    {
      x: 'Wine',
      y: 5,
    },
  ];
  const total = useMemo(() => {
    return data.reduce((acc, cur) => cur.y + acc, 0);
  }, [data]);
  return (
    <div className="pie-chart-card">
      <h1>My Collection</h1>
      <VictoryPie
        data={data}
        radius={({ datum }) => {
          const percentage = (datum.y * 100) / total;
          const r = percentage + 70;
          return Math.min(100, r);
        }}
        innerRadius={30}
        labelRadius={({ innerRadius }) => innerRadius + 12}
        style={{ labels: { fill: 'black' } }}
        colorScale={['tomato', 'orange', 'gold', 'cyan', 'navy']}
      />
    </div>
  );
}
