import { Component } from 'react';
import { Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { ArticlesList } from '../../components/ArticlesList/ArticlesList';
import Range from '../../components/Range/Range';
import {
  filterArticles,
  initArticles,
} from '../../store/reducers/articles.actions';
import { ArticleDispatchType } from '../../store/types/articles.types';
import { NormalRangeProps } from './normal-range-props.interface';

const StyledSpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

class NormalRange extends Component<NormalRangeProps> {
  componentDidMount() {
    this.props.onInitArticles();
  }

  private filterArticles = (min: number, max: number): void => {
    this.props.onFilterArticles(min, max);
  };

  render(): JSX.Element {
    const { articles, error } = this.props;
    let articlesJsx = error ? (
      <p>Articles can't be loaded!</p>
    ) : (
      <StyledSpinnerWrapper>
        <Spinner
          animation="border"
          role="status"
          style={{ textAlign: 'center' }}
        >
          <span className="sr-only">Loading...</span>
        </Spinner>
      </StyledSpinnerWrapper>
    );

    if (articles) {
      articlesJsx = <ArticlesList articlesList={articles} />;
    }
    return (
      <div>
        <Range
          min={0}
          max={100}
          step={5}
          onFilterArticles={this.filterArticles}
          disableInputs={true}
        />
        {articlesJsx}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    articles: state.articles && state.articles.articles,
    error: state.articles && state.articles.error,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onInitArticles: (): ArticleDispatchType => dispatch(initArticles()),
    onFilterArticles: (min: number, max: number): ArticleDispatchType =>
      dispatch(filterArticles(min, max)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NormalRange);
