const express = require('express');
const app = express();
require('dotenv').config();

const user = {
    email:'juan.cruz@gmail.com',
    password:'Abc123',
    avatar:'',
    fname:'juan',
    lname:'cruz',
    id:'2'
}

app.post('/auth/login',(req, res)=>{

    const { email, password } = req.body;

    if (email === user.email && password === user.password) {
        return res.status(200).json({
            ok: true,
            user
        });
    }else{
        return res.status(403).json({
            ok: false,
            error: 'credenciales incorrectas'
        })
    }
});

app.listen( process.env.PORT, ()=>{
    console.log('listening on port', process.env.PORT)
})