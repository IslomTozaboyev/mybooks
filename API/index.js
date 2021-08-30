import axios from "axios";

const list = "hardcover-nonfiction";
const apiKey = `0nG5do2caU59G7F2PT1eRQD0RAsaX5Du`;
const baseUrl = `https://api.nytimes.com/svc/books/v3`;
const urlList = `${baseUrl}/lists/names.json?api-key=${apiKey}`;

const getList = async () => {
  try {
    const res = await axios.get(urlList);
    return { success: true, data: res.data };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
};

const getBooks = async (category = list) => {
  try {
    const res = await axios.get(
      `${baseUrl}/lists/current/${category}.json?api-key=${apiKey}`
    );
    return { success: true, data: res.data };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
};

export { getList, getBooks };
