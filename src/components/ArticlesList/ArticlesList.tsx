import styled from 'styled-components';
import * as ArticleTypes from '../../store/types/articles.types';
import { Article } from '../Article/Article';
import { ArticlesListProps } from './articles-list-props.interface';

const StyledDiv = styled.div`
  justify-content: center;
`;

export const ArticlesList = (props: ArticlesListProps) => {
  return (
    <StyledDiv className="row">
      {props.articlesList.map((article: ArticleTypes.Article) => {
        return <Article article={article} key={article.id} />;
      })}
    </StyledDiv>
  );
};
