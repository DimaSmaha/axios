const { registerUser } = require("./axios-requests-config");
const { matchers } = require("jest-json-schema");
expect.extend(matchers);
const registerUserBody = { email: "eve.holt@reqres.in", password: "pistol" };
const responseBody = { id: 4, token: "QpwL5tke4Pnpja7X4" };
const schema = {
  // $schema: "http://json-schema.org/draft-04/schema#",
  type: "object",
  properties: {
    id: {
      type: "integer",
    },
    token: {
      type: "string",
    },
  },
  required: ["id", "token"],
};

test("get status", async () => {
  const body = await registerUser(registerUserBody);
  expect(body.status).toBe(200);
});

test("get body", async () => {
  const body = await registerUser(registerUserBody);
  expect(body.data).toEqual(responseBody);
});

test("get json schema", async () => {
  const body = await registerUser(registerUserBody);
  expect(body.data).toMatchSchema(schema);
});
