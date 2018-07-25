import React from 'react';
import  { PieChart, Pie,Legend,Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
    {name: 'Read all of the Content', value: 85}, 
    {name: 'Do not read all of the content', value: 15}
];
const COLORS = ['#269991','#FFCDA7','#69d1ca', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;                    
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
 	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x  = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy  + radius * Math.sin(-midAngle * RADIAN);
 
  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
    	{`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default class DisplayPieChart extends React.Component {

	render () {
  	return (
        <ResponsiveContainer width="100%" height={350}>
    	<PieChart onMouseEnter={this.onPieEnter}>
        <Pie
          data={data} 
          dataKey="value"
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={120} 
          fill="#8884d8"
       
        >
        	{
          	data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
          }
        </Pie>
        <Tooltip
                offset={10} 
                wrapperStyle={this.props.UI.Themes.Dark.Tooltip.wrapper}
                labelStyle={this.props.UI.Themes.Dark.Tooltip.label}
                itemStyle={this.props.UI.Themes.Dark.Tooltip.Style}
        />
    
        <Legend 
                verticalAlign="bottom" 
                iconType="circle" 
                align="center"
               
            />
      </PieChart>
      </ResponsiveContainer >
      
    );
  }
}