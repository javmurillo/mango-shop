import { cleanup, render } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import { Article as ArticleDto } from '../../models/article';
import { ArticlesList } from './ArticlesList';

afterEach(cleanup);

const setup = () => {
  const utils = render(
    <ArticlesList articlesList={testArticles} ariaLabel="articles-list" />
  );
  const input = utils.getByLabelText('articles-list');
  return {
    input,
    ...utils,
  };
};

describe('<ArticlesList/> tests', () => {
  test('renders correctly', () => {
    const { input } = setup();
    expect(input).toBeInTheDocument();
  });

  test('shoud match snapshot', () => {
    const tree = TestRenderer.create(
      <ArticlesList articlesList={testArticles} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
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
