import { combineReducers } from "redux";
import rootSlice from "./rootSlice";
import { configureStore } from "@reduxjs/toolkit";

const reducer = combineReducers({
    root:  rootSlice,
});

const store = configureStore({
    reducer,
});

export default store;

/*Summary
combineReducers is used to create a single root reducer from potentially multiple slices of state.
rootSlice is a slice of state managed by its own reducer.
configureStore sets up the Redux store with good defaults and applies the combined reducer.
Purpose
This setup allows your application to manage its state in a structured way using Redux. Each slice of state is handled by its own reducer, and the configureStore function from Redux Toolkit makes it easier to configure the store with minimal boilerplate code.*/