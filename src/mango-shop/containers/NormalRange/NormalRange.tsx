import { Component } from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../../..';
import { ArticlesList } from '../../../libs/articles/components/ArticlesList/ArticlesList';
import { ArticleDispatchType } from '../../../libs/articles/models/articles.types';
import {
  filterArticles,
  initArticles,
} from '../../../libs/articles/store/actions/articles.actions';
import { RangeDataDispatchType } from '../../../libs/range/models/range-data.types';
import { initRangeData } from '../../../libs/range/store/actions/range-data.actions';
import { CustomSpinner } from '../../../libs/spinner/components/Spinner/Spinner';
import { NormalRangeProps } from './normal-range-props.interface';
import Range from '../../../libs/range/components/Range/Range';

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
          disableInputs={false}
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
