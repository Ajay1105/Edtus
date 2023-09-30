const URI = "mongodb+srv://Ajay:aky11052003@cluster0.ukq9pga.mongodb.net/clerk?retryWrites=true&w=majority";

import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};

export default connectDB;
