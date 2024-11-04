import {loadJsonIntoObject} from "../../helpers/interactWithJSONFile";
   
  import { LOGIN } from "../../mockedData/loginData"; // Adjust the path as necessary
  
  const LoginFile = "Login.json";
  
  export default class LoginController {
    // Loads all user login data from the JSON file
    private async loadUserLogins(): Promise<LOGIN[]> {
      const data = await loadJsonIntoObject(LoginFile);
      if (data === null) {
        throw new Error("Failed to load login data");
      }
      return data as LOGIN[];
    }
  
    // Finds a specific user by their username
    public async findUserByUsername(username: string): Promise<LOGIN | null> {
      const users = await this.loadUserLogins();
      console.log("find user");
      return users.find((user) => user.username === username) || null;
    }
  
    // Validates user credentials by checking username and password
    public async validateUser(username: string, password: string): Promise<boolean> {
      const user = await this.findUserByUsername(username);
      console.log("validate user");
      return user !== null && user.password === password;
    }
  }
  