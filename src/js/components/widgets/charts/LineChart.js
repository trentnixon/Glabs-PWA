import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer} from 'recharts';
const data = [
      {name: 'Card 1', open: 9200, close: 8700, visitors: 10000},
      {name: 'Card 2', open: 9100, close: 8398, visitors: 10000},
      {name: 'Card 3', open: 8400, close: 8000, visitors: 10000},
      {name: 'Card 4', open: 8580, close: 3908, visitors: 10000},
      {name: 'Card 5', open: 6090, close: 4800, visitors: 10000},
      {name: 'Card 6', open: 2390, close: 2000, visitors: 10000},
];


// This Component will Loop through the "Card" object stored in Redux
// And create the base Frame for the Flipcards
export default class DisplayLineChart extends React.Component {

render() {
      console.log(this.props.UI.Themes.Dark.Tooltip)
    return(
  
        <div id="LineChart" >
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={data} margin={{top: 5, right: 10, left: 0, bottom: 5}}>
          
                  <XAxis dataKey="name"/>
                  <YAxis/>
                  <CartesianGrid strokeDasharray="3 3"/>
                  <Tooltip
                    offset={10} 
                    wrapperStyle={this.props.UI.Themes.Dark.Tooltip.wrapper}
                    labelStyle={this.props.UI.Themes.Dark.Tooltip.label}
                    itemStyle={this.props.UI.Themes.Dark.Tooltip.Style}
                  />
                  
                  <Legend 
                    verticalAlign="top" 
                    iconType="circle" 
                    align="right"
                    wrapperStyle={{
                        top: "-5px"
                    }}
                  />
                  
                  <Line type="monotone" dataKey="visitors" stroke="#365CA6" activeDot={{r: 8}}/>
                  <Line type="monotone" dataKey="open" stroke="#269991" activeDot={{r: 8}}/>
                  <Line type="monotone" dataKey="close" stroke="#F98F3E" activeDot={{r: 8}}/>
                 
                  
            
              </LineChart>
          </ResponsiveContainer>
        </div>
    )
  }
}