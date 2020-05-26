var express = require('express');
var router = express.Router();
var dir = "http://";
var port = 20443;
var request = require('sync-request');



//GET /v2/accounts/[Principal]

router.post('/accounts/:server/:principal', function (req, res, next) {
    var principal = req.params["principal"];
    var server = req.params["server"];
    var ruta=dir + server + ":" + port + '/v2/accounts/' + principal;
//    res.send(ruta);
    var ans = request("GET",ruta);
    res.send(ans.getBody());
});


router.post('/map_entry/:server/:stackAddress/:contractName/:mapName', function (req, res, next) {
    var server = req.params["server"];
    var stackAddress = req.params["stackAddress"];
    var contractName = req.params["contractName"];
    var mapName = req.params["mapName"];
    var ans = request('POST', dir + server + ":" + port + '/v2/map_entry/' + stackAddress+"/"+contractName+"/"+mapName,
    {json: {}});
    res.send(ans.getBody());
});

router.post('/fees/transfer/:server', function (req, res, next) {
    var server=req.params["server"];
    var ans = request('GET', dir + server + ":" + port + '/v2/fees/transfer');
    res.send(ans.getBody());
});

router.post('/contracts/interface/:server/:stacksAddress/:contractName', function (req, res, next) {
    var server=req.params["server"];
    var stacksAddress=req.params["stacksAddress"];
    var contractName=req.params["contractName"];
    var ans = request('GET', dir + server + ":" + port + '/v2/contracts/interface/'+'/'+stacksAddress+'/'+contractName);
    res.send(ans.getBody());
});


router.post('/contracts/source/:server/:stacksAddress/:contractName', function (req, res, next) {
    var server=req.params["server"];
    var stacksAddress=req.params["stacksAddress"];
    var contractName=req.params["contractName"];
    var ans = request('GET', dir + server + ":" + port + '/v2/contracts/source/'+'/'+stacksAddress+'/'+contractName);
    res.send(ans.getBody());
});




module.exports = router;


