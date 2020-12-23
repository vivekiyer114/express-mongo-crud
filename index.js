const express = require('express');
// const cookieParser = require('cookie-parser');

const mongoose = require('mongoose');
const bodyParser  = require('body-parser');
// const cookieSession = require('cookie-session');
const keys = require('./config/keys');

mongoose.connect(keys.mongoURI, {
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const app = express();

// app.use(cookieParser());

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    let origin = req.headers.origin;
    let allowedOrigins = keys.allowClient;
    if (allowedOrigins.indexOf(origin) >= 0){
       res.setHeader('Access-Control-Allow-Origin', origin);
    }

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.use(bodyParser.json());
// app.use(
//     cookieSession({
//         maxAge: 30 * 24 * 60 * 60 * 1000,
//         keys: [keys.cookieKey]
//     })
// );

if (process.env.NODE_ENV !== 'process'){
    mongoose.set('debug',true);
}
mongoose.set('useCreateIndex',true);



require('./routes/model')(app);

const PORT = keys.port || 5000;
app.listen(PORT,() => {
    console.log("Listening at 5000!")
});
