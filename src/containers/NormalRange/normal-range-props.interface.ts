import { ArticlesState } from '../../store/reducers/articles/articles.reducer';
import { RangeDataState } from '../../store/reducers/range/range-data.reducer';
import { Article, ArticleDispatchType } from '../../store/types/articles.types';
import { RangeDataDispatchType } from '../../store/types/range-data.types';

export interface NormalRangeProps {
  articles: ArticlesState;
  rangeData: RangeDataState;
  onInitArticles: () => ArticleDispatchType;
  onFilterArticles: (min: number, max: number) => ArticleDispatchType;
  onInitRangeData: () => RangeDataDispatchType;
}
