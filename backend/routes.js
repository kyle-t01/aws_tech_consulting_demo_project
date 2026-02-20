const express = require('express');
const os = require('os');

const router = express.Router();

const MELB_TZ = "Australia/Melbourne";
const HOSTNAME = os.hostname()

// routes
// /health check
router.get('/health', (req, res) => {
    res.json({ status: 'ok' });

});

// /time route returns Melbourne Time
router.get('/time', (req, res) => {
    const now = new Date();
    const timeString = now.toISOString()
    res.json({
        timeInfo: {
            hostname: HOSTNAME,
            hostTime: timeString,
            melbTime: now.toLocaleString('en-AU', { timeZone: MELB_TZ })
        }
    })
})


module.exports = router;
