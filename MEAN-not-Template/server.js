//Setup modules
var flag = false;
var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require("body-parser");
var request = require('request');
var cheerio = require('cheerio');

//Setup app
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "./client/static")));
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    var urls = [
        'http://redeem.giftfolio.com/preview/items.m?SA=53616c7465645f5fe87be9573f0256cbe69859253ca410cd57a71707d6bf7e70d1bc14e612d19e8e',
        'http://redeem.giftfolio.com/preview/items.m?SA=53616c7465645f5f3903a05fbd1a4a0758dc53593db2efe80b630a0d1df205debd6b3044d55640aa&pg=2',
        'http://redeem.giftfolio.com/preview/items.m?SA=53616c7465645f5f558a80dde80b0fcbbd1ad13f21eee59eabc03a1e6a4386959d950c05c39127b2&pg=3',
        'http://redeem.giftfolio.com/preview/items.m?SA=53616c7465645f5f10ec562f748dbeca36c78b1fe7594d38de64073c1f86f7d2b6f757e31e54226e&pg=4',
        'http://redeem.giftfolio.com/preview/items.m?SA=53616c7465645f5f8bc249719b051eff659c5f5d7bdc3fb966a40d7062a3e5c05b4a11febe36378d&pg=5',
        'http://redeem.giftfolio.com/preview/items.m?SA=53616c7465645f5f8a21f457bf33ca4972ae66bb8e33b587c41b4ed8118f2e5fab92c2cbae838a51&pg=6',
        'http://redeem.giftfolio.com/preview/items.m?SA=53616c7465645f5fc5593e3a8c2020fab780cdf0d7fc0fea50f144afb60c7caed5e74f8fa694e171&pg=7',
        'http://redeem.giftfolio.com/preview/items.m?SA=53616c7465645f5fb1506d83d90b3353308b0d1888def8f411aed632aa6f190883b5519740ae3f00&pg=8'
    ];
    var urls2 = [];
    for (var i = 0; i < urls.length; i++){
        var url = urls[0];
        request(url, function(error, response, html){
            if (error) {
                console.log(error);
            } else {
                var $ = cheerio.load(html);
                var anchor = $(".itemThumb a");
                for(var j = 0; j < anchor.length; j++){
                    urls2.push(anchor[j]);
                }
                if (i == urls.length) {
                    flag = true;
                }
            }
        })
    }
    if (flag) {
        res.json(urls2);
    }
})

//Server
app.listen(8000, function() {
    console.log("listening on port 8000");
})
