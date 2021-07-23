const express = require("express");
const mongodb = require("mongodb");
const router = express.Router();

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
    return res.status(200).send({"id":012});
    const posts = await loadBooksCollection();
    posts.insertOne(attendee).then(result=>{
        id=result.insertedId;
        res.status(201).send({"id":id});
    }).catch(err=>{
        return res.status(400).send();
    });

});

async function loadBooksCollection() {
    const client = await mongodb.MongoClient.connect("mongodb+srv://wedding:wedding@cluster0.ztysf.mongodb.net/wedding?retryWrites=true&w=majority", {useNewUrlParser: true});
    return client.db("wedding").collection("attendees");
}

module.exports=router;