import * as fs from "fs";

interface Data {
  [key: string]: any;
}

export const writeToJsonFile = async (filePath: string, data: Data) => {
  const jsonData = JSON.stringify(data, null, 2); // Pretty-print with 2-space indentation
  try {
    await fs.promises.writeFile(filePath, jsonData, "utf8");
  } catch (err) {
    console.error("Error writing to JSON file", err);
  }
};

/*
    Usage:
    const data: Data = {
    name: "John Doe",
    age: 30,
    location: "New York"
    };
    writeToJsonFile("data.json", data);
*/

export const loadJsonIntoObject = async(
  filePath: string,
) => {
  try {
    const jsonData = await fs.promises.readFile(filePath, "utf8"); // Synchronously read file content
    const data = await JSON.parse(jsonData); // Parse JSON content into an object
    return data;
  } catch (error) {
    console.error("Error reading or parsing JSON file:", error);
    return null;
  }
};

/*
Usage:
const filePath = "data.json";
const dataObject = loadJsonIntoObject(filePath);

if (dataObject) {
  console.log("Data loaded into object:", dataObject);
}
*/
