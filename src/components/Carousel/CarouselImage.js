import React, { Component } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

export default function MyCarousel() {
  return (
    <Carousel>
      <div>
        <img
          src={
            'https://images.unsplash.com/photo-1478827227954-745b0daf2534?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
          }
        />
        <h2>Testing</h2>
        <h3>More testing</h3>
      </div>
      <img
        src={
          'https://images.unsplash.com/photo-1478827227954-745b0daf2534?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
        }
      />
      <img
        src={
          'https://images.unsplash.com/photo-1478827227954-745b0daf2534?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
        }
      />
    </Carousel>
  );
}
