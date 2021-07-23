const express = require("express");
const mongodb = require("mongodb");
const router = express.Router();
const sgMail = require('@sendgrid/mail');
const msg = {
    from: 'satanadam@outlook.com', // Change to your verified sender
    subject: 'Papp Szonja és Sátán Ádám Esküvője',
    text: 'Gyere, jó lesz, 2021-09-04 15:00'
  }

router.post("/", async (req, res) => {
    let attendee ={
        id:0,
        name:req.body.name,
        email:req.body.email,
        age:req.body.age,
        lactose:req.body.lactose,
        milk:req.body.milk,
        gluten:req.body.gluten,
        vegan:req.body.vegan,
        other:req.body.other,
        attend:req.body.attend,
        parentId:req.body.parentId
    };
    console.log(attendee);
    if (attendee.name == null || attendee.email == null || attendee.attend == null) {
        res.status(400).send();
        return;
    }
    msg.to=attendee.email;
    if(process.env.SENDGRID_API_KEY){
    const posts = await loadBooksCollection();
    posts.insertOne(attendee).then(result=>{
        id=result.insertedId;
        sgMail.send(msg)
        .then((res)=>{
            console.log(res[0].statusCode)
            console.log(res[0].headers)
            return res.send({"id":id});
    }).catch(err=>console.log(err));
        
    }).catch(err=>{
        return res.status(400).send();
    });
    
    }
    else{
        return res.status(200).send({"id":012});
    }
    

});

async function loadBooksCollection() {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const client = await mongodb.MongoClient.connect("mongodb+srv://wedding:wedding@cluster0.ztysf.mongodb.net/wedding?retryWrites=true&w=majority", {useNewUrlParser: true});
    return client.db("wedding").collection("attendees");
}

module.exports=router;