import React, {Component} from "react";
import { Provider } from "react-redux";
import store from "./store.js"
import ReactDOM from "react-dom";
import "normalize.css";
import "./main.scss";
import Icon from "./components/Icon.jsx";
import { ItemsConnect } from "./components/items/items-container.js";

const App = () => {
	return (
		<Provider store={store}>
			<div className="wrapper">
				<ItemsConnect />
			</div>
		</Provider>
	)
}
const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<App />, wrapper) : 0;
