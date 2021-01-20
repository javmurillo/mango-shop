import axios from 'axios';
import { Article } from '../../models/article';
import {
  ArticleDispatchType,
  FetchArticlesFailedAction,
  FETCH_ARTICLES_FAILED,
  FilterArticlesAction,
  FILTER_ARTICLES,
  SetArticlesAction,
  SET_ARTICLES,
} from '../../models/articles.types';

/**
 * @returns SetArticlesAction
 * @param articles Array of articles
 */
export const setArticles = (articles: Article[]): SetArticlesAction => {
  return {
    type: SET_ARTICLES,
    payload: { articles },
  };
};

/**
 * @returns FetchArticlesFailedAction
 */
export const fetchArticlesFailed = (): FetchArticlesFailedAction => {
  return {
    type: FETCH_ARTICLES_FAILED,
  };
};

/**
 * @returns FilterArticlesAction.
 * @param min Minimum value to filter.
 * @param max Maximun value to filter.
 */
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

/**
 * HTTP call to retrieve the articles.
 */
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
