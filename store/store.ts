import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunks from 'redux-thunk'

export const reducer = combineReducers({
})

export const store = createStore(reducer, applyMiddleware(thunks))

export type StoreState = ReturnType<typeof reducer>