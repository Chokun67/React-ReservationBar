import axios from "axios"; // นำเข้า Axios library

const API_URL = "http://10.32.99.131:7000/api-customer";

export const API = {

  user_register: (data) => {
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

  user_updateinfo: (data,token) => {
    const apiUrl = `${API_URL}/secret/member/update-personal-infor`;
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return axios.put(apiUrl, data, {headers});
  },

    ////////////// Table Reserve ///////////////////

  fetchTableData: (token,selectedDate) => {
    const customHeaders = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    console.log(selectedDate);
    return axios.get(`${API_URL}/bar/table/get-table/${selectedDate}`, {
      headers: customHeaders,
    });
  },

  reserveTable: (token,image,drinkId,tableId,arrivalDate) => {
    const formData = new FormData();
    formData.append('statement', image);
    formData.append('drink_id', drinkId);
    formData.append('table_id', tableId);
    formData.append('arrival', arrivalDate);
    print(arrivalDate);
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`, // เปลี่ยนเป็นโทเคนที่ถูกอนุญาตให้เข้าถึง API ของคุณ
        'Content-Type': 'multipart/form-data',
      },
    };
    const apiUrl = `${API_URL}/bar/table/reservation`;
    
    return axios.post(apiUrl, formData, config)
  },

  getMyReservation: (token) => {
    const customHeaders = {
      Authorization: `Bearer ${token}`,
    };
    return axios.get(`${API_URL}/bar/table/get-my-reservation/all`, {
      headers: customHeaders,
    });
  },

  getDetailReservation: (token) => {
    const customHeaders = {
      Authorization: `Bearer ${token}`,
    };
    return axios.get(`${API_URL}/bar/table/get-detail-reservation`, {
      headers: customHeaders,
    });
  },
  user_refund: (token,data) => {
    const apiUrl = `${API_URL}/bar/table/refund-money`;
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    return axios.post(apiUrl, data, {headers});
  },


  ////////////// music request ///////////////////
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
  

  getpersonalreserved: (token) => {
    const customHeaders = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return axios.get(`${API_URL}/bar/soung/personal-reserved-status`, {
      headers: customHeaders,
    });
  },

};
