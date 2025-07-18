var jwt = require('jsonwebtoken');
const JWT_SECRET = "ima barbie gurl";

const fetchuser = (req, res, next) => {
    //get user and get id
    const token = req.header('authorize-token')
    if (!token) {
        res.status(401).send({ error: "please authenticate using a valid token" })
    }
    try {
        const data = jwt.verify(token, JWT_SECRET)
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({ error: "please authenticate using a valid token" })

    }

}
module.exports = fetchuser