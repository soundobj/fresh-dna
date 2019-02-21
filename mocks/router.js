var path = require('path');

function router(server, delay) {
	server.get('/db/*.json', (req, res) => {
		console.error("req", req.originalUrl);
		res.setHeader('Content-Type', 'application/json');
		res.json(require(`..${req.originalUrl}`))
	});

	server.get("/public/*", (req, res) => {
		const publicPath = path.join(__dirname, "..", req.originalUrl);
		console.error("req", req.originalUrl, path.join(__dirname, "..", req.originalUrl));
		setTimeout(() => {
			res.sendFile(publicPath);
		}, delay);
	});
}

module.exports.router = router;
