const initialState = {
	items: [],
	fetching: false,
	fetched: false,
	error: null,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case "FETCH_ITEM": {
			return {...state, fetching: true};
		}
		case "FETCH_ITEM_REJECTED": {
			return {...state, fetching: false, error: action.payload};
		}
		case "FETCH_ITEM_FULLFILLED": {
			const itemName = action.payload.foods[0].food_name;
			if (!state.items.find(
				(el) => el.foods[0].food_name === itemName)) {
				console.error("I NEED TO ADD A NEW ITEM", action.payload);
				state.items.push(action.payload);
				return state;
			}
		}
		default: {
			return state;
		}
	}
}
