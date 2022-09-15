import React from 'react';
import {tabLabels} from "../../config/sharedConfig";
import {useContext} from "react";
import {ContextState, ContextStateDispatch} from "../../ContextState";

const ConsumptionTabsComponent = () => {
    const rootState = useContext(ContextState)
    const setRootState = useContext(ContextStateDispatch)

    const tabsView = () => tabLabels.map((item, index) => <li key={index} className="nav-item" onClick={e => setRootState({...rootState, selectedTab: item})}>
        <p className={`nav-link ${rootState.selectedTab === item ? 'active' : ''}`} aria-current="page">{item}</p>

    </li>)

    return (
        <>
            <ul className="nav nav-tabs ckw-consumption-tabs-wrapper">
                {tabsView()}
            </ul>
        </>
    )
}

export default ConsumptionTabsComponent;