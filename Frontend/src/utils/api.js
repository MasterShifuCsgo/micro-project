import axios from 'axios'

/**
 * @returns {import("axios").AxiosInstance}
 */
export function api() {
  return axios.create({
    baseURL: import.meta.env.VITE_BASE_API_URI || 'http://localhost:3000',
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 5000, // optional: auto-cancel requests after 5s
  })
}

const client = api();
export default client;


