import React, {ChangeEvent} from 'react';


type NumberInputPropsType = {
    value: number,
    callback: (value: number) => void,

}

export const NumberInput = ({value, callback}: NumberInputPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => callback(Number(e.currentTarget.value))
    return (
        <div>
            <input type={"number"} value={value} onChange={onChangeHandler}/>
        </div>
    );
}

