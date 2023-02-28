const BASE_URL = 'https://project-express-api-production.up.railway.app';

export const fetchData = async (endpoint) => {
  const response = await fetch(`${BASE_URL}${endpoint}`);
  const data = await response.json();
  if (!data) {
    alert('Something is wrong!');
  }
  return data;
};
