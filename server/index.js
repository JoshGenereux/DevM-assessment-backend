const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

const people = []
let personId = 1;

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];
  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get('/api/fortune', (req, res)=>{
    const fortunes = [
        "you will live forever","You will have a great day","I see money in your future",
        "Love will find you"
    ]
    let random = Math.floor(Math.random() * fortunes.length)
    let randomFortune = fortunes[random]
    res.status(200).send(randomFortune)
})

app.get('https://api.kanye.rest', (req, res)=>{
    const quote = res.body
    res.status(200).send(quote)
})

app.get('https://api.chucknorris.io/jokes/random', (req, res)=>{
    const quote = res.body
    console.log(res.body)
    res.status(200).send(quote)
})

app.get('https://api.adviceslip.com/advice', (req, res)=>{
    const advice = res.body
    console.log(advice)
    res.status(200).send(advice)
})

app.listen(4000, ()=> console.log("Running on port 4000"))