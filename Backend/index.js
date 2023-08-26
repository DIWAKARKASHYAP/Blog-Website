const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require("./db/connect")
// const BlogPost = require('./model/schema')
// mongodb password GpGwi4afpOLIA22h

const cors = require('cors');

const app = express();
const port = 5000;

// const corsOptions = {
//   origin: 'http://localhost:5173', // only allow request from this origin
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

// const allowedOrigins = ['http://localhost:5173', 'http://127.0.0.1:5173'];
const allowedOrigins = ['https://blog-website-frontend-nu.vercel.app/'];


app.use(cors({
  origin: function(origin, callback){
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));
// Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/blog', { useNewUrlParser: true, useUnifiedTopology: true });

// // Create a blog post schema
const blogPostSchema = new mongoose.Schema({
  title: String,
  hashTag:Array ,
  email: String,
  content: String,
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

app.use(bodyParser.json());

// Post data on mongodb
app.post('/api/posts', async (req, res) => {

  // console.log(req.body)
  const { title, hashTag, email, content } = req.body;

  const newPost = new BlogPost({
    title,
    hashTag,
    email,
    content,
  });

  try {
    await newPost.save();
    res.status(201).json({ message: true });
  } catch (error) {
    res.status(500).json({ message: false });
  }
});


//get Data from mongodb

app.get('/api/posts', async (req, res) => {
  try {
      const posts = await BlogPost.find({});
      res.json(posts);
  } catch (err) {
      res.status(500).send(err.message);
  }
});






app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
