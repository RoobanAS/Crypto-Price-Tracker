import React from 'react';
import { LineChart, Line } from 'recharts';

const TrendChart = ({ sparkline }) => {
  const chartData = sparkline.map((val, index) => ({ value: val, index }));
  return (
    <LineChart width={100} height={50} data={chartData}>
      <Line type="monotone" dataKey="value" stroke="#00b386" dot={false} strokeWidth={2} />
    </LineChart>
  );
};

export default TrendChart;
