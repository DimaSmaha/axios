const { registerUser } = require("./axios-requests-config");

const registerUserBody = { email: "eve.holt@reqres.in", password: "pistol" };

test("get status", async () => {
  const body = await registerUser(registerUserBody);
  expect(body.status).toBe(200);
});
