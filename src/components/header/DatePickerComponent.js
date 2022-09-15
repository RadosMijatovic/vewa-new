import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useState} from "react";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";

const DatePickerComponent = () => {
    const [startDate, setStartDate] = useState(new Date())
    return (
        <>
            <div className="ckw-date-picker-wrapper">
                <button type="button" className="btn -left">
                    <FaChevronLeft />
                </button>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}/>
                <button type="button" className="btn -right">
                    <FaChevronRight />
                </button>
            </div>
        </>
    )
}

export default DatePickerComponent;