import axios from 'axios';
import {apiConfig, params} from './apiConfig';
import { IParams, IUser } from '../interfaces/usersInterfaces';

axios.defaults.baseURL = apiConfig.baseUrl;
const fetchUsers = async ( options?: IParams): Promise<IUser[]> => {
  const {
    data: { results },
  } = await axios.get('/', {params: {...params, ...options}});
  return results;
};
export default fetchUsers;