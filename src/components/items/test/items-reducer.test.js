import reducer from '../items-reducer.js';

describe('Items Reducer', () => {
	const initialState = {
		items: [],
		fetching: false,
		fetched: false,
		error: null,
	}
	const item = {
		foods: [
			{ food_name: 'banana' }
		]
	}
	it('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual(initialState);
	});

	it('should handle FETCH_ITEM', () => {
		const state = reducer(undefined, {
			type: "FETCH_ITEM_FULLFILLED", payload: item
		});
		const items = state.items;
		items.push = item;
		expect(state).toEqual(
			{...initialState, items: items, fetched: true, fetching: false}
		)
		// deal with duplicates
		const state1 = reducer(state, {
			type: "FETCH_ITEM_FULLFILLED", payload: item
		});
		expect(state1).toEqual(
			{...initialState, items: items, fetched: true, fetching: false}
		)
	});
});
