// import grid from 'gridfs-stream';
// import mongoose from 'mongoose';



// let gfs, gridfsBucket;
// const conn = mongoose.connection;
// conn.once('open', () => {
//     gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
//         bucketName: 'fs'
//     });
//     gfs = grid(conn.db, mongoose.mongo);
//     gfs.collection('fs');
// }); 



// export const getImage = async (request, response) => {
//     try {   
//         const file = await gfs.files.findOne({ filename: request.params.filename });
//         if (!file) {
//             return response.status(404).json("File not found");
//         }

//         const readStream = gfs.createReadStream(file.filename);
//         readStream.pipe(response);
//     } catch (error) {
//         response.status(500).json({ msg: error.message });
//     }
// }



const url = 'http://localhost:8000';

export const uploadFile = (request, response) => {  
    if (!request.file) 
        return response.status(404).json("File not found");
    
    const imageUrl = `${url}/file/${request.file.filename}`;
    response.status(200).json(imageUrl);    
}





