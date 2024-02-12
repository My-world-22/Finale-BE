import jwt from "jsonwebtoken"
// import { User } from "../model/userSchemaRegister.js"
import { login } from "../model/userSchemaLogin.js"
const checkToken = async (req, res, next) => {
try {
    const token = req.headers.authorization.split(" ")[1] 
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    req.user = await login.findById(payload.id).select("-password")

     if (!req.user) {
            return res.status(404).json({ message: "User not found" })
        }
        next()   
} catch {
    res.status(401).json({
        error:'invalid user id'
    })
    
}
}
export default checkToken 