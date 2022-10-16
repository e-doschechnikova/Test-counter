import React from "react";
import "./App.css";
import s from "./App.module.css";
import Counter from "./components/Counter/Counter";
import SettingCounter from "./components/Counter/SettingCounter";

function App() {

    return (
        <div className={s.app}>
            <SettingCounter/>
            {/*<Counter/>*/}
        </div>
    );
}

export default App;
