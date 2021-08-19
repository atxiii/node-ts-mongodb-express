const request = require('supertest');
import app from '../../app';

const name = 'KKK';
const newName = 'MMM';

describe('POST /api/genres/', () => {
  it('it must add a name to genres', async () => {
    const res = await request(app)
      .post('/api/genres')
      .send({ name: name });

    expect(res.statusCode).toEqual(200);
    expect(res.body[res.body.length - 1].name).toEqual(name);
  });
});

describe('Get /api/genres/:id', () => {
  it('it must return name which we already added by test', async () => {
    const res = await request(app).get(`/api/genres/6`);

    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual(name);
  });
});

describe('PUT /api/genres/:id', () => {
  it('it must update name which we already added by test', async () => {
    const res = await request(app)
      .put(`/api/genres/6`)
      .send({ name: newName });

    expect(res.statusCode).toEqual(200);
    expect(res.body.name).toEqual(newName);
  });
});
