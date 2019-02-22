import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import config from '../../../config.json';
import fetchMock from 'fetch-mock';
import { fetchItem } from '../items-actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('items-actions', () => {
	afterEach(() => {
		fetchMock.restore();
	});

	it('creates FETCH_ITEM_FULLFILLED when fetching item has been done', () => {
		const url = `${config.resourceUrl}banana.json`;
		fetchMock.getOnce(url, {
			body: { todos: ['do something'] },
			headers: { 'content-type': 'application/json'}
		});

		const expectedActions = [
			{ type: 'FETCH_ITEM_PENDING', payload: {} },
			{ type: 'FETCH_ITEM_FULLFILLED', payload: {todos: ['do something']} },
		];

		const store = mockStore({ todos: [] });
		return store.dispatch(fetchItem('banana')).then(() => {
			expect(store.getActions()).toEqual(expectedActions)
		})
	})
});
