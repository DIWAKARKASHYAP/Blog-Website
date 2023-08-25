const mongoose = require('mongoose');

// Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/blog', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect('mongodb+srv://didk9675:GpGwi4afpOLIA22h@cluster0.sjve0q0.mongodb.net/blogDatabase?retryWrites=true&w=majority', { useNewUrlParser: true,
// useCreateIndex: true,
useUnifiedTopology: true,
 });


// mongodb password GpGwi4afpOLIA22h



mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});



