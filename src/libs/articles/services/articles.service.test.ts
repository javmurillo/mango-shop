import { cleanup } from '@testing-library/react';
import { getArticles } from './articles.service';

afterEach(cleanup);

describe('articles API tests', (): void => {
  test('the response for the request is an array with status 200 with correct headers', async () => {
    const response = await getArticles();
    const { data, status, headers } = response;
    expect(data).toBeInstanceOf(Array);
    expect(status).toEqual(200);
    expect(headers['content-type']).toEqual('application/json; charset=UTF-8');
  });
});
