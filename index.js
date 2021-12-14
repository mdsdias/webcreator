const express = require("express");
const app = express();
var fs = require("fs");
app.use(express.static("public"));

app.set("views", "./views");

app.set("view engine", "html");

app.get("/", (req, res) => {
	res.render("index.isx");
});

app.get("/~", (req, res) => {
	res.render("creator.isx", {
		title: "Pagina Inicial",
	});
});

app.listen(8080, () => {
	console.log("[Server] Running in https://:::8080/ !");
});
