const getListOfUsers2 = require("./axios-requests-config");

const registerUserBody = { email: "eve.holt@reqres.in", password: "pistol" };

test("the data is peanut butter", async () => {
  const data = await getListOfUsers2(registerUserBody);
  expect(data).toBe("peanut butter");
});
