import {type CounterSchema} from "../types/counterSchema";
import {counterActions, counterReducer} from "./counterSlice";

describe("counterSlice", () => {
  test("уменьшение счетчика с 10 до 9", () => {
    const state: CounterSchema = {value: 10};

    expect(counterReducer(state, counterActions.decrement())).toEqual({value: 9});
  });

  test("увеличение счетчика с 10 до 11", () => {
    const state: CounterSchema = {value: 10};

    expect(counterReducer(state, counterActions.increment())).toEqual({value: 11});
  });

  test("без начального состояния", () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({value: 1});
  });
});
