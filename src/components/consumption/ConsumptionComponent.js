import React from 'react';
import ConsumptionTabsComponent from "./ConsumptionTabsComponent";
import DoughnutComponent from "../charts/DoughnutComponent";
import BarComponent from "../charts/BarComponent";

const ConsumptionComponent = () => {
    return (
        <>
            <div className="row ckw-consumption-wrapper">
                <div className="col-md-12">
                    <ConsumptionTabsComponent/>
                </div>
                <div className="col-md-4">
                    <DoughnutComponent/>
                </div>
                <div className="col-md-8">
                    <BarComponent/>
                </div>
            </div>
        </>
    )
}

export default ConsumptionComponent;