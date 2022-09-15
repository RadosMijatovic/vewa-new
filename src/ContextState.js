import React, { createContext, useState } from "react";
import {dateRangeOptions, tabLabels} from "./config/sharedConfig";

const ContextState = createContext(undefined);
const ContextStateDispatch = createContext(undefined);

function ContextStateProvider({ children }) {
    const [rootState, setRootState] = useState({
        selectedDateRange: dateRangeOptions[0],
        selectedTab: tabLabels[0]
    });

    return (
        <ContextState.Provider value={rootState}>
            <ContextStateDispatch.Provider value={setRootState}>
                {children}
            </ContextStateDispatch.Provider>
        </ContextState.Provider>
    );
}

export { ContextStateProvider, ContextState, ContextStateDispatch };
