import { Component } from 'react';
import { connect } from 'react-redux';
import { ArticlesList } from '../../../libs/articles/components/ArticlesList/ArticlesList';
import { ArticleDispatchType } from '../../../libs/articles/models/articles.types';
import {
  filterArticles,
  initArticles,
} from '../../../libs/articles/store/actions/articles.actions';
import { RangeDataDispatchType } from '../../../libs/range/models/range-data.types';
import { initRangeData } from '../../../libs/range/store/actions/range-data.actions';
import { CustomSpinner } from '../../../libs/spinner/components/Spinner/Spinner';
import { FixedValuesRangeProps } from './fixed-values-range-props.interface';
import Range from '../../../libs/range/components/Range/Range';
import { ApplicationState } from '../../../store/app.store';

class FixedValuesRange extends Component<FixedValuesRangeProps> {
  componentDidMount() {
    this.props.onInitArticles();
    this.props.onInitRangeData();
  }

  /**
   * Filters the articles given a minimun and maximun value.
   * @param min Minimum value to filter the articles.
   * @param max Maximum value to filter the articles
   */
  private filterArticles = (min: number, max: number): void => {
    this.props.onFilterArticles(min, max);
  };

  render(): JSX.Element {
    const { articles, error } = this.props.articles;
    const { min, max, rangeValues } = this.props.rangeData;

    let articlesJsx = (
      <CustomSpinner error={error} message="Articles can't be loaded!" />
    );
    let rangeJsx = (
      <CustomSpinner
        error={this.props.rangeData.error}
        message="Range data can't be loaded!"
      />
    );

    if (articles) {
      articlesJsx = <ArticlesList articlesList={articles} />;
    }
    if (min !== undefined && max !== undefined && rangeValues) {
      rangeJsx = (
        <Range
          min={min}
          max={max}
          step={rangeValues}
          onChange={this.filterArticles}
          disableInputs={true}
        />
      );
    }
    return (
      <div>
        {rangeJsx}
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

export default connect(mapStateToProps, mapDispatchToProps)(FixedValuesRange);
