import { ArticlesState } from '../../store/reducers/articles/articles.reducer';
import { RangeDataState } from '../../store/reducers/range/range-data.reducer';
import { ArticleDispatchType } from '../../store/types/articles.types';
import { RangeDataDispatchType } from '../../store/types/range-data.types';

export interface FixedValuesRangeProps {
  articles: ArticlesState;
  rangeData: RangeDataState;
  onInitArticles: () => ArticleDispatchType;
  onFilterArticles: (min: number, max: number) => ArticleDispatchType;
  onInitRangeData: () => RangeDataDispatchType;
}
