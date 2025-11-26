const request = require('supertest');
const app = require('../src/index');

describe('Simple route tests', () => {
  test('GET / should return welcome message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toMatch(/Welcome to MyApp/);
  });

  test('GET /app1 should return App1 response', async () => {
    const res = await request(app).get('/app1');
    expect(res.statusCode).toBe(200);
    expect(res.text).toMatch(/App1 response/);
  });

  test('GET /app2 should return App2 response', async () => {
    const res = await request(app).get('/app2');
    expect(res.statusCode).toBe(200);
    expect(res.text).toMatch(/App2 response/);
  });
});
