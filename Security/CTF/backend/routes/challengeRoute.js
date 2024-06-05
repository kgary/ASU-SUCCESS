import express from "express";

import fs from "fs";
import { promises as fsp } from 'fs';

import path from "path";

import { fileURLToPath } from "url";

import { User } from "../models/userModel.js";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const dataDirPath = path.join(__dirname,'..','data');

router.get('/', (req, res) => {
    fs.readFile(path.join(dataDirPath, 'challenges.json'), 'utf8', (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
        return res.status(500).send({ message: "Failed to load challenges." });
      }
      res.json(JSON.parse(data));
    });
  });

  router.post('/submit', async (req, res) => {
    const { challengeId, answer, hintUsed, code } = req.body;

    try {
        // Correctly use async/await to read and parse the solutions file
        const data = await fsp.readFile(path.join(dataDirPath, 'solution.json'), 'utf8');
        const solutions = JSON.parse(data);
        
        const solution = solutions.find(s => s.id === challengeId);

        if (!solution) {
            return res.status(404).send({ message: 'Challenge not found.' });
        }

        const user = await User.findOne({ code });

        if (!user) {
            return res.status(404).send({ message: 'User not found.' });
        }

        let pointsToAdd = solution.points;

        if (solution.answer !== answer) {
            pointsToAdd = 0; // No points added if answer is wrong
            res.send({ message: 'Wrong answer.', correct: false });
        } else {
            res.send({ message: 'Correct answer!', correct: true });
        }

        if (hintUsed) {
            pointsToAdd -= 3; // Deduct 3 points if hint was used
        }

        // Ensure pointsToAdd doesn't go negative
        user.points += Math.max(pointsToAdd, 0);
        await user.save();

        // res.json({ userPoints: user.points });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal server error' });
    }
});

  

  export default router;