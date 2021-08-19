import mongoose from 'mongoose';

let database = mongoose.connection;

/*
 * Connect to MongoDB
 */
export const connectDB = async (): Promise<void> => {
  const uri = process.env.MONGO_URL || 'mongodb://localhost/meow';

  mongoose.connect(uri, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

  mongoose.set('runValidators', true);
  database = mongoose.connection;

  database.once('open', async () => {
    console.log('Connected to database');
  });

  database.on('error', () => {
    console.log('Error connecting to database');
    process.exit(1);
  });
};

/*
 * Disconnect MongoDB
 */
export const disconnectDB = async (): Promise<void> => {
  if (!database) return;
  mongoose.disconnect();
};
