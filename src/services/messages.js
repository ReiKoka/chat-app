import axios from "axios";
import { URL } from "./../utils/constants";

export const getSingleChatMessages = async (chatId) => {
  try {
    if (!chatId) throw new Error(`Chat Id is required`);

    const response = await axios.get(`${URL}/messages?chatId=${chatId}`);

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
