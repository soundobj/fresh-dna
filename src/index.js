import React, {Component} from "react";
import { Provider } from "react-redux";
import store from "./store.js"
import ReactDOM from "react-dom";
import "normalize.css";
import "./main.scss";
import Icon from "./components/Icon.jsx";
import Items from "./components/items/items-container.js";

console.log("hello, world");
const App = () => {
	return (
		<Provider store={store}>
			<div className="wrapper">
				<Items />
			</div>
		</Provider>
	)
}
const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<App />, wrapper) : 0;
