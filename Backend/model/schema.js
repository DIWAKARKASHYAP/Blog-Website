
const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = BlogPost