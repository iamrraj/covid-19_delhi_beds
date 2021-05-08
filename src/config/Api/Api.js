const api =
    !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
        ? process.env.REACT_APP_API_SERVER_DEVELOPMENT
        : process.env.REACT_APP_SERVER_URL;

const config = {
    apiUrl: {
        beds: `${api}hospital/bed/data/`,
        hospitalData: `${api}hospital/details/`
    },

    head: {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    }
};

export default config;
