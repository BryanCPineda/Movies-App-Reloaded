const { moviesDataDone } = require("./moviesDataDone.js")
const { moviesDataFail } = require("./moviesDataFail.js")

$.get("https://students-api.up.railway.app/movies")
	.done(moviesDataDone)
	.fail(moviesDataFail)


