const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const User = require('../models/Users');
const validator = require('validator');
const PORT = process.env.PORT || 5000; 
const nameRegex = /^[a-zA-Z\s]+$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


exports.createUser = async (req, res) => {
  try {
    const { fullName, email, password, role } = req.body;
    if (!['admin', 'employee'].includes(role)) {
        return res.status(400).send('Invalid user type.');
    }
    // Validate input
    if (!fullName || !email || !password || !role) {
        return res.status(400).send({ message: 'Please provide all required fields' });
    }

    // Email validation
    if (!emailRegex.test(email)) {
        return res.status(400).send({ message: 'Invalid email format' });
    }

    // Full name validation
    if (!nameRegex.test(fullName)) {
        return res.status(400).send({ message: 'Invalid full name' });
    }

    // Password validation (at least 8 characters, 1 uppercase, 1 lowercase, 1 number)
    if (!passwordRegex.test(password)) {
        return res.status(400).send({ message: 'Password must be at least 8 characters long and include uppercase letters, lowercase letters, and numbers' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).send({ message: 'User already exists' });
    }

    // Create new user
    const user = new User({ fullName, email, password, role });
    await user.save();

    res.status(201).send({ message: 'User created successfully', user });
} catch (error) {
    res.status(500).send({ message: 'Error creating user', error: error.message });
}

};

exports.updateUser = async (req, res) => {
  try {
    const { email, fullName, newPassword } = req.body;

    // Validate input
    if (!email || (!fullName && !newPassword)) {
        return res.status(400).send({ message: 'Please provide the email and the field(s) to update' });
    }

    // Full name validation
    if (fullName && !nameRegex.test(fullName)) {
        return res.status(400).send({ message: 'Invalid full name' });
    }

    // Password validation
    if (newPassword && !passwordRegex.test(newPassword)) {
        return res.status(400).send({ message: 'Invalid password format' });
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(404).send({ message: 'User not found' });
    }

    // Update user details
    if (fullName) {
        user.fullName = fullName;
    }
    if (newPassword) {
        user.password = await bcrypt.hash(newPassword, 10);
    }
    await user.save();

    res.status(200).send({ message: 'User updated successfully', user });
} catch (error) {
    res.status(500).send({ message: 'Error updating user', error: error.message });
}
};


exports.deleteUser = async (req, res) => {
  try {
    const { email } = req.body;

    // Validate input
    if (!email) {
        return res.status(400).send({ message: 'Please provide the email of the user to delete' });
    }

    // Find and delete user
    const user = await User.findOneAndDelete({ email });
    if (!user) {
        return res.status(404).send({ message: 'User not found' });
    }

    res.status(200).send({ message: 'User deleted successfully' });
  } catch (error) {
      res.status(500).send({ message: 'Error deleting user', error: error.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    // const users = await User.find().select('-password');
        const users = await User.find({}, 'fullName email role');
        res.status(200).send({ message: 'Users retrieved successfully', users });
    } catch (error) {
        res.status(500).send({ message: 'Error retrieving users', error: error.message });
    }
};

exports.getImages = async (req, res) => {
    try{
        const imageDirectory = path.join(__dirname, '..', 'images'); // Adjust the path to your images directory
    fs.readdir(imageDirectory, (err, files) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: "Failed to list images" });
      }
      const images = files.map(file => ({
        name: file.split('.')[0], // Optional: Extract name without extension
        imageUrl: `http://localhost:${PORT}/images/${file}` // Construct URL to access images
      }));
      res.json(images);
    });
    }catch(error){
        res.status(500).send({ message: 'Error getting images', error: error.message });
    }
    
  };

  // If the `images` directory is one level above the `server` directory
// app.use('/images', express.static(path.join(__dirname, '..', 'images')));

//   app.use('/images', express.static(path.join(__dirname, 'images')));
  

exports.uploadImage = async (req, res) => {
  try {
      if (!req.file) {
          return res.status(400).send({ message: 'No image file provided' });
      }

      const imagePath = req.file.path;

      res.status(201).send({ message: 'Image uploaded successfully', imagePath });
  } catch (error) {
      res.status(500).send({ message: 'Error uploading image', error: error.message });
  }
};

// exports.LoginUser = async (req, res) => {
//     try{
//         const {email, password} = req.body;

//         const user = await User.findOne({email});
//         if(!user){
//             return res.status(401).json({message: 'Invalid email or password'});
//         }

//         const checkPassword = await bcrypt.compare(password, user.password);
//         if (!checkPassword){
//             return res.status(401).json({message: 'Invalid email or password'});

//         }

//         const token = jwt.sign({userId: user._id, email: user.email}, 'secret_key', {expiresIn: '1h'});
//         res.status(200).json({token});
//     }catch(e){
//         console.error('Error logging in user:', error);
//         res.status(500).json({message: 'Internal server error'});
//     }
// };


exports.LoginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Check the password
        const checkPassword = await bcrypt.compare(password, user.password);
        if (!checkPassword) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Assuming 'type' field exists in user model that denotes role
        const token = jwt.sign(
            { userId: user._id, email: user.email, role: user.role },
            'secret_key',
            { expiresIn: '1h' }
        );

        // Send back the token and the user type
        res.status(200).json({ token, role: user.role });  // Ensure your front-end knows to expect a 'role' field now
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
