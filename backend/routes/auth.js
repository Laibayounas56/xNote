const express = require('express');
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const JWT_SECRET = "ima barbie gurl"; 
var fetchuser=require('../middleware/fetchuser')
// route 1: Create a user - POST /api/auth/createUser
router.post('/createUser',
    [
        body('name', 'Enter a valid name').isLength({ min: 3 }),
        body('email', 'Enter a valid email').isEmail(),
        body('password', 'Password must be at least 5 characters').isLength({ min: 5 }),
    ],
    async (req, res) => {
        let success=false;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({success,errors: errors.array() });
        }

        try {
            let user = await User.findOne({ success,email: req.body.email });
            if (user) {
                return res.status(400).json({ error: "User already exists" });
            }

            const salt = await bcrypt.genSalt(10);
            const secPass = await bcrypt.hash(req.body.password, salt);

            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: secPass
            });

            const data = {
                user: {
                    id: user.id
                }
            };
            const authorizeToken = jwt.sign(data, JWT_SECRET);
            success=true;
            res.json({success, authorizeToken });

        } catch (err) {
            console.error(err.message);
            res.status(500).send("Internal Server Error");
        }
    }
);

// Route 2: Login a user - POST /api/auth/login
let success=false;
router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            success=false;
            return res.status(400).json({success, error: "Invalid credentials" });
        }

        const data = {
            user: {
                id: user.id
            }
        };
        const authorizeToken = jwt.sign(data, JWT_SECRET);
        success=true;
        res.json({success, authorizeToken });

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Internal Server Error");
    }
});

// route 3: Get loggedIn users details - POST /api/auth/getUser
router.post('/getUser', fetchuser, async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Internal Server Error");
    }
});
module.exports = router;
