const router = require("express").Router();

let users = [
    {
        id: 1,
        name: "Vaishnavi Dhomne",
        email: "vaishnavi@example.com"
    }
];

router.get("/", (req, res) => {
    res.json(users);
});

router.post("/", (req, res) => {

    const user = {
        id: users.length + 1,
        ...req.body,
        date: Date.now()
    };

    users.push(user);

    res.status(201).json(user);
});

module.exports = router;