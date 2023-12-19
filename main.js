require('dotenv').config() 

const express = require('express')
const app = express();
const PORT = 4000

app.get('/', (req, res)=>{
    res.send('Welcome to homepage')
})

app.get('/login', (req, res)=>{
    res.send('Login Page')
})

app.get('/instagram', (req, res)=>{
    res.send('scripter.shiv')
})

app.listen(process.env.PORT, ()=> {
    console.log(`Webpaeg is deployed on :${PORT}`);
})