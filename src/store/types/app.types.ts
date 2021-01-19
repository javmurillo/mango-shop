import { ArticlesState } from '../reducers/articles/articles.reducer';
import { RangeDataState } from '../reducers/range/range-data.reducer';

export interface ApplicationState {
  articles: ArticlesState;
  rangeData: RangeDataState;
}
