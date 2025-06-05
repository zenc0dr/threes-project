import axios from 'axios';
import md5 from 'md5';

export function createApi(
    {
        authToken = () => null,
        onPreloader = () => {},
        onMessages = () => {},
        onConfirm = () => {},
    }
) {
    const requests_register = {}

    return function api(opts) {
        const data = opts.data || null;
        const axios_options = authToken() ? {
                withCredentials: true,
                headers: {
                    ThreesAuth: authToken()
                },
            } : null

        const api_url = opts.api ? `/threes.api/${opts.api}` : opts.url
        const request_key = md5(api_url + JSON.stringify(data))

        if (requests_register[request_key]) {
            return;
        }

        console.log(`Threes query [${request_key}]: ${api_url}`, data)

        requests_register[request_key] = setTimeout(() => {
            if (requests_register[request_key]) {
                onPreloader(true);
            }
        }, 2000);

        const handleResponse = (response) => {
            delete requests_register[request_key];
            onPreloader(false);

            if (response.messages) {
                onMessages(response.messages);
            }

            if (response.confirm) {
                onConfirm(response.confirm, opts.then);
                return;
            }

            if (opts.then) {
                opts.then(response);
            }
        };

        const handleError = (error) => {
            delete requests_register[request_key];
            onPreloader(false);
            console.error(error);
        };

        if (!data) {
            axios.get(api_url, axios_options)
                .then(res => handleResponse(res.data)).catch(handleError)
        } else {
            axios.post(api_url, data, axios_options)
                .then(res => handleResponse(res.data)).catch(handleError)
        }
    };
}
