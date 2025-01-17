import { cleanup, render } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import { Article as ArticleDto } from '../../models/article';
import { Article } from './Article';

afterEach(cleanup);

const setup = () => {
  const utils = render(
    <Article article={testArticle} ariaLabel="article-card" />
  );
  const article = utils.getByLabelText('article-card');
  return {
    article,
    ...utils,
  };
};

describe('<Article/> tests', () => {
  test('renders correctly', () => {
    const { article } = setup();
    expect(article).toBeInTheDocument();
  });

  test('shoud match snapshot', () => {
    const testRendererJson = TestRenderer.create(
      <Article article={testArticle} />
    ).toJSON();
    expect(testRendererJson).toMatchSnapshot();
  });
});

const testArticle: ArticleDto = {
  id: '1',
  name: 'Test article',
  currentPrice: 75,
  oldPrice: 90,
  description: 'Test description',
  img: 'Test image',
};
