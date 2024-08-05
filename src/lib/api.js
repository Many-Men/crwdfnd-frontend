const BASE_URL = 'https://b7f0-37-110-210-49.ngrok-free.app';

const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer 123'
};

export const get = async (endpoint) => {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: 'GET',
    headers
  });
  return response.json();
};

export const post = async (endpoint, data) => {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  });
  return response.json();
};

export const put = async (endpoint, data) => {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(data)
  });
  return response.json();
};

export const remove = async (endpoint) => {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: 'DELETE',
    headers
  });
  return response.json();
};