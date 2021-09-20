const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://azzopars:<password>@cluster0.7rzs3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(() => {
  console.log('MongoDB connection successful.');
}).catch((e) => {
  console.log('MongoDB connection error: ', e.message)
});

module.exports = mongoose.connection;