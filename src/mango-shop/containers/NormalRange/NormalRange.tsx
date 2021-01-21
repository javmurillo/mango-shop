import { Component } from 'react';
import { connect } from 'react-redux';
import { ArticlesList } from '../../../libs/articles/components/ArticlesList/ArticlesList';
import { ArticleDispatchType } from '../../../libs/articles/models/articles.types';
import {
  filterArticles,
  initArticles,
} from '../../../libs/articles/store/actions/articles.actions';
import Range from '../../../libs/range/components/Range/Range';
import { RangeDataDispatchType } from '../../../libs/range/models/range-data.types';
import { initRangeData } from '../../../libs/range/store/actions/range-data.actions';
import { CustomSpinner } from '../../../libs/spinner/components/Spinner/Spinner';
import { ApplicationState } from '../../../store/app.store';
import { NormalRangeProps } from './normal-range-props.interface';

class NormalRange extends Component<NormalRangeProps> {
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
    const { articles } = this.props.articles;
    const { min, max } = this.props.rangeData;

    let articlesJsx = (
      <CustomSpinner
        error={this.props.articles.error}
        message="Articles can't be loaded!"
      />
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
    // We compare directly with undefined since  min or max can be 0
    if (min !== undefined && max !== undefined) {
      rangeJsx = (
        <Range
          min={min}
          max={max}
          step={5}
          onChange={this.filterArticles}
          disableInputs={false}
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

export default connect(mapStateToProps, mapDispatchToProps)(NormalRange);
