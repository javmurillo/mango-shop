import {
  articlesInitialState,
  articlesReducer,
  ArticlesState,
} from './articles.reducer';
import {
  SetArticlesAction,
  FetchArticlesFailedAction,
  FilterArticlesAction,
} from '../../models/articles.types';
import { Article } from '../../models/article';
import { cleanup } from '@testing-library/react';

afterEach(cleanup);

describe('articles reducer', () => {
  test('articles state does not mutate with dummy action', () => {
    const action: any = {
      type: 'DUMMY_ACTION',
    }; // Any because this is not an ArticleAction, it is a dummy one which is not registered in the reducer.
    expect(articlesReducer(undefined, action)).toEqual(articlesInitialState);
    expect(articlesReducer(articlesInitialState, action)).toEqual(
      articlesInitialState
    );
  });

  test('returns correct state for SET_ARTICLES action', () => {
    const articleAction: SetArticlesAction = {
      type: 'SET_ARTICLES',
      payload: { articles: dummyArticles },
    };
    const expectedState: ArticlesState = {
      articles: dummyArticles,
      cachedArticles: dummyArticles,
      error: false,
    };
    expect(articlesReducer(undefined, articleAction)).toEqual(expectedState);
    expect(articlesReducer(articlesInitialState, articleAction)).toEqual(
      expectedState
    );
  });

  test('returns correct state for FETCH_ARTICLES_FAILED action', () => {
    const articleAction: FetchArticlesFailedAction = {
      type: 'FETCH_ARTICLES_FAILED',
    };
    const expectedState: ArticlesState = {
      error: true,
    };
    expect(articlesReducer(undefined, articleAction)).toEqual(expectedState);
    expect(articlesReducer(articlesInitialState, articleAction)).toEqual(
      expectedState
    );
  });

  test('returns correct state for FETCH_ARTICLES_FAILED action', () => {
    const articleAction: FetchArticlesFailedAction = {
      type: 'FETCH_ARTICLES_FAILED',
    };
    const expectedState: ArticlesState = {
      error: true,
    };
    expect(articlesReducer(undefined, articleAction)).toEqual(expectedState);
    expect(articlesReducer(articlesInitialState, articleAction)).toEqual(
      expectedState
    );
  });

  test('returns correct state for FILTER_ARTICLES action', () => {
    const filterArticlesAction: FilterArticlesAction = {
      type: 'FILTER_ARTICLES',
      payload: {
        max: 65,
        min: 35,
      },
    };
    const expectedStateAfterFilter1: ArticlesState = {
      articles: dummyArticles.filter(
        article =>
          article.currentPrice >= filterArticlesAction.payload.min &&
          article.currentPrice <= filterArticlesAction.payload.max
      ),
      cachedArticles: dummyArticles,
      error: false,
    };
    expect(
      articlesReducer(
        {
          error: false,
          articles: dummyArticles,
          cachedArticles: dummyArticles,
        },
        filterArticlesAction
      )
    ).toEqual(expectedStateAfterFilter1);
  });
});

const dummyArticles: Article[] = [
  {
    id: '1',
    name: 'Test article',
    currentPrice: 75,
    oldPrice: 90,
    description: 'Test description',
    img: 'Test image',
  },
  {
    id: '2',
    name: 'Test article',
    currentPrice: 50,
    oldPrice: 70,
    description: 'Test description',
    img: 'Test image',
  },
  {
    id: '3',
    name: 'Test article',
    currentPrice: 25,
    oldPrice: 50,
    description: 'Test description',
    img: 'Test image',
  },
];
