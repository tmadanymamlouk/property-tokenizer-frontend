const request = require('request-promise');

class ApiService {
    getJSON(url, auth) {
        let requestOptions = {
            uri: url,
            json: true
        }

        if (auth && auth.username && auth.password) {
            requestOptions.auth = {
                username: auth.username,
                password: auth.password
            }
        }

        return request(requestOptions);
    }

    postJSON(url, payload, auth) {
        let requestOptions = {
            method: 'POST',
            uri: url,
            body: payload,
            json: true
        }

        if (auth && auth.username && auth.password) {
            requestOptions.auth = {
                username: auth.username,
                password: auth.password
            }
        }

        return request(requestOptions);
    }
}

export default new ApiService();