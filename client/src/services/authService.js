import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

export const loginUser = async (phone, password) => {
  const response = await axios.post(`${API_URL}/login`, {
    phone,
    password
  });

  return response.data;
};
