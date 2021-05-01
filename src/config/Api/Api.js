const config = {
  apiUrl: {
    beds: `${process.env.REACT_APP_SERVER_URL}hospital/bed/data/`,
    hospitalData: `${process.env.REACT_APP_SERVER_URL}hospital/details/`,
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
