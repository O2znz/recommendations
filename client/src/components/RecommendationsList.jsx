import React from 'react';
import Listing from './Listing.jsx';
import styled from 'styled-components';

// make list component that pulls each object from the listings array
// and passes each one down to the listing component (coming soon)
const RecommendationsList = (props) => {
  // each item is a recommendation object
  // SYNTAX NOTE: no curly brackets after map callback function
  var items = props.listings.map((listing, index) =>
    <Listing key={index} listing={listing} />
  );
  return (
    <div>
      <ul>
        {items}
      </ul>
    </div>
  );
};

// export list
export default RecommendationsList;

// {console.log('List Props: ', props.listings)}