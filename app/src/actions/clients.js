import { GET, FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getClients = () => async (dispatch) => {
    try {
      const { data } = await api.fetchClients();
  
      dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
      console.log(error);
    }
};

export const getClient = (id) => async (dispatch) => {
    try {
      const {data} = await api.getClient(id);
  
      dispatch({ type: GET, payload: data });
    } catch (error) {
      console.log(error);
    }
};

export const createClient = (client) => async (dispatch) => {
    try {
        const { data } = await api.createClient(client);

        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error);
    }
};
  
export const updateClient = (id, client) => async (dispatch) => {
    try {
      const { data } = await api.updateClient(id, client);
  
      dispatch({ type: UPDATE, payload: data });
    } catch (error) {
      console.log(error);
    }
};
  
  
export const deleteClient = (id) => async (dispatch) => {
    try {
      await api.deleteClient(id);
  
      dispatch({ type: DELETE, payload: id });
    } catch (error) {
      console.log(error);
    }
};