const functions = require("firebase-functions");

const express = require("express"); //npm i express

const cors = require("cors"); //npm i cors cross origin resource sharing
//const { response } = require("express");
const stripe = require("stripe")("sk_test_51KKlYhSAFgCJFbbjWUZpjakiM4Uv1GjSnjrp8cYXS6RY7fsPuOt5jaapEpXcEFBPycPa7bqDptlxgWAVaQFwcags00fvGy3TpK"); //npm i stripe

//API

//-App config //setting up Express Server
const app = express();

//-Middlewares
app.use(cors({origin: true}));
app.use(express.json());
//-API Routes
app.get('/',(request,response)=>response.status(200).send('hello world'));

app.post('/payments/create', async(request,response) =>{
    const total = request.query.total;
    console.log("Total Payment Recieved>>", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount : total, // In Paise Value not in Rupees
        currency: "INR",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });


});
//-Listen Command
exports.api = functions.https.onRequest(app);

// In terminal under function>firebase emulators:start
//ENDPOINT
//http://localhost:5001/project-4cb77/us-central1/api