import axios from 'axios';

const env = window._env_;

export default axios.create({
  baseURL: env && env.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export function noContentResponseValidator(response, message) {
  if (response.status === 204) {
    throw new Error(message);
  } else {
    return response.data;
  }
}
