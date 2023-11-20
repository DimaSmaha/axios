const axios = require("axios");

const axiosConfig = axios.create({
  baseURL: "https://reqres.in/",
  //   headers: {"":""}
});

const registerUserBody = { email: "eve.holt@reqres.in", password: "pistol" };

function apiResponse(response) {
  console.log("--------Response start-------------------");
  console.log(response.data);
  console.log(response.status);
  console.log(response.statusText);
  console.log("--------Response end----------------");
}

async function getListOfUsers2(userBody) {
  const client = axiosConfig;
  return client
    .post("/api/register", userBody)
    .then((response) => {
      return apiResponse(response);
    })
    .catch((err) => {
      console.error(err);
    });
}

async function runRequests() {
  await getListOfUsers2(registerUserBody);
}

runRequests();

module.exports = { getListOfUsers2 };
