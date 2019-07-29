import request from 'supertest';
import app from '../../../src/app';

describe('MovieController test suite', () => {
  test('will return 200 success on post request', async () => {
    const test = await request(app).post('/api/movies');
    expect(test.status).toBe(200);
    console.log(test.links);
  });
});
