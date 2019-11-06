const path = require('path'),
    express = require('express'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    exampleRouter = require('../routes/examples.server.routes'),
    mail = require("../controllers/mail");

module.exports.init = () => {
    /* 
        connect to database
        - reference README for db uri
    */
    mongoose.connect(process.env.DB_URI || require('./config').db.uri, {
        useNewUrlParser: true
    });
    mongoose.set('useCreateIndex', true);
    mongoose.set('useFindAndModify', false);

    // initialize app
    const app = express();

    // enable request logging for development debugging
    app.use(morgan('dev'));

    // body parsing middleware
    app.use(bodyParser.json());

    // add a router
    app.use('/api/example', exampleRouter);

    app.post("/api/send_email", function (req, res) {
        mail.request(req.body.email, req.body.subject, req.body.body);

        //res.set("Content-Type", "application/json");

        //const locals = { userName: req.body.userName };
        //const messageInfo = {
        //    email: req.body.email, fromEmail: "citrusjacob@gmail.com",
        //    fromName: "Star Wars", subject: "Checkout this awesome droids"
        //};
        //mailer.sendOne("droids", messageInfo, locals);

        //res.send('{"message":"Email sent."}');
    });

    if (process.env.NODE_ENV === 'production') {
        // Serve any static files
        app.use(express.static(path.join(__dirname, '../../client/build')));

        // Handle React routing, return all requests to React app
        app.get('*', function(req, res) {
            res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
        });
    }

    return app
}

