import React from 'react';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid
} from 'recharts';

const COLORS = ['#153D2B', '#A8B99A', '#92765A', '#252B26', '#D4AF37'];

export const CategoryBreakdownChart = ({ data }) => {
  return (
    <div className="w-full h-72 sm:h-80">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={65}
            outerRadius={95}
            paddingAngle={4}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value) => [`${value} kg CO₂e`, 'Emissions']}
            contentStyle={{
              backgroundColor: '#153D2B',
              borderRadius: '16px',
              border: 'none',
              color: '#F6F4EA',
              fontSize: '12px',
              boxShadow: '0 10px 25px -5px rgba(0,0,0,0.2)'
            }}
            itemStyle={{ color: '#A8B99A' }}
          />
          <Legend
            verticalAlign="bottom"
            height={36}
            iconType="circle"
            formatter={(value) => (
              <span className="text-xs font-medium text-[#252B26]">{value}</span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export const BenchmarkBarChart = ({ userFootprintTonnes }) => {
  const comparisonData = [
    { name: 'Your Footprint', emissions: parseFloat(userFootprintTonnes), fill: '#153D2B' },
    { name: 'National Avg (IN)', emissions: 2.1, fill: '#A8B99A' },
    { name: 'Global Avg', emissions: 4.8, fill: '#92765A' },
    { name: '2050 Net-Zero Target', emissions: 1.5, fill: '#D4AF37' }
  ];

  return (
    <div className="w-full h-72 sm:h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={comparisonData}
          margin={{ top: 20, right: 20, left: -10, bottom: 25 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E3D5" />
          <XAxis
            dataKey="name"
            tick={{ fill: '#5D6B60', fontSize: 11 }}
            axisLine={{ stroke: '#A8B99A' }}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: '#5D6B60', fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            unit="t"
          />
          <Tooltip
            formatter={(val) => [`${val} Tonnes / Year`, 'Carbon Footprint']}
            contentStyle={{
              backgroundColor: '#153D2B',
              borderRadius: '16px',
              border: 'none',
              color: '#F6F4EA',
              fontSize: '12px',
              boxShadow: '0 10px 25px -5px rgba(0,0,0,0.2)'
            }}
          />
          <Bar dataKey="emissions" radius={[8, 8, 0, 0]}>
            {comparisonData.map((entry, index) => (
              <Cell key={`bar-${index}`} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

