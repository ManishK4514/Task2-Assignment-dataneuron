import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes/NoteRoute.js';
import dotenv from 'dotenv';

dotenv.config()

const app = express()
const PORT = process.env.port || 5001

app.use(express.json())
app.use(cors())

mongoose
  .connect(process.env.MONGODB_URL)
  .then(()=> console.log("Connected To MongoDB..."))
  .catch((err)=> console.log(err))

app.use(routes)  

app.listen(PORT, ()=> {
    console.log(`Listening on port: ${PORT}`);
});