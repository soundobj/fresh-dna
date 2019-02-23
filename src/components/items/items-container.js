import { connect } from "react-redux";
import Items from "./Items.jsx";
import { fetchItem } from "./items-actions";

const mapStateToProps = (state) => {
	return {
		items: state.items.items,
		fetching: state.items.fetching,
		fetched: state.items.fetched,
	};
};

const mapDispatchToProps = dispatch => ({
	fetchItem: (id) => { dispatch(fetchItem(id)); },
});

// export default connect(mapStateToProps, mapDispatchToProps)(Items);
const ItemsConnect = connect(mapStateToProps, mapDispatchToProps)(Items);

export {
	ItemsConnect,
	mapStateToProps,
	mapDispatchToProps,
}
