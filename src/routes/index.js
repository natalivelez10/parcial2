const { Router } = require('express');
const router = Router();
const admin=require('../configFirebase')

//admin.initializeApp({
//credential: admin.credential.applicationDefault(),
//datebaseURL: '' 



//})
//let db = admin.firestore();

//gets

router.get('/',(req,res)=>{
    res.render('index')
})

router.post('/new contact',(req, res)=>{
    console.log(req.body);
    res.send('received')
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