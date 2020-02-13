import React from 'react';
import PropTypes from 'prop-types';
//Component imports
import { fetchPopularClimbStyle } from '../../utils/api';
import PopCategoriesNavBar from './PopCategoriesNavBar';
import ImageCarousel from '../Carousel/ImageCarousel';
import Loading from '../Loader/Loading';

export default class PopCategories extends React.Component {
  state = {
    selectedCategory: 'Boulder',
    routes: {},
    error: null,
  };

  componentDidMount() {
    this.updateCategory(this.state.selectedCategory);
  }

  updateCategory = selectedCategory => {
    this.setState({
      selectedCategory,
      error: null,
    });
    if (!this.state.routes[selectedCategory]) {
      fetchPopularClimbStyle(selectedCategory)
        .then(data => {
          this.setState(({ routes }) => ({
            routes: {
              ...routes,
              [selectedCategory]: data,
            },
          }));
        })
        .catch(error => {
          console.warn('Error fetching repos', error);
          this.setState({
            error: 'There was an error fetching routes',
          });
        });
    }
  };

  isLoading = () => {
    const { selectedCategory, error, routes } = this.state;

    return !routes[selectedCategory] && error === null;
  };

  render() {
    const { selectedCategory, routes, error } = this.state;

    return (
      <React.Fragment>
        <h1 className='center-text page-title'>
          <span className='slide'>Top Routes From Mountain Project</span>
        </h1>
        <PopCategoriesNavBar
          selected={selectedCategory}
          onUpdateCategory={this.updateCategory}
        />
        {this.isLoading() && <Loading />}

        {error && <p>{error}</p>}
        {routes[selectedCategory] && (
          <ImageCarousel routes={routes[selectedCategory]} />
        )}
      </React.Fragment>
    );
  }
}

PopCategoriesNavBar.propTypes = {
  selected: PropTypes.string.isRequired,
  onUpdateCategory: PropTypes.func.isRequired,
};
