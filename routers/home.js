
const express=require('express');
const club = require('../models/club');
const Router=express.Router();
const Club=require('../models/club');


Router.get('/',(err,res)=>{
    res.render('index')
})

// create and insert data
Router.post('/add',(req,res)=>{
    const name=req.body.name;
    const email=req.body.email;

    //console.log(name,email)
  const club=new Club()({
   name,email
  })


  club.save(err=>{
    if(err){
        console.log("err is")
    }
    else{
        res.redirect('/')
    }
  })
  
})


//find data


Router.get('/show',(res,req)=>{
    Club.find((err,docs)=>{
        if(err) throw err;

        res.render('show',{
            students:docs
        })
    })

})


//delete

Router.get('/delete/:id',(req,res)=>{
    club.findByIdAndDelete({_id:ereq.params.id},req.body,(err,docs)=>{
        if(err){
            console.log("Err");

        }
        else{
            console.log("Deleted")
            res.redirect('/show')
        }
    })
})


module.exports=Router;
