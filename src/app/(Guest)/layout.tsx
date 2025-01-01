"use client"

import { store } from "@/redux/store";
// import {store }from ".././../redux/store"
import { Provider } from "react-redux"

const layout = ({children}:any) => {
return (
    <Provider store={store}>
        <div> {children}</div>
    </Provider>
);
}

export default layout