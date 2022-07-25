const express = require('express');
const router = express.Router();

// Always put dynamic routes in the bottom

router.get('/', (req, res) => {
    console.log(req.query.name)
    // http://localhost:3000/users?name=om
    res.send("User List");
});

router.post('/', (req, res) => {
    const isValid = true
    if(isValid){
        users.push({firstName:req.body.firstName});
        res.redirect(`/users/${users.length - 1}`);
    }
    else{
        console.log("Error");
        res.render('users/new',{firstName:req.body.firstName})
    }
})

router.get('/new', (req, res) => {
    res.render("users/new",{firstName:"Om Surushe"});
});

router.route('/:id').get((req, res) => {
    console.log(req.user);
    res.send(`Hello User With Id ${req.params.id}`)
}).put((req, res) => {
    res.send(`Hello User With Id ${req.params.id}`)
}).delete((req, res) => {
    res.send(`Hello User With Id ${req.params.id}`)
})

// router.get('/:id',(req,res) => {
//     res.send(`Hello User With Id ${req.params.id}`)
// })

// router.put('/:id',(req,res) => {
//     res.send(`Hello User With Id ${req.params.id}`)
// })

// router.delete('/:id',(req,res) => {
//     res.send(`Hello User With Id ${req.params.id}`)
// })

const users = [{name:"Harsh"},{name:"Om"}]
router.param("id",(req,res,next,id) => {
    req.user = users[id];
    next();
})

module.exports = router