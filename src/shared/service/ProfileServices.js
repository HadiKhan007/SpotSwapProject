import axios from 'axios';
import {BASE_URL, ENDPOINTS} from '../exporter';
import {GetToken} from '../utilities/headers';

// Get profile
export const userProfile = async params => {
  const res = await axios.post(`${BASE_URL}${ENDPOINTS.GET_PROFILE}`, params, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      auth_token: await GetToken(),
    },
  });
  return res.data;
};

// Update profile
export const updateUserProfile = async params => {
  const res = await axios.post(
    `${BASE_URL}${ENDPOINTS.UPDATE_PROFILE}`,
    params,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        auth_token: await GetToken(),
      },
    },
  );
  return res.data;
};

// Get car info
export const carInfo = async params => {
  const res = await axios.post(`${BASE_URL}${ENDPOINTS.GET_CAR_IFNO}`, params, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      auth_token: await GetToken(),
    },
  });
  return res.data;
};

// Update car info
export const carInfoUpdate = async params => {
  const res = await axios.post(
    `${BASE_URL}${ENDPOINTS.UPDATE_CAR_INFO}`,
    params,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        auth_token: await GetToken(),
      },
    },
  );
  return res.data;
};

// Get quick chat
export const quickChats = async params => {
  const res = await axios.get(`${BASE_URL}${ENDPOINTS.QUICK_CHATS}`, params, {
    headers: {
      Accept: 'application/json',
      auth_token: await GetToken(),
    },
  });
  return res.data;
};

// Add quick chat
export const addChat = async params => {
  const res = await axios.post(`${BASE_URL}${ENDPOINTS.ADD_CHAT}`, params, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      auth_token: await GetToken(),
    },
  });
  return res.data;
};

// Edit quick chat
export const editChat = async params => {
  const res = await axios.post(`${BASE_URL}${ENDPOINTS.EDIT_CHAT}`, params, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      auth_token: await GetToken(),
    },
  });
  return res.data;
};

// Remove quick chat
export const removeChat = async params => {
  const res = await axios.post(`${BASE_URL}${ENDPOINTS.REMOVE_CHAT}`, params, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      auth_token: await GetToken(),
    },
  });
  return res.data;
};

//Get static pages
export const staticPagesRes = async endpoint => {
  const res = await axios.get(`${BASE_URL}static_pages/${endpoint}`, {
    headers: {
      Accept: 'application/json',
      Authorization: await GetToken(),
    },
  });
  return res.data;
};
