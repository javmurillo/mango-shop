import { Badge, Card } from 'react-bootstrap';
import styled from 'styled-components';
import * as ArticleTypes from '../../store/types/articles.types';

const StyledPriceWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledCurrentPrice = styled.span`
  color: green;
  font-size: 20px;
  margin-left: 6px;
`;

const StyledOldPrice = styled.span`
  color: darkred;
  text-decoration: line-through;
`;

export const Article = (props: { article: ArticleTypes.Article }) => {
  const { article } = props;
  return (
    <Card style={{ width: '16rem', margin: '2rem' }}>
      <Card.Img variant="top" src={article.img} />
      <Card.Body>
        <Card.Title>{article.name}</Card.Title>
        <Card.Text>{article.description}</Card.Text>
      </Card.Body>
      <Card.Footer
        className="text-muted"
        style={{
          padding: '2px',
          background: 'transparent',
          textAlign: 'center',
          border: 'none',
        }}
      >
        {article.oldPrice ? <Badge variant="success">¡Oferta!</Badge> : null}
      </Card.Footer>
      <Card.Footer className="text-muted">
        <StyledPriceWrapper>
          {article.oldPrice ? (
            <StyledOldPrice>{article.oldPrice} €</StyledOldPrice>
          ) : null}

          <StyledCurrentPrice>{article.currentPrice} €</StyledCurrentPrice>
        </StyledPriceWrapper>
      </Card.Footer>
    </Card>
  );
};
