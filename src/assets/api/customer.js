import axios from "axios"; // นำเข้า Axios library

const API_URL = "http://10.32.99.131:7000";

export const API_Customer = {
  admin_login: (data) => {
    const apiUrl = `${API_URL}/login`;
    const headers = {
      "Content-Type": "application/json",
    };
    return axios.post(apiUrl, data, headers);
  },

  customer_confirm: (token,data) => {
    const apiUrl = `${API_URL}/api-owner/confirm`;
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    return axios.put(apiUrl, data, { headers });
  },

  getAllUser: (token) => {
    const apiUrl = `${API_URL}/api-owner/get-all-user`;
    const customHeaders = {
      Authorization: `Bearer ${token}`,
    };
    return axios.get(apiUrl, { customHeaders });
  },

  getDetailResevation: (token) => {
    const id = "all";
    const apiUrl = `${API_URL}/api-owner/detail-reservation/${id}`;
    const customHeaders = {
      Authorization: `Bearer ${token}`,
    };
    return axios.get(apiUrl, { customHeaders });
  },

  getCustomerCancel: (token) => {
    const apiUrl = `${API_URL}/api-owner/get-customer-cancel`;
    const customHeaders = {
      Authorization: `Bearer ${token}`,
    };
    return axios.get(apiUrl, { customHeaders });
  },

  customer_refundconfirm: (token, data) => {
    const apiUrl = `${API_URL}/api-owner/refund-confirm`;
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return axios.put(apiUrl, data, { headers });
  },

  queueMusic: (token) => {
    console.log(token);
    const apiUrl = `${API_URL}/api-customer/bar/soung/queue-list`;
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return axios.get(apiUrl, { headers });
  },

  songPlay: (data, token) => {
    const apiUrl = `${API_URL}/api-owner/song-play`;
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return axios.put(apiUrl, data, { headers });
  },
};
