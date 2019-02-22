import config from '../../config.json';

export function fetchItem(id) {
	return function (dispatch) {
		dispatch({ type: "FETCH_ITEM_PENDING", payload: {} });
		const url =`${config.resourceUrl}${id}.json`;
		return fetch(url, {
		})
			.then((response) => {
				return response.json();
			})
			.then((json) => {
				dispatch({ type: "FETCH_ITEM_FULLFILLED", payload: json });
			})
			.catch((ex) => {
				dispatch({ type: "FETCH_ITEM_FAILED", payload: ex });
			});
	};
}
