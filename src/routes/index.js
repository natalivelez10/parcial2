const { Router }=require('express');
const router = Router();
const admin=require('../configFirebase');
const { database } = require('firebase-admin');


var serviceAccount = require("../../parcial2-49046-firebase-adminsdk-jka6n-5698a1b9f0.json")


admin.initializeApp({
credential: admin.credential.cert(serviceAccount);
databaseURL: 'https://parcial2-49046.firebaseio.com'

})
 
const db = admin.database();

//gets

router.get('/',(req,res)=>{
    res.render('index')
})

router.post('/newContact',(req, res)=>{    
    console.log(req.body);
    const newcontact= {
        name: req.body.name,
        lastname: req.body.lastname,
        old: req.body.old,
        phone: req.body.phone,
        email: req.body.email,


    }
    db.ref('contactos').push(newContact)
    res.send('received')
  
})


router.get('/login',(req,res)=>{
    res.render('login')
})

router.get('/crearcuenta',(req,res)=>{
    res.render('createAccount')
})


//posts

router.post('/crearcuenta',(req,res)=>{
    console.log(req.body)
    db.collection('algo').doc('12344').set(req.body)
    .then(()=>{
        console.log('dato almacenado')
    })
})

module.exports=router;