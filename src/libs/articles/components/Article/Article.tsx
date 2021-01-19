import { Badge, Card } from 'react-bootstrap';
import styled from 'styled-components';
import { Article as ArticleDto } from '../../models/article';

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

const StyledCard = styled(Card)`
  width: 16rem;
  margin: 2rem;
`;

const StyledCardFooter = styled(Card.Footer)`
  padding: 2px;
  background: transparent;
  text-align: center;
  border: none;
`;

export const Article = (props: { article: ArticleDto }) => {
  const { article } = props;
  return (
    <StyledCard>
      <Card.Img variant="top" src={article.img} />
      <Card.Body>
        <Card.Title>{article.name}</Card.Title>
        <Card.Text>{article.description}</Card.Text>
      </Card.Body>
      <StyledCardFooter>
        {article.oldPrice ? <Badge variant="success">¡Oferta!</Badge> : null}
      </StyledCardFooter>
      <Card.Footer className="text-muted">
        <StyledPriceWrapper>
          {article.oldPrice ? (
            <StyledOldPrice>{article.oldPrice} €</StyledOldPrice>
          ) : null}
          <StyledCurrentPrice>{article.currentPrice} €</StyledCurrentPrice>
        </StyledPriceWrapper>
      </Card.Footer>
    </StyledCard>
  );
};
