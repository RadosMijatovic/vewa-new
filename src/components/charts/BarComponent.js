import React, {useEffect, useContext, useState} from 'react';
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend,
// } from 'chart.js';
// import {Bar} from 'react-chartjs-2';
import {COLORS, labels, labelsMonth, labelsYear} from "../../config/chartConfig";
import {ContextState} from "../../ContextState";
import {dateRangeOptions, tabLabels} from "../../config/sharedConfig";
import {KwhHelper} from "./DoughnutComponent";

// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend
// );

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const dataBar = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const options = {
    plugins: {
        legend: {
            display: false,
        },
    },
    responsive: true,
    scales: {
        x: {
            stacked: true,
            ticks: {color: "white"}
        },
        y: {
            stacked: true,
            ticks: {color: "white"},
            grid: {color: 'rgba(137,137,137,0.5)'}
        },

    },
};

const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [10, 13, 9, 4, 7, 11, 8],
            backgroundColor: COLORS[0],
            barThickness: 8
        },
        {
            label: 'Dataset 2',
            data: [15, 9, 2, 11, 7, 4, 9],
            backgroundColor: COLORS[1],
            barThickness: 8
        },
        {
            label: 'Dataset 3',
            data: [2, 13, 3, 6, 3, 8, 5],
            backgroundColor: COLORS[2],
            barThickness: 8
        },
    ],
};

const BarComponent = () => {
    const rootState = useContext(ContextState)
    const [chartData, setChartData] = useState()


    return (
        <>
            <div className="ckw-bar-wrapper">
                <p>
                <KwhHelper selectedTab={rootState.selectedTab}/>
                </p>
                    <BarChart
                        width={600}
                        height={300}
                        data={dataBar}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                        <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
                        {/*<Bar dataKey="uv" fill="#ffc658" />*/}
                    </BarChart>
            </div>

        </>
    )
}

export default BarComponent