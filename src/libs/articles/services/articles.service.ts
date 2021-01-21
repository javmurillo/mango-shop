import axios, { AxiosResponse } from 'axios';
import { Article } from '../models/article';
import { API_URL } from '../../../utils/app.constants';

export const getArticles = (): Promise<AxiosResponse<Article[]>> => {
  return axios.get(`${API_URL}/articles`);
};
