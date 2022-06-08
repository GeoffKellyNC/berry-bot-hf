const express = require('express');
const router = express.Router();

const { killBerry } = require('../berry/twitch/killBerry');

const stopBerry = () => {
    killBerry();
  }


router.post("/", (req, res) => {   // Start Berry
    console.log('Req: ', req.body);
    const { data } = req.body;
    if (data === 'stopBot'){
      stopBerry();
    }
    res.sendStatus(200);
  })

  module.exports = router;