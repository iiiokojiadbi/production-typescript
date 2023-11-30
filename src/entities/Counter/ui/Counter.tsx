import {Button} from "@shared/ui/Button";
import {type FC} from "react";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";

import {counterValueSelect} from "../model/selectors/counterSelect";
import {counterActions} from "../model/slice/counterSlice";

const Counter: FC = () => {
  const {t} = useTranslation("main");
  const counterValue = useSelector(counterValueSelect);

  const dispatch = useDispatch();

  const increment = (): void => {
    dispatch(counterActions.increment());
  };

  const decrement = (): void => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="value-title">{`${t("CounterValue")} = ${String(
        counterValue,
      )}`}</h1>
      <Button data-testid="increment-btn" onClick={increment}>
        {t("Increment")}
      </Button>
      <Button data-testid="decrement-btn" onClick={decrement}>
        {t("Decrement")}
      </Button>
    </div>
  );
};

export default Counter;
