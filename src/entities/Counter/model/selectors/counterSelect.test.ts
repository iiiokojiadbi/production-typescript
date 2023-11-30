import {type StateSchema} from "@app/providers/StoreProvider";
import {type DeepPartial} from "@reduxjs/toolkit";

import {counterSelect, counterValueSelect} from "./counterSelect";

describe("counterSelect", () => {
  test("возвращает состояние счетчика", () => {
    const state: DeepPartial<StateSchema> = {
      counter: {value: 10},
    };

    expect(counterSelect(state as StateSchema)).toEqual({value: 10});
  });
});

describe("counterValueSelect", () => {
  test("возвращает значение счетчика", () => {
    const state: DeepPartial<StateSchema> = {
      counter: {value: 10},
    };

    expect(counterValueSelect(state as StateSchema)).toEqual(10);
  });
});
