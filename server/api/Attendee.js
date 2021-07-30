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
        name:req.body.name,
        email:req.body.email,
        age:req.body.age,
        lactose:req.body.lactose,
        milk:req.body.milk,
        gluten:req.body.gluten,
        vegan:req.body.vegan,
        other:req.body.other,
        attend:req.body.attend,
        parentId:req.body.parentId,
        bor:req.body.bor,
        szaraz:req.body.szaraz,
        edes:req.body.edes,
        roze:req.body.roze,
        voros:req.body.voros,
        feher:req.body.feher,
        palinka:req.body.palinka,
        jager:req.body.jager,
        baileys:req.body.baileys,
        vodka:req.body.vodka,
        whisky:req.body.whisky,
        tequila:req.body.tequila
    };
    console.log(attendee);
    if (attendee.name == null || attendee.email == null || attendee.attend == null) {
        res.status(400).send();
        return;
    }
    msg.to=attendee.email;
    if(process.env.SENDGRID_API_KEY){
        const attendees = await loadAttendeeCollection();
        attendees.insertOne(attendee).then(result=>{
            id=result.insertedId;
            sgMail.send(msg)
                .then((emailres)=>{
                    console.log(emailres[0].statusCode)
                    console.log(emailres[0].headers)
                    return res.status(200).send({"id":id});
            }).catch(err=>console.log(err));
        }).catch(err=>{
        return res.status(400).send();
        });
    }
    else{
        return res.status(200).send({"id":012});
    }
    

});

router.get("/", async (req,res)=>{
    const attendees = await loadAttendeeCollection();
    let attendeeList = await attendees.find().toArray();
    return res.send(attendeeList);
})
router.get("/mock", async (req,res)=>{
    let attendeeList =[];
    let attendee ={
        id:0,
        name:"Teszt János",
        email:"asd@asd.hu",
        age:23,
        lactose:false,
        milk:true,
        gluten:false,
        vegan:true,
        other:"",
        attend:"minden",
        parentId:0
    };
    attendeeList.push(attendee)
    attendeeList.push(attendee)
    console.log("sent attendee mocks");
    return res.send(attendeeList);
})

async function loadAttendeeCollection() {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const client = await mongodb.MongoClient.connect("mongodb+srv://wedding:wedding@cluster0.ztysf.mongodb.net/wedding?retryWrites=true&w=majority", {useNewUrlParser: true});
    return client.db("wedding").collection("attendees");
}

module.exports=router;