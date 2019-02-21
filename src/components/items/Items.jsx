import React from "react";
import config from "../../config.json";

class Items extends React.Component {
	constructor(props) {
		super(props);
		this.handleGetItem.bind(this);
		this.ref = React.createRef();
	}

	handleGetItem(id) {
		this.props.fetchItem(id.currentTarget.childNodes[0].data);
	}

	render() {
		return (
			<div className="items">
				{ config.items.map(
					(item) => {
						return (
							<a 	key={item}
								id={item}
								className="items__item"
								onClick={(item) => this.handleGetItem(item)}>
								{item}
							</a>
						);
					}
				)}
			</div>
		)
	}
}

export default Items;
