import { connect } from "react-redux";
import Items from "./Items.jsx";
import { fetchItem } from "./items-actions";

const mapStateToProps = (state) => {
	return {
		items: state.items,
	};
};

const mapDispatchToProps = dispatch => ({
	fetchItem: (id) => { dispatch(fetchItem(id)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Items);
