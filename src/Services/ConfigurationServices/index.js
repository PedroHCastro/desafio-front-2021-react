import { api } from "../api";
export async function getConfig(params) {
  const response = await api.get(
    "configuration?api_key=ff7205d949c40dcb9fc509d150c9a07f"
  );
  const data = response.data;
  return data;
}
