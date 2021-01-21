import { Article } from '../../models/article';

export interface ArticlesListProps {
  articlesList: Article[];
  ariaLabel?: string;
}
