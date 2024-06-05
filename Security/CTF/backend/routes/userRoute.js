import express from "express";

import { User } from "../models/userModel.js";

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

    // Check if code is exactly 3 letters
    if (code.length !== 3) {
        return response.status(400).send({
            message: 'Cipher code must be exactly 3 letters long',
        });
    }

    // Check for uniqueness of the code
    const existingUser = await User.findOne({ code });
    if (existingUser) {
        return response.status(400).send({
            message: 'Sorry!! Cipher code already in Use, Please try a different one!!',
        });
    }

    const newUser = { username, code };
    const user = await User.create(newUser);

    response.status(201).send(user);
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

