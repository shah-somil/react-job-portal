// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const multer = require('multer');
// const fs = require('fs');
// const path = require('path');
// const cors = require('cors');
// const userRoutes = require('./routes/userRoutes')

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middlewares
// // app.use(cors());
// app.use(bodyParser.json());

// // MongoDB Connection

// // mongoose.connect('mongodb://localhost:27017/job-guru',{
// mongoose.connect('mongodb+srv://charmydarji28:Charmy25@crudnodejs.wouumao.mongodb.net/?retryWrites=true&w=majority&appName=CRUDNodejs',{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     })
//     .then(() => {
//         console.log('Connected to MongoDB');
//     })
//     .catch((err) => {
//         console.error('Error connecting to MongoDB', err);
//     });


// // Use the user routes
// // app.use(userRoutes);
// app.use('/api/users', userRoutes);
 
// // Static serve images directory
// app.use('/images', express.static(path.join(__dirname, 'images')));

// // Test Route
// app.get('/', (req, res) => {
//     res.send('User Management API');
// });

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'images/');
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + '_' + Date.now() + '.' + file.mimetype.split('/')[1]);
//     }
// });

// const fileFilter = (req, file, cb) => {
//     if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/gif'){
//         cb(null, true);
//     } else{
//         cb(new Error('Only JPG, PNG and GIF are allowed'), false);
//     }
// }

// const upload = multer({storage: storage, fileFilter: fileFilter});

// app.post('/api/users/uploadImage', upload.single('image'), (req, res) => {
//     if(!req.file){
//         return res.status(400).send({message: 'No Image File Provided'});
//     }
//     const imagePath = req.file.path;

//     res.status(200).message({meddage: 'Image uploaded successfully', imagePath})
// });

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const jobRoutes = require('./routes/jobRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb+srv://charmydarji28:Charmy25@crudnodejs.wouumao.mongodb.net/?retryWrites=true&w=majority&appName=CRUDNodejs', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error('Error connecting to MongoDB', err);
});

// Use the routes
app.use('/api/users', userRoutes);
app.use('/api/jobs', jobRoutes);

// Static serve images directory
app.use('/images', express.static(path.join(__dirname, 'images')));

// Test Route
app.get('/', (req, res) => {
    res.send('User Management API');
});

// Image Upload Configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images/');
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() + '.' + file.mimetype.split('/')[1]);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/gif'){
        cb(null, true);
    } else{
        cb(new Error('Only JPG, PNG and GIF are allowed'), false);
    }
}

const upload = multer({storage: storage, fileFilter: fileFilter});

app.post('/api/users/uploadImage', upload.single('image'), (req, res) => {
    if(!req.file){
        return res.status(400).send({message: 'No Image File Provided'});
    }
    const imagePath = req.file.path;

    res.status(200).send({message: 'Image uploaded successfully', imagePath});
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
