const express = require('express');
const router = express.Router();

const { generalBerry } = require('../berry/twitch/generalBerry');

const startBerry = () => {
    generalBerry();
  }


router.post("/", (req, res) => {   // Start Berry
    console.log('Req: ', req.body);
    const { data } = req.body;
    if (data === 'startBot'){
      startBerry();
    }
    res.send('Bot Started')
    res.sendStatus(200);
  })

  module.exports = router;