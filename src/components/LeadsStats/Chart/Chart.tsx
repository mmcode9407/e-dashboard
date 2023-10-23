import React from 'react';
import {
   Area,
   AreaChart,
   CartesianGrid,
   ResponsiveContainer,
   XAxis,
   YAxis,
   Legend,
   Tooltip,
} from 'recharts';
import { CustomizedXAxisTick, CustomizedYAxisTick } from '../CustomizedAxisTick/CustomizedAxisTick';
import { CustomTooltip } from '../CustomTooltip/CustomTooltip';
import { IChartData } from 'utils/getChartData/getChartData';

export const Chart = ({ chartData }: { chartData: IChartData[] }) => {
   return (
      <ResponsiveContainer width="100%" height={300}>
         <AreaChart data={chartData} margin={{ top: 10, bottom: 20 }}>
            <Area
               type="linear"
               dataKey="collected"
               stroke="#B23386"
               fill="#FF90E8"
               fillOpacity={0.3}
               strokeWidth={3}
               activeDot={{ fill: '#B23386', r: 8 }}
               dot={false}
            />
            <XAxis
               dy={100}
               dataKey="name"
               tick={CustomizedXAxisTick}
               tickLine={false}
               padding={{ right: 20, left: 4 }}
               stroke="#484649"
               includeHidden
            />
            <YAxis
               orientation="right"
               tickLine={false}
               axisLine={false}
               ticks={[0, 5, 10, 15, 20]}
               dx={10}
               tick={CustomizedYAxisTick}
            />
            <CartesianGrid vertical={false} />
            <Legend align="left" iconType="plainline" iconSize={30} />
            <Tooltip content={<CustomTooltip />} />
         </AreaChart>
      </ResponsiveContainer>
   );
};
