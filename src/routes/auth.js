const { Router } = require('express');

const router = Router();

const user = {
    email:'juan.cruz@gmail.com',
    password:'Abc123',
    avatar:'',
    fname:'juan',
    lname:'cruz',
    id:'2'
}

//crear usuario
router.post('/login',(req, res)=>{
    console.log(req)
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


module.exports = router;