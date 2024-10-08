const express = require('express');  
const cors = require('cors'); 
const mongoose = require('mongoose');  
const { registerUser, loginUser, getUserDetails, verifyEmail } = require('./userController');  
const generate_ai_res = require('./AI');  

const app = express(); 
app.use(cors());   
const PORT = 8080;  

uri = "mongodb+srv://miralalamir20:miral-123-aa@cluster0.1unu1.mongodb.net/wagabat?retryWrites=true&w=majority&appName=Cluster0"
// uri = 'mongodb://localhost:27017/mydatabase'
mongoose.connect(uri)  
  .then(async () => {  
    console.log('Connected to MongoDB');
  })  
  .catch((error) => {  
    console.error('Error connecting to MongoDB:', error);  
  });  

app.use(express.json());  

// Routes  
app.post('/api/signup', registerUser);  
app.post('/api/login', loginUser);  
app.get('/api/user', getUserDetails);  
app.get('/verify-email', verifyEmail);
app.post('/generate', generate_ai_res);

app.get('/', (_req, res) => {  
  res.send('Welcome to my User Registration and Login API!');  
});  

app.listen(PORT, () => {  
  console.log(`Server is running on port ${PORT}`);  
});  
