import { Article, ArticleDispatchType } from '../../store/types/articles.types';

export interface FixedValuesRangeProps {
  articles: Article[];
  error: boolean;
  onInitArticles: () => ArticleDispatchType;
  onFilterArticles: (min: number, max: number) => ArticleDispatchType;
}
