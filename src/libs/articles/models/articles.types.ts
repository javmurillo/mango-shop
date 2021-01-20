import { Action } from 'redux';
import { Article } from './article';

export const SET_ARTICLES = 'SET_ARTICLES';
export const FETCH_ARTICLES_FAILED = 'FETCH_ARTICLES_FAILED';
export const FILTER_ARTICLES = 'FILTER_ARTICLES';

export interface SetArticlesAction extends Action {
  type: typeof SET_ARTICLES;
  payload: { articles: Article[] };
}

export interface FetchArticlesFailedAction extends Action {
  type: typeof FETCH_ARTICLES_FAILED;
}

export interface FilterArticlesAction extends Action {
  type: typeof FILTER_ARTICLES;
  payload: { min: number; max: number };
}

export type ArticleAction =
  | SetArticlesAction
  | FetchArticlesFailedAction
  | FilterArticlesAction;

export type ArticleDispatchType = (args: ArticleAction) => ArticleAction;
