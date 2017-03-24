var markdownpdf = require("markdown-pdf");
var fs = require("fs");

// var md = "foo\n===\n* bar\n* baz\n\nLorem ipsum dolor sit"
// var outputPath = "./doc.pdf";

exports.pdf = function (md, outputPath, res) {
    markdownpdf().from.string(md).to(outputPath, function () {

        console.log("Created:", outputPath)
     /*   fs.createReadStream(outputPath)
            .pipe(res);*/

    });
}