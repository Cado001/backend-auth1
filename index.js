import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";
const app = express()
app.use(cors())
app.use(express.json())
const client = new MongoClient(Mongo_URI)
const db = client.db('blogapp-c12')
const loginAuth = db.collection('login-auth')
client.connect()
console.log('connected to Mongo')
app.get('/', async (req,res) =>{
    const allPost= await loginAuth.find().toArray()
    console.log('allPost ->', allPosts)
})