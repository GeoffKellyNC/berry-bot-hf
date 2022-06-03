const express = require('express');
const router = express.Router();

const { votingBerry } = require('../berry/twitch/votingBerry');


const startVote = () => {
    votingBerry();
}


router.post("/", (req, res) => {
    console.log('Req: ', req.body);
    const { data } = req.body;
    if (data === 'startVote'){
        startVote();
    }
    res.sendStatus(200);

})

module.exports = router;