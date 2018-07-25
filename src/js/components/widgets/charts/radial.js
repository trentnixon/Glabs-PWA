import React from 'react';
import  {Radar, RadarChart,Tooltip, PolarGrid, Legend,ResponsiveContainer, PolarAngleAxis, PolarRadiusAxis} from  'recharts';

const data = [
    { subject: 'Mobile', A: 120, B: 110, fullMark: 150 },
    { subject: 'Tabet', A: 98, B: 130, fullMark: 150 },
    { subject: 'Desktop', A: 86, B: 130, fullMark: 150 },
    { subject: 'TV', A: 10, B: 100, fullMark: 150 },
    { subject: 'Other', A: 15, B: 100, fullMark: 150 },
];

export default class DisplayRadialChart extends React.Component {
render () {
 return (
    <ResponsiveContainer width="100%" height={350}>
        <RadarChart cx="50%" cy="50%" outerRadius={120} data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis/>
            <Radar name="Device Usage" dataKey="A" stroke="#269991" fill="#43B5AD" fillOpacity={0.6}/>
            <Legend 
                    verticalAlign="top" 
                    iconType="circle" 
                    align="right"
                    wrapperStyle={{
                        top: "-5px"
                    }}
                  />
            <Tooltip 
                offset={10} 
                wrapperStyle={this.props.UI.Themes.Dark.Tooltip.wrapper}
                labelStyle={this.props.UI.Themes.Dark.Tooltip.label}
                itemStyle={this.props.UI.Themes.Dark.Tooltip.Style}
            />
        </RadarChart>
   </ResponsiveContainer>
);
}
}