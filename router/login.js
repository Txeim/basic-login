const express=require("express")
const loginportal=express.Router()
const bcrypt=require("bcrypt")
const {collectionLogin}=require("../confi")


loginportal.get("/", (req, res) => {
    res.render("login")
})

loginportal.post("/login-respose", async (req, res) => {
    try {
        const { email, password } = req.body;
        const passwordsafe=await bcrypt.hash(password,10)
        const userlogin = new collectionLogin({
            email,
            password:passwordsafe
        });
        await userlogin.save();
        res.status(201).render("login-response");
    } catch (error) {
        console.log(error);
        res.status(500).send("error login")    }

});

module.exports=loginportal