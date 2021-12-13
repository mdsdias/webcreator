const app = require("express")();
const fs = require("fs");
export function template(filePath, options, callback) {
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
}
