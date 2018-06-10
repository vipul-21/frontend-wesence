import axios from 'axios';
import {
  addItemUrl,
  getAllItemsUrl,
  removeItemUrl,
  updateItemUrl,
} from '../utils/libs';

export const addItem = item =>
  axios.post(addItemUrl, { item })
    .then(response => ({ status: response.status }))
    .catch(() => { throw new Error(); });

export const getAllItems = () =>
  axios.get(getAllItemsUrl)
    .then(response => ({ status: response.status, todoList: response.data }))
    .catch(() => { throw new Error(); });

export const removeItem = id =>
  axios.post(removeItemUrl, { id })
    .then(response => ({ status: response.status, id }))
    .catch(() => { throw new Error(); });

export const updateItem = item =>
  axios.post(updateItemUrl, { item })
    .then(response => ({ status: response.status }))
    .catch(() => { throw new Error(); });
