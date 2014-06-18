
/*
 * GET home page.
 */

module.exports = function(app, webot){

    app.get('/',  function(req, res) {
        res.render('index', {"title":"demo"});
    });

    app.get('/set', function(req, res) {
        var k = req.query.k;
        var v = req.query.v;

        if (k == undefined || v == undefined || k.length != v.length) {

            return res.render('index', {"title":"save fail", 'error': 'Paramters k or v is not valid!'});
        }

        for (var i = 0; i< k.length;i++) {

            webot.set(k[i], v[i]);

        }

        res.render('index', {"title":"save done"});

    });

};