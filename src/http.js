import axios from "axios";
import { message } from "antd";

const baseURL = "https://d39fb633-bc3b-40a1-9d4b-7227e2c34e7c.mock.pstmn.io";

// 创建一个 Axios 实例
const instance = axios.create({
    baseURL: baseURL,
    timeout: 10000,
});

instance.interceptors.request.use(
    (config) => {
        // 在发送请求之前做些什么，比如添加认证信息
        // config.headers.Authorization = `Bearer ${yourToken}`;
        return config;
    },
    (error) => {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    async (response) => {
        // 非200的错误处理
        if (response?.data?.code !== "200") {
            message.error(response?.data?.msg);
            return response.data;
        }

        return response?.data?.result || null;
    },
    (error) => {
        // 处理错误响应，比如弹出错误提示、跳转登录页等
        const msg = error.response ? error.response.data : error.message;
        console.error("Axios error:", msg);
        message.error(msg);
        return Promise.reject(error);
    }
);

function request(options) {
    return new Promise((resolve, reject) => {
        instance(options).then((response) => {
            resolve(response);
        }).catch((error) => {
            reject(error);
        })
    })
}

export function get (url, params) {
    return request({
        method: "get",
        url,
        params
    })
}

export function post(url, data) {
    return request({
        method: 'post',
        url,
        data
    })
}


