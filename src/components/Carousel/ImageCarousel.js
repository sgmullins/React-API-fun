import React from 'react';

import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

export default function MyCarousel({ routes }) {
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
    </Carousel>
  );
}
