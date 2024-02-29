import { getHttpBaseUrl } from "@configs/env";
import axios from "axios";

const axiosClient = axios.create({
    baseURL: getHttpBaseUrl(),
    withCredentials: true,
});


axiosClient.interceptors.response.use(res => res, async (err) => {
    const refreshUrl = `${getHttpBaseUrl()}/token/refresh`;
    const { config, response: { status } } = err;

    if (config.url == refreshUrl || config.sent || status !== 401) {
        return Promise.reject(err);
    }
    config.sent = true;
    await axiosClient.post("/token/refresh");
    return axios(config);
});
export { axiosClient }; 