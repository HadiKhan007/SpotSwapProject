import axios from 'axios';
import {BASE_URL, ENDPOINTS} from '../exporter';
import {GetToken} from '../utilities/headers';

// Get profile
export const userProfile = async params => {
  const res = await axios.post(`${BASE_URL}${ENDPOINTS.LOGIN}.json`, params, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      auth_token: await GetToken(),
    },
  });
  return res.data;
};
