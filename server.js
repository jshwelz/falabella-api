const express = require('express');



var bodyParser = require('body-parser');



var app = express();

app.get('/', (req, res) => {
    res.send('Hello express');
});



var routesPantallas = require('./routes/pantallas-route.js');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/pantallas", routesPantallas);



//var models = require("./models/db");
//require('./config/passport')(passport, models.credentials);


//Sync Database
app.listen(3000);
