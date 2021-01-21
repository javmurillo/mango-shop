import { cleanup } from '@testing-library/react';
import { getRangeData } from './range.service';

afterEach(cleanup);

describe('range API tests', (): void => {
  test('the response for the request is an array with status 200 with correct headers', async () => {
    const response = await getRangeData();
    const { headers } = response;
    const { min, max, rangeValues } = response.data;
    expect(!isNaN(min)).toBe(true);
    expect(!isNaN(max)).toBe(true);
    expect(rangeValues).toBeInstanceOf(Array);
    expect(headers['content-type']).toEqual('application/json; charset=UTF-8');
  });
});
