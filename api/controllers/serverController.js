'use strict';




exports.get = function(req, res) {    
    let jsonBody = JSON.stringify(req.body);
    console.log(jsonBody)
    res.send("called get with following json: \n" + jsonBody );
};

exports.post = function(req, res) {
    console.log("POST " + JSON.stringify(req.body));
    res.send("called post");
};