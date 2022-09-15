import React from 'react';
import DatePickerComponent from "./DatePickerComponent";
import {useContext} from "react";
import {ContextState, ContextStateDispatch} from "../../ContextState";
import {dateRangeOptions} from "../../config/sharedConfig";

const HeaderComponent = () => {
    const rootState = useContext(ContextState);
    const setRootState = useContext(ContextStateDispatch)

    const setSelectedDateRange = dateRange => setRootState({...rootState, selectedDateRange: dateRange})
    const selectDateRangeView = () => dateRangeOptions.map((item, index) => <button type="button" key={index} className={`btn ${rootState.selectedDateRange === item ? 'btn-secondary' : ''}`} onClick={e => setSelectedDateRange(item)}>{item}</button>)

    return (
        <>
            <div className="row ckw-header-wrapper">
                <div className="col-md-6">
                    <h4 className="ckw-header-title">Überlich Verbrauch</h4>
                </div>
                <div className="col-md-6 ckw-header-buttons">
                    {selectDateRangeView()}
                </div>
                {/*<div className="col-md-3 offset-md-9 mt-2">*/}
                {/*    <DatePickerComponent/>*/}
                {/*</div>*/}
            </div>
        </>
    )
}

export default HeaderComponent;