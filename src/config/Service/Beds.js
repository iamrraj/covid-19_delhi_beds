import config from "../Api/Api";

// export async function getCar(value) {
//   let products = new Promise((resolve, reject) => {
//     fetch(
//       `${config.apiUrl.beds}?name__icontains==${value ? value : ""}`,
//       config.head
//     )
//       .then((response) => {
//         resolve(response.json());
//       })
//       .catch((reject) => console.log(reject));
//   });
//   return products;
// }

// if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
//   // development URL
//   axios.defaults.baseURL = `${process.env.REACT_APP_API_SERVER_DEVELOPMENT}/api/v1`;
// } else {
//   // production URL
//   axios.defaults.baseURL = `${process.env.REACT_APP_API_SERVER_PRODUCTION}/api/v1`;
// }

export async function getbedInfo(setdata, setLoading, value) {
  fetch(
    `${config.apiUrl.beds}?name__icontains=${value ? value : ""}`,
    config.head
  )
    .then((response) => response.json())
    .then((data) => {
      setdata(data);
      setLoading(false);
    });
}

export async function getHospitalDetails(setdata, setLoading, value) {
  fetch(
    `${config.apiUrl.hospitalData}?name__icontains=${value ? value : ""}`,
    config.head
  )
    .then((response) => response.json())
    .then((data) => {
      setdata(data);
      setLoading(false);
    });
}
