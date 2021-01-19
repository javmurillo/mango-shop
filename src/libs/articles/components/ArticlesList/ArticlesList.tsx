import styled from 'styled-components';
import { Article as ArticleDto } from '../../models/article';
import { Article } from '../Article/Article';
import { ArticlesListProps } from './articles-list-props.interface';

const StyledDiv = styled.div`
  justify-content: center;
`;

export const ArticlesList = (props: ArticlesListProps): JSX.Element => {
  return (
    <StyledDiv className="row">
      {props.articlesList.map((article: ArticleDto) => {
        return <Article article={article} key={article.id} />;
      })}
    </StyledDiv>
  );
};
