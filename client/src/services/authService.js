import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const loginUser = async (phone, password) => {
  const response = await axios.post(`${API_URL}/login`, {
    phone,
    password
  });

  return response.data;
};
