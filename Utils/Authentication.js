import { WEB_API_KEY } from "../components/ApiKey";
import axios from "axios";

export async function CreateUser(email, password) {
  try {
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${WEB_API_KEY}`,
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getUser(email, password) {
  try {
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${WEB_API_KEY}`,
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}
