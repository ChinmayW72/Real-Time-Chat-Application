import multer from 'multer';
import multerGridFsStorage from 'multer-gridfs-storage'; // Import multer-gridfs-storage properly
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const storage = new multerGridFsStorage({ // Instantiate multerGridFsStorage
    url: `mongodb://${USERNAME}:${PASSWORD}@ac-qnfrro1-shard-00-00.sgpp1tv.mongodb.net:27017,ac-qnfrro1-shard-00-01.sgpp1tv.mongodb.net:27017,ac-qnfrro1-shard-00-02.sgpp1tv.mongodb.net:27017/?ssl=true&replicaSet=atlas-ozuu04-shard-0&authSource=admin&retryWrites=true&w=majority&appName=whatsapp`,
    options: { useUnifiedTopology: true, useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg", "image/jpeg"];

        if (match.indexOf(file.mimetype) === -1)
            return `${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        };
    }
});

export default multer({ storage });
