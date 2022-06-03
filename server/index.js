const bodyParser = require('body-parser')
const express = require('express');
const cors = require('cors');

const routerStart = require('./routes/start');
const routerVote = require('./routes/vote');



//? ---- Server Port ----//
const PORT = process.env.PORT || 9001;

const app = express();

app.use(cors());
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

console.log(process.env)

//? ---- Routes ----//
app.use("/start", routerStart);
app.use("/vote", routerVote);



 




app.listen(PORT, () => {
  console.log(`Berry's Backend is running on ${PORT}......`);
});
