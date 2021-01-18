import axios from 'axios';
import {
  Article,
  ArticleDispatchType,
  SetArticlesAction,
  FetchArticlesFailedAction,
  SET_ARTICLES,
  FETCH_ARTICLES_FAILED,
  FilterArticlesAction,
  FILTER_ARTICLES,
} from '../types/articles.types';

export const setArticles = (articles: Article[]): SetArticlesAction => {
  return {
    type: SET_ARTICLES,
    payload: { articles },
  };
};

export const fetchArticlesFailed = (): FetchArticlesFailedAction => {
  return {
    type: FETCH_ARTICLES_FAILED,
  };
};

export const filterArticles = (
  min: number,
  max: number
): FilterArticlesAction => {
  return {
    type: FILTER_ARTICLES,
    payload: {
      min,
      max,
    },
  };
};

export const initArticles = () => {
  return (dispatch: ArticleDispatchType) => {
    axios
      .get('https://demo4557431.mockable.io/articles')
      .then(response => {
        dispatch(setArticles(response.data));
      })
      .catch(error => {
        dispatch(fetchArticlesFailed());
      });
  };
};
