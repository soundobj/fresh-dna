const initialState = {
	items: [],
	fetching: false,
	fetched: false,
	error: null,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case "FETCH_ITEM_PENDING": {
			 return {...state, fetching: true, fetched: false};
		}
		case "FETCH_ITEM_REJECTED": {
			return {...state, fetched: false, fetching: false, error: action.payload};
		}
		case "FETCH_ITEM_FULLFILLED": {
			const itemName = action.payload.foods[0].food_name;
			if (!state.items.find(
				(el) => el.foods[0].food_name === itemName)) {
				const items = state.items;
				items.push(action.payload);
				return {
					...state,
					fetched: true,
					fetching: false,
					items: items,
				}
			}
			return {...state, fetched: true, fetching: false};
		}
		default: {
			return state;
		}
	}
}
