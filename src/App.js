import React from 'react';
import './assets/scss/base.scss'
import CoreComponent from "./components/core/CoreComponent";
import {ContextStateProvider} from "./ContextState";


function App() {
  return (
    <div className="App app-wrapper">
        <ContextStateProvider>
            <CoreComponent/>
        </ContextStateProvider>
    </div>
  );
}

export default App;
