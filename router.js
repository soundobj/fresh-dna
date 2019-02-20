

function router(server) {
console.error("ENTER ROUTER", 0);

	server.get("fv/:id", (req, res) => {
		console.error("dealing with request", req.params);

	})
}

var module = {
	router: router
}

module.exports = module;
