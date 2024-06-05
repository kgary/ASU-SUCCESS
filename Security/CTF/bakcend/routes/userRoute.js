import express from "express";

import { User } from "../models/userModel.js";

import { CIPHER_CODE } from "../config.js";

const router = express.Router();

//create a new user
router.post('/', async ( request, response )=>{
  try {
    const { username, code } = request.body;

    if (!username || !code) {
        return response.status(400).send({
            message: 'Send all required fields: username, cipher-code',
        });
    }

    //Check for uniqueness of the username
    const existingUser = await User.findOne({ username });
    if (existingUser) {
        return response.status(400).send({
            message: 'Sorry!! Username already in Use, Please try a different one!!',
        });
    }

    // Check if code is right
    if (code === CIPHER_CODE) {

      const newUser = { username };
      const user = await User.create(newUser);
  
      response.status(201).send(user);
    }else{
      return response.status(401).send({
        message: 'Unauthorized Access: Please enter a correct CIPHER CODE',
    });
    }

    
} catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
}
});

//get all users
router.get('/', async (req, res) => {
    try {
      const users = await User.find().sort({ points: -1 });
      res.status(200).send(users);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

export default router;

