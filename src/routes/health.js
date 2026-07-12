const router = require("express").Router();

router.get("/", (req, res) => {
    res.json({
        status: "UP",
        environment: process.env.NODE_ENV,
        timestamp: new Date()
    });
});

module.exports = router;