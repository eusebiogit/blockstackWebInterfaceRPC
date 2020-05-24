var express = require('express');
var router = express.Router();
var dir="http://";
var port=20443;
var request = require('sync-request');


router.post('/accounts/:server/:principal', function (req, res, next) {
    var principal=req.params["principal"];
    var server=req.params["server"];
    var ans= request('GET', dir+server+":"+port+'/v2/accounts/'+principal);
    res.send(ans.getBody());
    res.send("ssssssssssss");
});

module.exports = router;


