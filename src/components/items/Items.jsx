import React from "react";
import { Button } from 'react-bootstrap';
import config from "../../config.json";

class Items extends React.Component {
	constructor(props) {
		super(props);
		this.handleGetItem.bind(this);
	}

	handleGetItem(item) {
		this.props.fetchItem(item);
	}

	render() {
		return (
			<div className="items">
				{ config.items.map(
					(item) => {
						return (
							<Button
								key={item}
								id={item}
								disabled={this.props.fetching}
								className="items__item"
								onClick={(e) => this.handleGetItem(item, e)}>
									{item}
							</Button>
						);
					}
				)}
			</div>
		)
	}
}

export default Items;
