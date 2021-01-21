import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {
  articlesReducer,
  ArticlesState,
} from '../libs/articles/store/reducers/articles.reducer';
import {
  rangeDataReducer,
  RangeDataState,
} from '../libs/range/store/reducers/range-data.reducer';

export interface ApplicationState {
  articles: ArticlesState;
  rangeData: RangeDataState;
}

/**
 * Root reducer initialization.
 */
export const rootReducer = combineReducers<ApplicationState>({
  articles: articlesReducer,
  rangeData: rangeDataReducer,
});

/**
 * Store initialization enabling redux dev tools..
 */
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
