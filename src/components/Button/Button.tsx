import React from "react";
import s from "./Button.module.css";

type ButtonPropsType = {
  name: string;
  onClick: () => void;
  isDisabled: boolean;
};

export const Button = (props: ButtonPropsType) => {
  return (
    <button
      className={s.btn}
      onClick={props.onClick}
      disabled={props.isDisabled}
    >
      {props.name}
    </button>
  );
};
