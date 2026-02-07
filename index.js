const express = require("express")
const app = express()
const loginportal=require("./router/login")
const signinportel=require("./router/signin")
const{collectionLogin,collectionSignup}=require("./confi")

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs")
app.use(express.static("public"))

app.use("/",loginportal)
app.use("/",signinportel)
app.use("/submit",signinportel)
// app.use("/create-account",signinportel)

const portNumber = 5000;

app.listen(5000, () => {
    console.log(`http://localhost:${portNumber}`)
})