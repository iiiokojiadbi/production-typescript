import {Button} from "@shared/ui/Button";
import {type FC} from "react";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";

import {getCounterValue} from "../model/selectors/getCounterValue/getCounterValue";
import {counterActions} from "../model/slice/counterSlice";

const Counter: FC = () => {
  const {t} = useTranslation("main");
  const counterValue = useSelector(getCounterValue);

  const dispatch = useDispatch();

  const increment = (): void => {
    dispatch(counterActions.increment());
  };

  const decrement = (): void => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1>{`${t("CounterValue")} = ${counterValue}`}</h1>
      <Button onClick={increment}>{t("Increment")}</Button>
      <Button onClick={decrement}>{t("Decrement")}</Button>
    </div>
  );
};

export default Counter;
