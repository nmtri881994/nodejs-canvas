const router = require('express').Router();

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

let initialX = 0;
let initialY = 0;

router.get('/random-data', (req, res) => {
    //get data from database
    initialX += getRandomInt(5);
    initialY += getRandomInt(10);
    res.status(200).json({
        x: initialX,
        y: initialY
    })
});

module.exports = router;