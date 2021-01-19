import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import App from './App';
import './index.css';
import articlesReducer, {
  ArticlesState,
} from './libs/articles/store/reducers/articles.reducer';
import rangeDataReducer, {
  RangeDataState,
} from './libs/range/store/reducers/range-data.reducer';
import reportWebVitals from './reportWebVitals';

export interface ApplicationState {
  articles: ArticlesState;
  rangeData: RangeDataState;
}

const rootReducer = combineReducers<ApplicationState>({
  articles: articlesReducer,
  rangeData: rangeDataReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
