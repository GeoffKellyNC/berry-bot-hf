const bodyParser = require('body-parser')
const express = require('express');
const cors = require('cors');

const routerStart = require('./routes/start');
const routerVote = require('./routes/vote');
const routerMod = require('./routes/startMod');



//? ---- Server Port ----//
const PORT = process.env.PORT || 9001;

const app = express();

app.use(cors());
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 


//? ---- Routes ----//
app.use("/start", routerStart);
app.use("/vote", routerVote);
app.use("/mod", routerMod);



 




app.listen(PORT, () => {
  console.log(`Berry's Backend is running on ${PORT}......`);
});
