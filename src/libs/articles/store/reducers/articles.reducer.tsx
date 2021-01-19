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

const initialState: ArticlesState = {
  error: false,
};

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

const fetchArticlesFailed = (state: ArticlesState): ArticlesState => {
  return {
    ...state,
    error: true,
  };
};

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

const articlesReducer = (
  state = initialState,
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

export default articlesReducer;
