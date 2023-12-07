import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area, Customized, LabelList } from 'recharts';

const WeatherChart = ({ data }) => {
    return (
        <div className='scrollable-content hover:cursor-grabbing'>
            <AreaChart width={5000} height={70} data={data}
                margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f2ff00" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#f2ff00" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <Area type="monotone" dataKey="temperature" stroke="#f2ff00" fillOpacity={0.5} fill="url(#colorUv)" label={{ fill: 'white', fontSize: 20, fontWeight: 900 }} />
            </AreaChart>
        </div>
    )
}

export default WeatherChart