const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 80;

// EXPRESS SPECIFIC
app.use('/static', express.static('static')) // For Serving static files
app.use(express.urlencoded())

// PUG SPECIFIC
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')); // Set the views directory

// ENDPOINTS
// app.get("/demo", (req, res) => {      // Our pug demo end point
//     res.status(200).render('demo', { title: 'Hey Abhi', message: 'Hello there!' });
// });

// app.get("/", (req, res) => {
//     res.status(200).send("This is homepage of my first express app with harry.");
// });

// app.get("/about", (req, res) => {
//     res.send("This is about page of my first express app with harry.");
// });

// app.post("/about", (req, res) => {
//     res.send("This is post request on about page of my first express app with harry.");
// });

// app.get("/contact", (req, res) => {
//     res.status(404).send("This page is not found.");
// });

app.listen(port, () => {
    console.log(`The app started successfully on port ${port}`);
});


// Using raw html
app.get('/', (req, res) => {
    const con = "This is the best content you will find on the internet so use it wisely."
    const params = { 'title': 'Pubg is the best', 'content': con };
    res.status(200).render('index.pug', params);
})

app.post('/', (req, res) => {
    const name=req.body.name
    const age=req.body.age
    const gender=req.body.gender
    const address=req.body.address
    const more=req.body.more

    let outputToWrite = `The client is ${name}, age ${age}, gender ${gender}, lives in ${address} and is ${more}.`
    fs.writeFileSync('output.txt', outputToWrite)
    
    const params = { 'content': "Your form has been submitted successfully." };
    res.status(200).render('index.pug', params);
})