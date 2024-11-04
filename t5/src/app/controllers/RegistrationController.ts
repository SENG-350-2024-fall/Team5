// src/controllers/RegistrationController.ts
import {
    writeToJsonFile,
  } from "../../helpers/interactWithJSONFile";
import path from 'path';

interface User {
  username: string;
  password: string;
  email: string;
}

class RegistrationController {
  private usersFilePath: string;

  constructor() {
    // Define the path for the users JSON file
    this.usersFilePath = path.join(__dirname, '../data/users.json'); // Adjust the path as necessary
  }

  public registerUser(user: User): void {
    // Here, you would typically perform validation checks
    if (!user.username || !user.password || !user.email) {
      console.error("All fields are required for registration.");
      return;
    }

    // In a real application, you should also check if the user already exists

    // Write the user data to the JSON file
    writeToJsonFile(this.usersFilePath, user);
  }
}

export default RegistrationController;
