import { combineReducers } from "redux";

import entityReducer from "./entity/reducer";
import cartReducer from "./cart/reducer"

const rootReducer = combineReducers({
    entity: entityReducer,
    cart: cartReducer,
});

export default rootReducer;