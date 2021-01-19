import { Component } from 'react';
import { Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { ArticlesList } from '../../components/ArticlesList/ArticlesList';
import Range from '../../components/Range/Range';
import { CustomSpinner } from '../../components/Spinner/Spinner';
import {
  filterArticles,
  initArticles,
} from '../../store/reducers/articles/articles.actions';
import { initRangeData } from '../../store/reducers/range/range-data.actions';
import { ApplicationState } from '../../store/types/app.types';
import { ArticleDispatchType } from '../../store/types/articles.types';
import { RangeDataDispatchType } from '../../store/types/range-data.types';
import { NormalRangeProps } from './normal-range-props.interface';

const StyledSpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

class NormalRange extends Component<NormalRangeProps> {
  componentDidMount() {
    this.props.onInitArticles();
    this.props.onInitRangeData();
  }

  private filterArticles = (min: number, max: number): void => {
    this.props.onFilterArticles(min, max);
  };

  render(): JSX.Element {
    const { articles, error } = this.props.articles;
    let articlesJsx = (
      <CustomSpinner error={error} message="Articles can't be loaded!" />
    );

    if (articles) {
      articlesJsx = <ArticlesList articlesList={articles} />;
    }
    return (
      <div>
        <Range
          min={this.props.rangeData.min || 0}
          max={this.props.rangeData.max || 100}
          step={5}
          onFilterArticles={this.filterArticles}
          disableInputs={true}
        />
        {articlesJsx}
      </div>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => {
  return {
    articles: {
      articles: state.articles && state.articles.articles,
      error: state.articles && state.articles.error,
    },
    rangeData: {
      min: state.rangeData.min,
      max: state.rangeData.max,
      rangeValues: state.rangeData.rangeValues,
      error: state.rangeData.error,
    },
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onInitArticles: (): ArticleDispatchType => dispatch(initArticles()),
    onFilterArticles: (min: number, max: number): ArticleDispatchType =>
      dispatch(filterArticles(min, max)),
    onInitRangeData: (): RangeDataDispatchType => dispatch(initRangeData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NormalRange);
