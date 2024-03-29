import { api } from "../api";
export async function getConfig(params) {
  const response = await api.get(
    `configuration?api_key=${process.env.REACT_APP_ACCESS_KEY}`
  );
  const data = response.data;
  return data;
}
