import React from 'react';
import {Doughnut} from "react-chartjs-2";
import {ArcElement, Chart as ChartJS, Legend, Tooltip} from "chart.js";
import {COLORS, DOUGHNUT, doughnutChartData} from "../../config/chartConfig";
import logo from '../../assets/imgs/logo.png'
import {ContextState, ContextStateDispatch} from "../../ContextState";
import {useEffect, useContext, useState} from "react";
import {tabLabels} from "../../config/sharedConfig";
import {LineChart, Line, PieChart,Pie, Cell} from 'recharts';
// const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, {name: 'Page b', uv: 322, pv: 1232, amt: 3212}];

const randomChartDataValue = () =>  Math.floor(Math.random() * (250 - 100 + 1) + 100);

const DoughnutComponent = () => {
    const rootState = useContext(ContextState)
    const [chartData, setChartData] = useState(null)

    useEffect(() => {
        setChartData([    { name: 'Group A', value: randomChartDataValue() },
            { name: 'Group B', value: randomChartDataValue() },
            { name: 'Group C', value: rootState.selectedTab === tabLabels[2] ? 0 : randomChartDataValue() }
        ])
    }, [rootState.selectedTab])

    return (
        <>
            <div className="ckw-doughnut-wrapper">
                <div className="ckw-doughnut">
                    <div className="ckw-doughnut-center-label">
                        {DOUGHNUT[rootState.selectedTab].totalAmount}
                        <span><KwhHelper selectedTab={rootState.selectedTab} /></span>
                    </div>
                    {chartData && <PieChart width={150} height={150} >
                        <Pie
                            data={chartData}
                            cx={70}
                            cy={80}
                            innerRadius={40}
                            outerRadius={60}
                            fill="#8884d8"
                            paddingAngle={3}
                            dataKey="value"
                            border={0}
                        >
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart> }
                </div>
                <ol className="list-group ckw-doughnut-list">
                    <ListComponent selectedTab={rootState.selectedTab} />
                </ol>
                <div className="ckw-logo">
                    <img src={logo} alt="Ckw Logo"/>
                </div>
            </div>

        </>
    )
}

const ListComponent = ({selectedTab}) => {
    const firstListItemView = () => {
        return selectedTab === tabLabels[0] ?
            'Netzbezug - Hochf' :
            selectedTab === tabLabels[1] ?
                'Raumheizung' : 'Kaltwasser'
    }
    const secondListItemView = () => {
        return selectedTab === tabLabels[0] ?
            'Netzbezug - Niedertarif' :
            'Warmwasser'
    }
    const thirdListItemView = () => {
        return selectedTab === tabLabels[0] ?
            'Solarstorm' :
            'Kälte'
    }
    return (
        <>
            <li className="list-group-item f">
                {firstListItemView()} ({DOUGHNUT[selectedTab].nightTariff.percentage}%)
                <span>{DOUGHNUT[selectedTab].nightTariff.value} <KwhHelper selectedTab={selectedTab} /></span>
            </li>
            <li className="list-group-item s">
                {secondListItemView()} ({DOUGHNUT[selectedTab].lowTariff.percentage}%)
                <span>{DOUGHNUT[selectedTab].lowTariff.value} <KwhHelper selectedTab={selectedTab} /></span>
            </li>
            {selectedTab !== tabLabels[2] && <li className="list-group-item t">
                {thirdListItemView()} ({DOUGHNUT[selectedTab].solar.percentage}%)
                <span>{DOUGHNUT[selectedTab].solar.value} <KwhHelper selectedTab={selectedTab} /> </span>
            </li>}
        </>
    )
}

export const KwhHelper = ({selectedTab}) => selectedTab === tabLabels[2] ? <>m<sup>3</sup></> : 'kWh'
export default DoughnutComponent