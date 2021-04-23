import axios from 'axios';

const url = 'http://localhost:5000/posts'

export const fetchClients = () => axios.get(url);
export const fetchClient = (id) => axios.get(`${url}/${id}`);
export const createClient = (newPost) => axios.post(url, newPost);
export const updateClient = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deleteClient = (id) => axios.delete(`${url}/${id}`);