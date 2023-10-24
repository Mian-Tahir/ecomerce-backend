const jwt =require ("jsonwebtoken");
const bcrypt =require("bcrypt")
const {models}= require('../models')
const config = require('../config');

let tokens =[]


function generateAcessToken (user){ 
    return jwt.sign(user,config.jwt)
}
module.exports = {
    authenticaToken :async (req,res,next)=>{
        const authHeader = req.headers["authorization"];
        console.log(authHeader);

        const token =authHeader &&  authHeader.split(" ")[1];
        if(!token){
            return res.sendStatus(401);
        }
        jwt.verify(token,config.jwt,(err,user)=>{
            if(err){
                return res.sendStatus(403);

            }
            req.user=user;
            next();
        })
    },



    login:async(req,res)=>{
        const {email,password} = req.body;
        let user = await models.user.findOne({
            where:{
                email:email
            }
        })
        console.log((user));
        user= user?.dataValues;
        console.log(user);
        if(user && bcrypt.compareSync(password,user.password)){
            const token = generateAcessToken(user);
            tokens.push(token)
            res.json({token:token})
        }
        else{
            res.send("user dont exit")
        }
    },
};
