import http from './http.js';

const API_URL = '/polls';

export const list = async () => {
  try {
    return await http.get(`${API_URL}`);
  } catch (error) {
    return error.response.data;
  }
};

export const get = async (id) => {
  try {
    return await http.get(`${API_URL}/${id}`);
  } catch (error) {
    return error.response.data;
  }
};

export const create = async (data) => {
  try {
    return await http.post(`${API_URL}`, data);
  } catch (error) {
    return error.response.data;
  }
};

export default {
  create,
  list,
  get,
};
