const express = require("express")
const bcrypt=require("bcrypt")
const signinportel = express.Router()
const {collectionSignup}=require("../confi")


signinportel.get("/create-account", (req, res) => {
    res.render("create-account")
})

signinportel.post("/submit/create-respose", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const passwordencrypt=await bcrypt.hash(password,10)
        const usersignup = new collectionSignup({
            name,
            email,
            password:passwordencrypt
        })
        await usersignup.save();
        res.status(201).render("login-response");
    } catch (error) {
        console.log(error);
        res.status(500).send("error login")
    }

});

module.exports = signinportel