const axios = require("axios");

axios.defaults.baseURL = "https://reqres.in/";
axios.defaults.headers.common["Authorization"] = "AUTH_TOKEN";
axios.defaults.headers.post["Content-Type"] = "application/json";

const userBody = { name: "Dima", job: "QA" };

function apiResponse(response) {
  console.log("--------Response start-------------------");
  console.log(response.data);
  console.log(response.status);
  console.log(response.statusText);
  console.log("--------Response end----------------");
}

async function getListOfUsers(endpoint, page) {
  return axios
    .get(endpoint, { params: { page: page } })
    .then((response) => {
      return apiResponse(response);
    })
    .catch((err) => {
      console.error(err);
    });
}

async function createSingleUser(endpoint, body) {
  return axios
    .post(endpoint, body)
    .then((response) => {
      return apiResponse(response);
    })
    .catch((err) => {
      console.error(err);
    });
}

async function fullyUpdateTheUser(endpoint, body) {
  return axios
    .put(endpoint, body)
    .then((response) => {
      return apiResponse(response);
    })
    .catch((err) => {
      console.error(err);
    });
}

async function partiallyUpdateTheUser(endpoint, body) {
  return axios
    .put(endpoint, body)
    .then((response) => {
      return apiResponse(response);
    })
    .catch((err) => {
      console.error(err);
    });
}

async function deleteTheUser(endpoint) {
  return axios
    .delete(endpoint)
    .then((response) => {
      return apiResponse(response);
    })
    .catch((err) => {
      console.error(err);
    });
}

async function runRequests() {
  await getListOfUsers("/api/users", 1);
  await createSingleUser("/api/users", userBody);
  await fullyUpdateTheUser("/api/users/2", userBody);
  await partiallyUpdateTheUser("/api/users/2", userBody);
  await deleteTheUser("/api/users/2");
}

runRequests();
