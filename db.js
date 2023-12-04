// const mongoose = require('mongoose');
// const mongoURI = "mongodb://localhost:27017/"

// const connectToMongo = ()=>{
//     mongoose.connect(mongoURI, ()=>{
//         console.log("connected to Mongo Successfully");
//     })
// }
// module.exports = connectToMongo


const mongoose = require('mongoose');
const { MONGO_URI } = process.env;

const connectToMongo = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};

module.exports = connectToMongo;


// const mongoose = require('mongoose');
// const mongoURI = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
