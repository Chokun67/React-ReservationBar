// api.js

import axios from "axios"; // นำเข้า Axios library

const API_URL = "http://10.32.97.113:7000/api-customer";
// const headers = {
//   'Content-Type': 'application/json',
// };

export const API = {
  postUserData: (data) => {
    const apiUrl = `${API_URL}/secret/member/register`;
    const headers = {
      "Content-Type": "application/json",
    };
    return axios.post(apiUrl, data, headers);
  },

  user_login: (data) => {
    const apiUrl = `${API_URL}/secret/member/login`;
    const headers = {
      "Content-Type": "application/json",
    };
    return axios.post(apiUrl, data, {headers});
  },

  fetchPersonaleData: (token) => {
    const customHeaders = {
      Authorization: `Bearer ${token}`,
    };
    return axios.get(`${API_URL}/secret/member/personal-info`, {
      headers: customHeaders,
    });
  },

  fetchTableData: (token) => {
    const customHeaders = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return axios.get(`${API_URL}/bar/table/get-table/2020-10-03`, {
      headers: customHeaders,
    });
  },
  requestMusic: (token,data) => {
    console.log(token);
    console.log(data);
    const apiUrl = `${API_URL}/bar/soung/request`;
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return axios.put(apiUrl, data, { headers });
  },
  reserveTable: (token,image,drinkId,tableId,arrivalDate) => {
    
    const formData = new FormData();
    formData.append('statement', image);
    formData.append('drink_id', drinkId);
    formData.append('table_id', tableId);
    formData.append('arrival', arrivalDate);
    
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`, // เปลี่ยนเป็นโทเคนที่ถูกอนุญาตให้เข้าถึง API ของคุณ
        'Content-Type': 'multipart/form-data',
      },
    };
    const apiUrl = `${API_URL}/bar/table/reservation`;
    
    return axios.post(apiUrl, formData, config)
    .then((response) => {
      console.log('POST สำเร็จ:', response.data);
    })
    .catch((error) => {
      console.error('POST ผิดพลาด:', error);
    });
  },

};
