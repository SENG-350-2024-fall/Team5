import { LOGIN } from "../../interfaces/login"; // Adjust the path as necessary
import { fetchData } from "../../helpers/utilities";

const filePath = "src/mockedData/Login.json";
export default class LoginController {
  // Finds a specific user by their username
  private static async findUserByUsername(username: String): Promise<LOGIN | null> {
    const userData = await fetchData(filePath);
    const users = userData.userLogins;
    return users.find((user: LOGIN) => user.username === username) || null;
  }

  // Validates user credentials by checking username and password
  public static async validateUser(
    username: String,
    password: String,
  ): Promise<boolean> {
    const user = await this.findUserByUsername(username);
    return user !== null && user.password === password;
  }
}
