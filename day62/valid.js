const express = require("express");
const{ check, validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();

const user = require("./model/user");
const auth = require("./middleware/auth");

router.post(
    "/signup",
    [
        check("username","please enter a valid username").not().isEmpty(),
        check("email","please enter a valid email").isEmail(),
        check("password","please enter a valid password").isLength({
            min:6,
        }),
    ],
    async( req, res ) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array(),
            });
        }
        const { username, email, password } = req.body;

        try{
            let user = await user.findOne({
                email,
            });
            if(user){
                return res.status(200).json({
                    msg: "user already exist",
                });            
            }
            user = new user({
                username,
                email,
                password,
            });

            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);

            await user.save();

            const payload = {
                user: {
                    id: user.id,
                },
            };
            jwt.sign(
                payload,
                "randomString",
                {
                    expiresIn: 10000,
                },
                (err, token) => {
                    if  (err) throw err;
                    res.status(200).json({
                        token,
                    });
                }
            );
        } catch (err){
            console.error(err.message);
            res.status(500).send("error in saving!");
        }
    }
);

router.post("/login", [
    check("email","please enter a valid email").isEmail(),
    check("password","please enter a valid password").isLength({
        min:6,
    }),
    async (req, res) => {
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array(),
            });
        }
        const { email, password } = req.body;
        try{
            let user = await user.findOne({
                email,
            });
            if(!user)
            return res.status(400).json({
                message: "user does not  exist!",
            });
            const isMatch = await bcrypt.compare(password, user.password);
             
            
            if(!isMatch){
                return res.status(400).json({
                    message: "incorrect password!",
                });
             }
             const payload = {
                user: {
                    id:  user.id,

                },
             };
             jwt.sign(
                payload,
                "randomString",
                {
                    expiresIn: 3600,
                },
                (err, token) => {
                    if (err) throw err;
                    res.status(200).json({
                        token,
                    });
                }
             );
        } catch (e){
            console.error(e);
            res.status(500).json({
                message: "server error!",
            });
        }
    }
]);