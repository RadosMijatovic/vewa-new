import React from 'react';
import HeaderComponent from "../header/HeaderComponent";
import ConsumptionComponent from "../consumption/ConsumptionComponent";

const CoreComponent = () => {

    return (
        <>
            <div className="ckw-core-wrapper container-fluid">
                <HeaderComponent />
                <ConsumptionComponent />
            </div>
        </>
    )
}

export default CoreComponent;