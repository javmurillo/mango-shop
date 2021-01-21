import { Article } from '../../models/article';
import {
  FETCH_ARTICLES_FAILED,
  FILTER_ARTICLES,
  SetArticlesAction,
  SET_ARTICLES,
  FilterArticlesAction,
  ArticleAction,
} from '../../models/articles.types';

export interface ArticlesState {
  articles?: Article[];
  cachedArticles?: Article[];
  error: boolean;
}

/**
 * State initialization
 */
export const articlesInitialState: ArticlesState = {
  error: false,
};

/**
 * @returns Updated state given an action.
 * @param state Current articles state.
 * @param action SetArticlesAction.
 */
const setArticles = (
  state: ArticlesState,
  action: SetArticlesAction
): ArticlesState => {
  return {
    ...state,
    articles: action.payload.articles,
    cachedArticles: action.payload.articles,
    error: false,
  };
};

/**
 * Sets the error property to true.
 * @returns Updated state.
 * @param state Current articles state.
 */
const fetchArticlesFailed = (state: ArticlesState): ArticlesState => {
  return {
    ...state,
    error: true,
  };
};

/**
 * Filters the articles
 * @returns Updated state.
 * @param state Current articles state.
 * @param action FilterArticlesAction
 */
const filterArticles = (
  state: ArticlesState,
  action: FilterArticlesAction
): ArticlesState => {
  const { min, max } = action.payload;
  return {
    ...state,
    articles:
      state.cachedArticles &&
      state.cachedArticles.filter(
        (article: Article) =>
          article.currentPrice >= min && article.currentPrice <= max
      ),
  };
};

/**
 * Articles reducer which handles dispatched actions.
 * @param state Current articles state.
 * @param action ArticlesAction.
 */
export const articlesReducer = (
  state = articlesInitialState,
  action: ArticleAction
): ArticlesState => {
  switch (action.type) {
    case SET_ARTICLES:
      return setArticles(state, action);
    case FETCH_ARTICLES_FAILED:
      return fetchArticlesFailed(state);
    case FILTER_ARTICLES:
      return filterArticles(state, action);
    default:
      return state;
  }
};
