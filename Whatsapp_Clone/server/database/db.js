import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async (username, password) => {
    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-qnfrro1-shard-00-00.sgpp1tv.mongodb.net:27017,ac-qnfrro1-shard-00-01.sgpp1tv.mongodb.net:27017,ac-qnfrro1-shard-00-02.sgpp1tv.mongodb.net:27017/?ssl=true&replicaSet=atlas-ozuu04-shard-0&authSource=admin&retryWrites=true&w=majority&appName=whatspp`;

    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
        });
        console.log('Database Connected Successfully');

        const db = mongoose.connection;

        db.on('error', console.error.bind(console, 'MongoDB connection error:'));
        db.once('open', () => {
            console.log('Database Connected Successfully');
        });
    } catch (error) {
        console.log('Error connecting to the database:', error);
    }
};

export default Connection;
