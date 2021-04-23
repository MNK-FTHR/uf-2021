import { GET, FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

export default (clients = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case GET:
      return action.payload;
    case CREATE:
      return [...clients, action.payload];
    case UPDATE:
      return clients.map((post) => (post._id === action.payload._id ? action.payload : post));
    case DELETE:
      return clients.filter((post) => post._id !== action.payload);
    default:
      return clients;
  }
};
