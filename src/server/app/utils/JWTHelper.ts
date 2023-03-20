import jwt from "jsonwebtoken";

const verifyToken:Function = (req:any, res:any, next:any, secret:string) => {

    let token = req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send({ message: "No token provided!" });
    }

    jwt.verify(token, secret, (err:any, decoded:any) => {

        if (err) {
          return res.status(401).send({ message: "Unauthorized!" });
        }

        req.userId = decoded.id;

        next();

    });

}

const signToken:Function = (payload:any, secret:string, time:number = 86400) => {
    
    return jwt.sign(payload, secret, {
        expiresIn: time
    });

}

export {verifyToken, signToken}
