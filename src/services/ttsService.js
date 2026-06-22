import axios from "axios";

const API_URL =
  "http://localhost:5000";

export const getVoices =
  async () => {
    const response =
      await axios.get(
        `${API_URL}/api/tts/voices`
      );

    return response.data;
  };

export const generateSpeech =
  async (payload) => {
    const response =
      await axios.post(
        `${API_URL}/api/tts/generate`,
        payload
      );

    return response.data;
  };