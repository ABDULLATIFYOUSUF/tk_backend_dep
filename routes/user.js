import express from "express";

const router = express.Router();

const users = [
    {
        id: 1,
        name: "Abdul Latif",
        email: "latif@gmail.com"
    },
    {
        id: 2,
        name: "Muhammad Yousuf",
        email: "yousuf@gmail.com"
    }
]


router.get('/', (req, res) => {
    res.status(200).send({users: users})
})

export default router;
