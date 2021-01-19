import { Component } from 'react';
import { connect } from 'react-redux';
import { ArticlesList } from '../../components/ArticlesList/ArticlesList';
import Range from '../../components/Range/Range';
import { CustomSpinner } from '../../components/Spinner/Spinner';
import {
  filterArticles,
  initArticles,
} from '../../store/reducers/articles/articles.actions';
import { ArticleDispatchType } from '../../store/types/articles.types';
import { FixedValuesRangeProps } from './fixed-values-range-props.interface';

class FixedValuesRange extends Component<FixedValuesRangeProps> {
  componentDidMount() {
    this.props.onInitArticles();
  }

  private filterArticles = (min: number, max: number): void => {
    this.props.onFilterArticles(min, max);
  };

  render(): JSX.Element {
    const { articles, error } = this.props;
    let articlesJsx = (
      <CustomSpinner error={error} message="Articles can't be loaded!" />
    );

    if (articles) {
      articlesJsx = <ArticlesList articlesList={articles} />;
    }
    return (
      <div>
        <Range
          min={0}
          max={100}
          step={[9.99, 29.99, 39.99, 59.99, 79.99, 99.99]}
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

export default connect(mapStateToProps, mapDispatchToProps)(FixedValuesRange);
