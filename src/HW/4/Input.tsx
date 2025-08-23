import {ChangeEvent} from "react";
import {log} from "node:util";


type InputPropsType = {
  currentText: string // НУЖНО ПРОТИПИЗИРОВАТЬ
  setCurrentText: string // НУЖНО ПРОТИПИЗИРОВАТЬ
};

export const Input = (props: InputPropsType) => {

  const onChangeHandler = () => {
    return (console.log('нажат инпут'))
  };

  return (
    <input id={'hw04-input'} type="text" value={props.currentText} onChange={onChangeHandler}
    />
  );
};
