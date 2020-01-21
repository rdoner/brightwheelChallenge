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

it("Missing to parameter in post to email endpoint", async done => {
  const response = await request.post("/email").send({
    to_name: "Ryan",
    from: "Brightwheel@gmail.com",
    from_name: "Ryan",
    subject: "Brightwheel Purchase",
    body: "<h1>hi</h1><p>test</p>"
  });

  expect(response.status).toBe(422);
  done();
});

it("Abnormal Email", async done => {
  const response = await request.post("/email").send({
    to: 'test',
    to_name: "Ryan",
    from: "Brightwheel",
    from_name: "Ryan",
    subject: "Brightwheel Purchase",
    body: "<h1>hi</h1><p>test</p>"
  });

  expect(response.status).toBe(422);
  done();
});

it("Get request", async done => {
  const response = await request.get("/email").send();

  expect(response.status).toBe(404);
  done();
});

it("Get request to wrong path", async done => {
  const response = await request.get("/").send();

  expect(response.status).toBe(404);
  done();
});

it("Post request to wrong path", async done => {
  const response = await request.post("/").send();

  expect(response.status).toBe(404);
  done();
});