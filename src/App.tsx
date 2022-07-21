import * as React from 'react';

import PieChart from './PieChart';
import PriceChart from './PriceChart';

export default function App() {
  return (
    <div className="bg-black">
      <PriceChart />
      <PieChart />
    </div>
  );
}
