import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {Provider} from "react-redux";
import store from "./store/store";
import {BrowserRouter} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import {persistStore} from "redux-persist";
import {PersistGate} from "redux-persist/integration/react";

let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}/>
      <BrowserRouter>
        <ScrollToTop/>
        <App/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
