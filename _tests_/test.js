const app = require("../server");
const supertest = require("supertest");
const request = supertest(app);

it("Posts to the email endpoint", async done => {
  const response = await request.post("/email").send({
    to: "ryanelliotdoner@gmail.com",
    to_name: "Ryan",
    from: "Brightwheel@gmail.com",
    from_name: "Ryan",
    subject: "Brightwheel Purchase",
    body: "<h1>hi</h1><p>test</p>"
  });

  expect(response.status).toBe(200);
  done();
});
