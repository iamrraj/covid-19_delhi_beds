const api = `https://145.239.135.178:8888/api/1/`;

const config = {
  apiUrl: {
    beds: `${api}hospital/bed/data/`,
    hospitalData: `${api}hospital/details/`,
  },

  head: {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  },
};

export default config;
