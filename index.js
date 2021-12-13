const express = require("express");
const app = express();
var fs = require('fs')
console.time('Starting!')
app.use(express.static("public"));
app.engine('isx', function template(filePath, options, callback) {
  // define the template engine
  fs.readFile(filePath, function (err, content) {
    if (err) return callback(err);
    // this is an extremely simple template engine
    for (let i = 0; i == options.length; i++) {
      var rendered = content
        .toString()
        .replace("#" + options[i] + "#", options[i]);
      return callback(null, rendered);
    }
    //   var rendered = content.toString()
    //     .replace('#title#', options.title)
    //   return callback(null, rendered)
  });
})


app.set("view engine", "isx");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("index.isx");
});

app.get("/~", (req, res) => {
  res.render("creator.isx", {
    title: "Pagina Inicial"
  });
})

app.listen(3000, () => {
  console.log("[Server] Started!");
  console.timeEnd('Starting!')
  console.log('[Server] Running in https://localhost:3000/ !')
});
