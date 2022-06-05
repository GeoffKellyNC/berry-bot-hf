const express = require('express');
const router = express.Router();

const { moderationBerry } = require('../berry/twitch/moderationBerry');


const startMod = () => {
    moderationBerry();
}


router.post("/", (req, res) => {
    console.log('Req: ', req.body);
    const { data } = req.body;
    if (data === 'startMod'){
        startMod();
    }
    res.sendStatus(200);

})

module.exports = router;