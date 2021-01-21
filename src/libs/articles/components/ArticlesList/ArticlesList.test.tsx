import { cleanup, render } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import { Article as ArticleDto } from '../../models/article';
import { ArticlesList } from './ArticlesList';

afterEach(cleanup);

const setup = () => {
  const utils = render(
    <ArticlesList articlesList={testArticles} ariaLabel="articles-list" />
  );
  const articleList = utils.getByLabelText('articles-list');
  return {
    articleList,
    ...utils,
  };
};

describe('<ArticlesList/> tests', () => {
  test('renders correctly', () => {
    const { articleList } = setup();
    expect(articleList).toBeInTheDocument();
  });

  test('shoud match snapshot', () => {
    const testRendererJson = TestRenderer.create(
      <ArticlesList articlesList={testArticles} />
    ).toJSON();
    expect(testRendererJson).toMatchSnapshot();
  });
});

const testArticles: ArticleDto[] = [
  {
    id: '1',
    name: 'Test article',
    currentPrice: 75,
    oldPrice: 90,
    description: 'Test description',
    img: 'Test image',
  },
  {
    id: '2',
    name: 'Test article',
    currentPrice: 50,
    oldPrice: 70,
    description: 'Test description',
    img: 'Test image',
  },
  {
    id: '3',
    name: 'Test article',
    currentPrice: 25,
    oldPrice: 50,
    description: 'Test description',
    img: 'Test image',
  },
];
