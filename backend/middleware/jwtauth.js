const jwt = require('jsonwebtoken');
const User = require("../models/user");

exports.verifyToken = async(req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        res.json({ message: "No token Provided" })
    }
    const token = authHeader.split(' ')[1]
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const exists = await User.findOne({ _id: decoded._id });
        if (exists) {
            // req._id=decoded._id
            next()
        } else {
            res.status(400).json({ message: "Token is Invalid" })
        }

    } catch (error) {
        res.json({ message: 'Not authorized to access this route' })
    }
}