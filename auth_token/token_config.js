const jwt = require("jsonwebtoken")
const createError = require("http-errors")

module.exports = {
    signAccessToken : async (userID)=>{
        const payload = {
            aud : userID
        }
        const secretKey = "54sdf651asd31"
        const options={
            expiresIn : "40s"
        }
        console.log("token called")
        return jwt.sign(payload,secretKey,options)
    }
}