import {counterReducer} from "@entities/Counter";
import {configureStore} from "@reduxjs/toolkit";

import {type StateSchema} from "./StateSchema";

function createReduxStore(initialState?: StateSchema): ReturnType<typeof configureStore> {
  return configureStore({
    reducer: {
      counter: counterReducer,
    },
    devTools: _IS_DEV_,
    preloadedState: initialState,
  });
}

export default createReduxStore;
