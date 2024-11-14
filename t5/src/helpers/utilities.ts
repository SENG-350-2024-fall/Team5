interface Data {
  [key: string]: any;
}

export const fetchData = async (filePath: string) => {
  const response = await fetch(
    `/api?filePath=${encodeURIComponent(filePath)}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  const resJSON = await response.json();
  const data = resJSON.data;
  if (data === null) {
    throw new Error("Failed to load data");
  }
  return data;
};

export const postData = async (filePath: string, data: Data) => {
  const response = await fetch(
    `/api?filePath=${encodeURIComponent(filePath)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ body: data }),
    },
  );
  const resJSON = await response.json();
  if (resJSON.status !== 200) {
    throw new Error("Failed to post data");
  }
  return resJSON;
};
