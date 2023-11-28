import {type FC} from "react";
import {Provider} from "react-redux";

import {type StateSchema} from "../config/StateSchema";
import createReduxStore from "../config/store";

interface StoreProviderProps {
  initialState?: StateSchema;
}

const StoreProvider: FC<StoreProviderProps> = props => {
  const {children} = props;

  const store = createReduxStore();

  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
