
import mongoose from 'mongoose';
import colors from 'colors';

// Create a function to connect to DB
const connectDB = async () => {
  try {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    const conn = await mongoose.connect(process.env.MONGO_URL, options);

    console.log(
      `MongoDB Connected: ${conn.connection.host}`.bgMagenta.white
    );

    // Connection events (very useful in production)
    mongoose.connection.on('disconnected', () => {
      console.log('MongoDB disconnected!'.bgYellow.black);
    });

    mongoose.connection.on('error', (err) => {
      console.error(`MongoDB Connection Error: ${err}`.bgRed.white);
    });
  } catch (error) {
    console.error(`MongoDB Connection Failed: ${error.message}`.bgRed.white);
    process.exit(1);
  }
};

export default connectDB;
