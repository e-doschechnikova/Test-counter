import React, {useState} from 'react';
import s from "./SettingCounter.module.css";
import {Button} from "../Button/Button";
import {NumberInput} from "../Number Input/NumberInput";

const SettingCounter = () => {

    const [maxValue, setMaxValue] = useState<number>(8)
    const [startValue, setStartValue] = useState<number>(2)

    const changeMaxValue = (value: number) => {
        if (value > -1) {
            setMaxValue(value)
        }
    }

    const changeStartValue = (value: number) => {
      setStartValue(value)


    }

// button logic

    const setValue = () => {
    }

    return (
        <div className={s.settingContainer}>
            <div>
                <span>max value:<NumberInput value={maxValue} callback={changeMaxValue}/></span>
                <span className={startValue < 0 ? s.redValue : s.value}>start value:<NumberInput value={startValue} callback={changeStartValue}/></span>
            </div>
            <div>
                <Button name="set" onClick={setValue} isDisabled={false}/>
            </div>
        </div>
    );
};

export default SettingCounter;