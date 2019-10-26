import React from 'react';
const styled = window.styled;

// adjust margins of each listing
const Recommendation = styled.div`
  margin-right: 5px;
  margin-left: 5px;
`;

const Information = styled.div`
  margin-bottom: 16px;
  text-align: left;
`;

const InformationDiv = styled.div`
  margin-top: 2px;
  color: rgb(118, 118, 118);
`;

const TextSpan = styled.span`
  color: rgb(118, 118, 118);
`;

const Image = styled.img`
  align: center;
`;

const Listing = (props) => {
  return (
    <Recommendation>
      <Image src={props.listing.images[0]}></Image>
      <Information>
        <InformationDiv>
          <TextSpan>
            {props.listing.type}
            <span> * </span>
            {props.listing.location}
          </TextSpan>
        </InformationDiv>
        <InformationDiv>
          <TextSpan>
            {props.listing.name}
          </TextSpan>
        </InformationDiv>
        <InformationDiv>
          <TextSpan>
            ${props.listing.price}/night
          </TextSpan>
        </InformationDiv>
        <InformationDiv>
          <TextSpan>
            (rating star) {props.listing.rating}
          </TextSpan>
        </InformationDiv>
      </Information>
    </Recommendation>
  );
};

export default Listing;

// {console.log('LISTING PROPS: ', props.listing)}