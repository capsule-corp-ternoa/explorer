import { createStore, combineReducers } from "redux";
import { reducer as explorerReducer } from "redux/explorer/reducer";

export const store = createStore(
    combineReducers({
        user: explorerReducer
    })
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch