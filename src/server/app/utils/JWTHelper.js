const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next, secret) => {

    let token = req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send({ message: "No token provided!" });
    }

    jwt.verify(token, secret, (err, decoded) => {

        if (err) {
          return res.status(401).send({ message: "Unauthorized!" });
        }

        req.userId = decoded.id;

        next();

    });

}

const signToken = (payload, secret, time) => {
    
    return jwt.sign(payload, secret, {
        expiresIn: time ?? 86000
    });

}

module.exports = {verifyToken, signToken}
