import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/Store';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
      <React.StrictMode>
      <Provider store={store}>
         <App />
         <Toaster/>
      </Provider>
     </React.StrictMode>
  </BrowserRouter>
);
