import { mapDispatchToProps } from '../items-container';
import { mapStateToProps } from '../items-container';

describe('items container', () => {
	it('Items mapStateToProps', () => {
		const state = {
			items: ['foo', 'bar'],
			fetching: true,
			fetched: false,
		};
		const stateItems = { items: state };
		expect(mapStateToProps(stateItems)).toEqual(state);
	});
	it('Items mapDispatchToProps', function() {
		jest.unmock('../items-actions');
		const module = require('../items-actions');
		module.fetchItem = jest.fn();
		const dispatch = jest.fn();
		mapDispatchToProps(dispatch).fetchItem('foo');
		expect(dispatch).toBeCalled();
		expect(module.fetchItem).toBeCalledWith('foo');
	});
});
