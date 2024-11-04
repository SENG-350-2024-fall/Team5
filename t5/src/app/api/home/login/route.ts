// src/app/api/home/login/route.ts
import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';
import {LOGIN} from '../../../../mockedData/loginData'

interface User {
  username: string;
  password: string;
}

const usersFilePath = "src/mockedData/Login.json"


export async function POST(req: Request) {
  try {
    const { username, password }: User = await req.json();

    // Read the users JSON file asynchronously
    const data = await fs.promises.readFile(usersFilePath, 'utf8');
    const parsedData = JSON.parse(data);
    const users = parsedData.userLogins;
      const user = users.find(
        (user) => user.username === username && user.password === password
      );

    if (user) {
      // Login successful
      return NextResponse.json({ message: 'Login successful' }, { status: 200 });
    } else {
      // Login failed
      return NextResponse.json({ message: 'Invalid username or password' }, { status: 401 });
    }
  } catch (error) {
    console.error('Error reading user data:', error);
    return NextResponse.json({ message: 'Error reading user data' }, { status: 500 });
  }
}

/*
// pages/api/login.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import {LOGIN} from '../../../../mockedData/loginData'
import { NextResponse } from 'next/server';
interface User {
  username: string;
  password: string;
}

const usersFilePath = "../../../mockedData/Login.json"

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    // Read the users JSON file
    fs.readFile(usersFilePath, 'utf8', (err, data) => {
      if (err) {
        return NextResponse.json({ message: 'Error reading user data' }, { status: 500 });
      }

      const users: LOGIN[] = JSON.parse(data);
      const user = users.find(
        (user) => user.username === username && user.password === password
      );

      if (user) {
        // Login successful
        return NextResponse.json({ message: 'Login successful' }, { status: 200 });
      } else {
        // Login failed
        return NextResponse.json({ message: 'Invalid username or password' }, { status: 401 });
      }
    });
  } else {
    console.error('Error reading user data');
    return NextResponse.json({ message: 'Error reading user data' }, { status: 500 });
 
  }
}
*/