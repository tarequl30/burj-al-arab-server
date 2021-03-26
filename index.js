const express = require('express')
const bodyParser  = require('body-parser')
const cors = require('cors')

const port = 5000
const app = express()

app.use(cors())
app.use(bodyParser.json());

const pass = 'arabianHorse79'

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://arabian:arabianHorse79@cluster0.5gken.mongodb.net/burjAlArab?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("burjAlArab").collection("bookings");
  
  app.post('/addBooking', (req,res) =>{
      const newBooking = req.body
      console.log(newBooking);
  })

});


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})