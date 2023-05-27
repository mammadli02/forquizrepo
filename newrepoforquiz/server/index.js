const express = require('express')
const app = express()
const dotenv=require('dotenv')
dotenv.config()
var cors = require('cors')
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
const mongoose = require('mongoose');
const BlogPost = new mongoose.Schema({
    names: String,
    age:Number
  });
  const MyModel = mongoose.model('sexs', BlogPost);
  const DB_PASSWORD=process.env.DB_PASSWORD
  DB_CONNECTION=process.env.DB_CONNECTION
  mongoose.connect(DB_CONNECTION.replace('<password>', DB_PASSWORD))
  .then(()=>{
    console.log('connected');
  })
  app.get('/api/person',async(req,res)=>{
    const { names } = req.query;
    const datas= await MyModel.find()
    if (names === undefined) {
      res.status(200).send(datas);
    } else {
      res.status(200).send(
        datas.filter(
          (x) => x.names.toLowerCase().trim().includes(names.toLowerCase().trim())
        ),
   
    );
    }
  })
  app.get('/api/person/:id',async(req,res)=>{
    const id=req.params.id
    const data= await MyModel.findById(id)
    res.status(200).send(data)
  })
app.delete('/api/person/:id', async(req,res)=>{
    const id=req.params.id
    const deleted= await MyModel.findByIdAndDelete(id)
    res.status(203).send(deleted)
})
app.post('/api/person', async(req,res)=>{
const {names,age}=req.body
const newData=new MyModel({
 names:names,
 age:age
})
const  news=await newData.save()
res.status(201).send(news)
})
app.put('/api/person/:id', async(req,res)=>{
    const id=req.params.id
const {names,age}=req.body
const updated=await MyModel.findByIdAndUpdate(id,{names:names, age:age})
res.status(200).send(updated)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})
const PORT=process.env.PORT

app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`)
})