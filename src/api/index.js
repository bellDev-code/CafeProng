import { stringify, parse } from 'query-string';
import axios from 'axios';

let isOnline = true;

export const ERROR_MESSAGE_NO_NETWORK = 'No network connection';

window.addEventListener('offline', () => {
    isOnline = false;
});

window.addEventListener('online', () => {
    isOnline = true;
});

const api = async ({ url, params = '', method = 'get', headers = {}, data = '', cancelTokenSource }) => {
    const newParams = parse(stringify(params, { arrayFormat: 'comma' }));
    try {
        const response = await axios({
            method,
            url,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                ...headers
            },
            params: newParams,
            data,
            cancelToken: cancelTokenSource?.token
        });

        return response && response.data;
    } catch (error) {
        if (isOnline) {
            throw error;
        } else {
            const offlineResponse = {
                response: {
                    data: {
                        userMessage: ERROR_MESSAGE_NO_NETWORK
                    }
                }
            };

            throw offlineResponse;
        }
    }
};

export default api;