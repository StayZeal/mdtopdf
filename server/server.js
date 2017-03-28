var express = require('express');
var pdf = require("./markDownPdf");
var fs = require("fs");
var path = require('path');
var readable = require('stream').Readable;
var bodyParser = require('body-parser');
var markdownpdf = require("markdown-pdf")

var app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(express.static(path.resolve("../client/")));
app.use(bodyParser.urlencoded({extended: true})); // support encoded bodies


app.get('/', function (req, res) {
    // res.sendFile(__dirname + "/../index.html")

    res.sendFile(path.resolve( "../client/index.html"));
});

app.get('/edit',function (req,res) {

    res.sendFile(path.resolve( "../client/edit.html"))
});

app.post("/makepdf", function (req, res) {
    var s = new readable();
    console.log("makepdf execute:" + req.body.content);

    s.push(req.body.content);
    s.push(null);
    s.pipe(markdownpdf()).pipe(res);
});

var server = app.listen(80, function () {

    // var host = server.address().address;
    // var port = server.address().port;
    //
    // console.log("应用实例，访问地址为 http://%s:%s", host, port)
    console.log("应用实例，访问地址为 http://localhost:80/");

})
