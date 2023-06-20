import axios from "axios";

const instance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  headers: { "Content-Type": "application/json" },
});

const setSessionIdHeader = (sessionId: string) => {
  instance.defaults.headers.Cookie = `JSESSIONID=${sessionId}`;
};

instance.interceptors.request.use(
  (config) => {
    console.log("Request:", config);
    return config;
  },
  (error) => {
    console.error("Request Error:", error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    console.log("Response:", response);

    return response;
  },
  (error) => {
    console.error("Response Error:", error);

    return Promise.reject(error);
  }
);

export {instance, setSessionIdHeader};
