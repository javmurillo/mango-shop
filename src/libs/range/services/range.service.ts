import axios, { AxiosResponse } from 'axios';
import { RangeData } from '../models/range-data';

import { API_URL } from '../../../utils/app.constants';

export const getRangeData = (): Promise<AxiosResponse<RangeData>> => {
  return axios.get(`${API_URL}/range-data`);
};
