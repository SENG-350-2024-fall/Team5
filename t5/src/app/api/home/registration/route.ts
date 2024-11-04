// pages/api/register.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

interface User {
  username: string;
  password: string;
}

const usersFilePath = path.join(process.cwd(), 'mockedData', 'Login.json');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    // Read the current users
    fs.readFile(usersFilePath, 'utf8', (err, data) => {
      if (err) {
        return res.status(500).json({ message: 'Error reading user data' });
      }

      const users: User[] = JSON.parse(data);

      // Check if username already exists
      const userExists = users.some((user) => user.username === username);
      if (userExists) {
        return res.status(409).json({ message: 'Username already exists' });
      }

      // Add the new user
      users.push({ username, password });

      // Write the updated users back to the file
      fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), (err) => {
        if (err) {
          return res.status(500).json({ message: 'Error saving user data' });
        }
        res.status(201).json({ message: 'Registration successful' });
      });
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
