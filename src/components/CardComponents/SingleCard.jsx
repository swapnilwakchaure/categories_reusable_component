import { useState } from "react";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";

const SingleCard = ({ data }) => {
  const [moreDetails, setMoreDetails] = useState(false);
  const {
    name,
    location,
    contact,
    address,
    google_map,
    timing,
    rating,
    age,
    by_road,
    by_train,
    by_plane,
    distance,
    images,
    description,
  } = data;

  return (
    <Main>
      <ProductContainer>
        <ImageContainer>
          <ImageSlider imgArr={images} />
        </ImageContainer>
        <InfoContainer>
          <Name>{name}</Name>
          <p>
            <Headings>Nearest City:</Headings> {location}
          </p>
          <p>
            <Headings>Contact Details:</Headings> {contact}
          </p>
          <p>
            <Headings>Address:</Headings> {address}
          </p>
          <p>
            <Headings>Daily Hours:</Headings> {timing}
          </p>
          <p>
            <Headings>Rating:</Headings> {rating}
          </p>
          <p>
            <Headings>Age Limit:</Headings> {age}
          </p>
          <Footer>
            <Direction href={google_map} target="_blank">
              Directions
            </Direction>
            <Details onClick={() => setMoreDetails(!moreDetails)}>
              {moreDetails ? "Hide Details" : "Show Details"}
            </Details>
          </Footer>
        </InfoContainer>
      </ProductContainer>
      {moreDetails && (
        <MoreDetails>
          <p>
            <Headings>Distance from metro cities</Headings>: Mumbai-{distance[0]}km, Pune-
            {distance[1]}km
          </p>
          <p><Headings>Routes by Highway</Headings>: {by_road}
          </p>
          <p><Headings>Routes by Train</Headings>: {by_train}</p>
          <p><Headings>Routes by Plane</Headings>: {by_plane}</p>
          <p><Headings>Description</Headings>: {description}</p>
        </MoreDetails>
      )}
    </Main>
  );
};

export default SingleCard;

const Main = styled.div`
  width: 90%;
  margin: auto auto 30px auto;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
  background: #FFF3E0;
  padding: 0px 20px;
`;

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, max-content));
  gap: 10px;

  @media (max-width: 1025px) {
    justify-content: center;
    align-items: center;
  }
`;

const ImageContainer = styled.div`
  width: 100%;

  @media (max-width: 1025px)

  @media (max-width: 450px) {
    width: 420px;
  }

  @media (max-width: 321px) {
    width: 300px;
  }
`;


const InfoContainer = styled.div`
  width: 90%;
  max-width: 600px;
  margin: auto;
  height: 100%;
  text-align: start;
  padding: 0px 20px;
`;

const Name = styled.p`
  text-align: center;
  padding: 10px 0px;
  font-size: 18px;
  font-weight: 700;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 5px;
  background: #ffe0b2;
  color: #e65100;
`;

const Headings = styled.span`
  font-weight: 600;
  color: #ef6c00;
`;

const Direction = styled.a`
  text-decoration: none;
  border: 1px solid;
  border-radius: 4px;
  padding: 5px;
  background: #1565C0;
  color: white;

  &: hover {
    text-decoration: underline;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Details = styled.p`
  cursor: pointer;

  &: hover {
    text-decoration: underline;
    color: #1565C0;
  }
`

const MoreDetails = styled.div`
  text-align: start;
  padding: 20px;
`
