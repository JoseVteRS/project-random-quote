import { API_URL } from "../../../constants/api";

export const getQuote = async (param: string) => {
  const FETCH_OPTIONS = {
    method: "GET",
  };
  try {
    const response = await fetch(`${API_URL}${param}`, FETCH_OPTIONS);
    if (response.ok) return response.json();
  } catch (error) {
    console.log(error);
  }
};


