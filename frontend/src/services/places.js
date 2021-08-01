import axios from "axios";

const API = "http://localhost:3000"
const API2 = "http://localhost:3001"

export async function users(params) {
    const data = await axios.get(`${API}/users`, { params });
    return data;
  }
export async function places(params) {
  const data = await axios.get(`${API2}/places`, { params });
  return data;
}