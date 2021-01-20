import { Alert } from 'react-bootstrap';
import styled from 'styled-components';
import { Article as ArticleDto } from '../../models/article';
import { Article } from '../Article/Article';
import { ArticlesListProps } from './articles-list-props.interface';

const StyledDiv = styled.div`
  justify-content: center;
`;

const StyledAlert = styled(Alert)`
  margin-top: 2rem;
`;

/**
 * ArticlesList component which iterates over the props to show one card per article.
 * @param props ArticlesListProps
 */
export const ArticlesList = (props: ArticlesListProps): JSX.Element => {
  if (props.articlesList.length === 0) {
    return (
      <StyledAlert variant="dark">
        There is no articles to show matching the given filters!
      </StyledAlert>
    );
  }
  return (
    <StyledDiv className="row">
      {props.articlesList.map((article: ArticleDto) => {
        return <Article article={article} key={article.id} />;
      })}
    </StyledDiv>
  );
};
