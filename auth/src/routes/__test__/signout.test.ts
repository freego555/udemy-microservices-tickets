import request from 'supertest';
import { app } from '../../app';

it('clears the cookie after signing out', async () => {
  let response = await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(201);

  expect(response.get('Set-Cookie')).toBeTruthy();

  response = await request(app).post('/api/users/signout').send({}).expect(200);

  expect(response.get('Set-Cookie')[0]).toContain('session=;');
});
