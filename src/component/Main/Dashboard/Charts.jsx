/* eslint-disable react/prop-types */
import {useRef } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Sample data for demonstration - replace with your API data
const sampleData = {
  weekly: [
    { name: "Week 1", totalEarnings: 2500 },
    { name: "Week 2", totalEarnings: 3200 },
    { name: "Week 3", totalEarnings: 2800 },
    { name: "Week 4", totalEarnings: 3500 },
  ],
  monthly: [
    { name: "Jan", totalEarnings: 520 },
    { name: "Feb", totalEarnings: 600 },
    { name: "Mar", totalEarnings: 700 },
    { name: "Apr", totalEarnings: 800 },
    { name: "May", totalEarnings: 900 },
    { name: "Jun", totalEarnings: 1000 },
    { name: "Jul", totalEarnings: 180 },
    { name: "Aug", totalEarnings: 250 },
    { name: "Sep", totalEarnings: 380 },
    { name: "Oct", totalEarnings: 580 },
    { name: "Nov", totalEarnings: 200 },
    { name: "Dec", totalEarnings: 450 },
  ],
  yearly: [
    { name: "2020", totalEarnings: 180000 },
    { name: "2021", totalEarnings: 195000 },
    { name: "2022", totalEarnings: 210000 },
    { name: "2023", totalEarnings: 235000 },
    { name: "2024", totalEarnings: 260000 },
  ],
};

const CustomTooltip = ({ active, payload, label, period }) => {
  if (active && payload && payload.length) {
    const periodLabel =
      period === "weekly" ? "Week" : period === "monthly" ? "Month" : "Year";
    return (
      <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-md">
        <p className="font-semibold text-gray-800">{`${periodLabel}: ${label}`}</p>
        <p className="text-gray-600">{`Total Income: €${payload[0].value.toLocaleString()}`}</p>
      </div>
    );
  }
  return null;
};

const IncomeGraphChart = () => {
  const chartRef = useRef(null);
  // Using sample data for demonstration
  const graphChartData = sampleData['monthly'] || [];

  const renderChart = () => {
    const commonProps = {
      data: graphChartData,
      margin: {
        top: 50,
        right: 20,
        left: 0,
        bottom: 10,
      },
    };

    return (
      <AreaChart {...commonProps}>
        <defs>
          <linearGradient id="colorEarnings" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis
          dataKey="name"
          stroke="#6b7280"
          axisLine={false}
          tickLine={false}
        />
        <YAxis stroke="#6b7280" axisLine={false} tickLine={false} />
        <Tooltip content={<CustomTooltip period={"monthly"} />} />
        <Area
          type="monotone"
          dataKey="totalEarnings"
          stroke="#3b82f6"
          strokeWidth={3}
          fill="url(#colorEarnings)"
          fillOpacity={0.6}
        />
      </AreaChart>
    );
  };

  return (
    <div className="w-full space-y-2">
      <h1 className="text-xl md:text-2xl text-gray-600  notranslate">
        Revenue
      </h1>
      <div className="bg-white rounded-xl shadow-lg">
        {/* Chart Container with ref for export */}
        <div ref={chartRef} className="w-full">
          <ResponsiveContainer width="100%" height={600}>
            {renderChart()}
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default IncomeGraphChart;
