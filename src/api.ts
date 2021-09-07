import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_HOST;
const API = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
});

const FileAPI = axios.create({
  baseURL,
  headers: { "Content-Type": "multipart/form-data" },
});

API.interceptors.request.use(
  async (axiosConfig) => {
    if (typeof sessionStorage !== "undefined") {
      if (sessionStorage.getItem("X-Agent-User")) {
        axiosConfig.headers["X-Agent-User"] = sessionStorage?.getItem(
          "X-Agent-User"
        );
      }
    }
    const token = localStorage.getItem("accessToken");
    if (token) {
      axiosConfig.headers["Authorization"] = `Bearer ${token}`;
    }
    return axiosConfig;
  },
  (error) => Promise.reject(error)
);

API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

FileAPI.interceptors.request.use(
  async (axiosConfig) => {
    if (typeof sessionStorage !== "undefined") {
      if (sessionStorage.getItem("X-Agent-User")) {
        axiosConfig.headers["X-Agent-User"] = sessionStorage?.getItem(
          "X-Agent-User"
        );
      }
    }
    const token = localStorage.getItem("accessToken");
    if (token) {
      axiosConfig.headers["Authorization"] = `Bearer ${token}`;
    }
    return axiosConfig;
  },
  (error) => Promise.reject(error)
);

FileAPI.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { API, FileAPI };
