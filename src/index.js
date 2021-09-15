import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const image = [
  {
    Gambar:
      "https://cdns.klimg.com/otosia.com/p/bank/2018/08/25/wujud-lebih-agresif--lamborghini-aventador-svj-diproduksi-terbatas-b0a1cc.jpg ",
  }
];

ReactDOM.render(
  <React.StrictMode>
    <App image={image} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
