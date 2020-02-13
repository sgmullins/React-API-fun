import React from 'react';
import PropTypes from 'prop-types';
import { fetchPopularClimbStyle } from '../../utils/api';
import PopCategoriesNavBar from './PopCategoriesNavBar';
// import MyCarousel from '../Carousel/CarouselImage';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
// import AwesomeSlider from 'react-awesome-slider';
// import AwsSliderStyles from 'react-awesome-slider/src/styles.js';
// import Captioned from 'react-awesome-slider/src/components/captioned';
// import CaptionedStyles from 'react-awesome-slider/src/components/captioned/styles.scss';

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
        <PopCategoriesNavBar
          selected={selectedCategory}
          onUpdateCategory={this.updateCategory}
        />
        {this.isLoading() && <p>Loading</p>}

        {error && <p>{error}</p>}
        {routes[selectedCategory] && (
          <MyCarousel routes={routes[selectedCategory]} />
          // <Slider routes={routes[selectedCategory]} />
        )}
      </React.Fragment>
    );
  }
}

PopCategoriesNavBar.propTypes = {
  selected: PropTypes.string.isRequired,
  onUpdateCategory: PropTypes.func.isRequired,
};

function MyCarousel({ routes }) {
  return (
    <Carousel arrows centered infinite slidesPerPage={2}>
      {routes.map((route, index) => {
        const { name, rating, stars, url, imgMedium, location } = route;
        return (
          <div className='my-top-div' key={url}>
            <img src={imgMedium} alt={url} />;
            <div className='climb-info'>
              <h2>
                <a href={url} className='slide'>
                  {name}
                </a>
              </h2>
              <h3>
                {location[1]}, {location[0]}
              </h3>
              <h3>{rating}</h3>
              <small>Mountain Project Rating: {stars}</small>
            </div>
          </div>
        );
      })}
      {/* <pre>{JSON.stringify(routes, null, 2)}</pre> */}
    </Carousel>
  );
}

// const Slider = ({ routes }) => {
//   return (
//     <div className='awesome-div'>
//       <AwesomeSlider cssModule={AwsSliderStyles}>
//         {routes.map(route => {
//           const { name, rating, stars, url, imgMedium, location } = route;
//           return (
//             <div data-src={imgMedium}>
//               <p>
//                 {name}
//                 {location[0]}
//               </p>
//             </div>
//           );
//         })}
//       </AwesomeSlider>
//     </div>
//   );
// };
// const component = (
//   <Captioned
//     startupScreen={StartupScreen}
//     cssModule={CaptionedStyles}
//     screens={[
//       {
//         backgroundColor: '#4a9c8c',
//         media: '/images/series/ricknmorty-3.png',
//         caption: 'I want to see what you got.',
//       },
//       {
//         backgroundColor: '#4a9c8c',
//         media: '/images/series/ricknmorty-3.png',
//         caption: 'sometext',
//       },
//       // ...
//     ]}
//   />
// );
