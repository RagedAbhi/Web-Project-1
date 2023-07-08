
//     const con = "This is the best content you will find on the internet so use it wisely."
//     const params = { 'title': 'Pubg is the best', 'content': con };
//     res.status(200).render('index.pug', params);
// })

// app.post('/', (req, res) => {
//     const name=req.body.name
//     const age=req.body.age
//     const gender=req.body.gender
//     const address=req.body.address
//     const more=req.body.more

//     let outputToWrite = `The client is ${name}, age ${age}, gender ${gender}, lives in ${address} and is ${more}.`
//     fs.writeFileSync('output.txt', outputToWrite)
    
//     const params = { 'message': "Your form has been submitted successfully." };
//     res.status(200).render('index.pug', params);
// })