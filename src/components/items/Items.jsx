import React from "react";
import { Button } from 'react-bootstrap';
import config from "../../config.json";

class Items extends React.Component {
	constructor(props) {
		super(props);
		this.handleGetItem.bind(this);
	}

	handleGetItem(e) {
		this.props.fetchItem(e.currentTarget.id);
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
								onClick={(item) => this.handleGetItem(item)}>
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
