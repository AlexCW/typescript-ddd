const request = require('supertest');
const app = require('../../../src/app');

describe('MovieController test suite', () => {
  test('will return 200 success on post request', async () => {
    const test = await request(app).post('/movies');
    expect(test.status).toBe(200);
  });
});
