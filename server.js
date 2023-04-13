const express = require('express');

const cors = require('cors');
require("dotenv").config();
const bodyParser = require('body-parser');
const sendEmail = require('./src/sendEmail');


const app = express()

  
  app.use(express.json());
  app.use(bodyParser.json());
  app.use(cors());
 
  app.post('/api/send', async (req, res) => {
    const { email, subject, message } = req.body;
    try {
      const sendFrom =  process.env.REACT_APP_EMAIL_USER
      const replyTo=email
      const sendTo=process.env.REACT_APP_EMAIL_USER
      await sendEmail(subject,message,sendTo,sendFrom,replyTo)
      res.status(200).json({
        success: true, message: "email sent"
      })
    } catch (error) {
      res.status(500).json(error.message)
    }
    
  })
  const port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log('server running on port',port)
  })