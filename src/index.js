// 幫助我們把 React 元件渲染到網頁上的套件
import React from "react";
// 把寫好的 App 元件引入進來
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home/";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
);
