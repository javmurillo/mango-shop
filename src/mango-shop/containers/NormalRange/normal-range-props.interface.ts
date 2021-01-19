import { ArticleDispatchType } from '../../../libs/articles/models/articles.types';
import { ArticlesState } from '../../../libs/articles/store/reducers/articles.reducer';
import { RangeDataDispatchType } from '../../../libs/range/models/range-data.types';
import { RangeDataState } from '../../../libs/range/store/reducers/range-data.reducer';

export interface NormalRangeProps {
  articles: ArticlesState;
  rangeData: RangeDataState;
  onInitArticles: () => ArticleDispatchType;
  onFilterArticles: (min: number, max: number) => ArticleDispatchType;
  onInitRangeData: () => RangeDataDispatchType;
}
