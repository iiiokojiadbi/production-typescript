import {type StateSchema} from "@app/providers/StoreProvider";
import {createSelector} from "@reduxjs/toolkit";

import {type CounterSchema} from "../types/counterSchema";

export const counterSelect = (state: StateSchema): CounterSchema => state.counter;

export const counterValueSelect = createSelector(counterSelect, counter => counter.value);
