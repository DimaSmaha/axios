const axios = require("axios");

// axios
//   .get("https://reqres.in/api/users?page=2")
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// axios
//   .get("https://reqres.in/api/users", {
//     params: {
//       page: 1,
//     },
//   })
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// axios
//   .post("https://reqres.in/api/users", {
//     name: "morpheus",
//     job: "leader",
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

function createUser() {
  return axios
    .post("https://reqres.in/api/users", {
      name: "morpheus",
      job: "leader",
    })
    .then(function (response) {
      // console.log(response);
      console.log(response.data);
      console.log(response.status);
      console.log(response.statusText);
      // console.log(response.headers);
      // console.log(response.config);
      // console.log(response.request);
    })
    .catch(function (error) {
      console.log(error);
    });
}

createUser();
