import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
// import axios from "axios";
import { AiFillCar, AiTwotoneStar } from "react-icons/ai";
import { BiSolidPlane, BiTimeFive } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { PiTrainFill } from "react-icons/pi";
import { FaCity, FaRegAddressCard, FaLocationArrow } from "react-icons/fa";
import { FcRating } from "react-icons/fc";
import { TiContacts } from "react-icons/ti";
import { MdDescription } from "react-icons/md";
import { db } from "../database/db";

const SingleCardPage = () => {
  const { id } = useParams();

  const [data, setData] = useState({});

  let database = db.find((el) => el.id === Number(id));

  let ratingArr = Array.from(
    { length: Math.floor(Number(database.rating)) },
    (_, index) => index
  );

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

  // const getData = () => {
  //   axios
  //     .get(`http://192.168.29.181:8080/cities/${id}`)
  //     .then((res) => {
  //       setData(res.data);
  //       // console.log("res: ", res.data);
  //     })
  //     .catch((error) => {
  //       console.log("error: ", error);
  //     });
  // };

  useEffect(() => {
    setData(database);
  }, []);

  return (
    <>
      {data.id && (
        <div>
          <Title>{name}</Title>

          <Image src={images[0]} alt="product-first" />

          <InfoContainer>
            <p>
              <FaCity /> <Headings>Nearest City:</Headings> {location}
            </p>
            <p>
              <TiContacts /> <Headings>Contact Details:</Headings> {contact}
            </p>
            <p>
              <FaRegAddressCard /> <Headings>Address:</Headings> {address}
            </p>
            <p>
              <BiTimeFive /> <Headings>Daily Hours:</Headings> {timing}
            </p>
            <Rating>
              <FcRating /> <Headings>Rating:</Headings> {rating}
              {ratingArr.length > 0 &&
                ratingArr.map((el, index) => (
                  <AiTwotoneStar color="tomato" key={index} />
                ))}
            </Rating>
            <p>
              <BsFillPersonFill /> <Headings>Age Limit:</Headings> {age}
            </p>
            <p>
              <FaLocationArrow />{" "}
              <Headings>Distance from metro cities</Headings>: Mumbai-
              {distance[0]}km, Pune-
              {distance[1]}km
            </p>
            <p>
              <AiFillCar /> <Headings>Routes by Highway</Headings>: {by_road}
            </p>
            <p>
              <PiTrainFill /> <Headings>Routes by Train</Headings>: {by_train}
            </p>
            <p>
              <BiSolidPlane /> <Headings>Routes by Plane</Headings>: {by_plane}
            </p>
            <p>
              <MdDescription /> <Headings>Description</Headings>: {description}
            </p>

            <Direction href={google_map} target="_blank">
              Directions
            </Direction>
          </InfoContainer>

          <ImageContainer>
            <ImageBox>
              <Images src={images[1]} alt="product-1" />
            </ImageBox>
            <ImageBox>
              <Images src={images[2]} alt="product-2" />
            </ImageBox>
            <ImageBox>
              <Images src={images[3]} alt="product-3" />
            </ImageBox>
            <ImageBox>
              <Images src={images[4]} alt="product-4" />
            </ImageBox>
          </ImageContainer>
        </div>
      )}
    </>
  );
};

export default SingleCardPage;

const Title = styled.h1`
  padding: 30px 0px;
  background: #1a237e;
  color: white;
  margin: 0px 0px 20px 0px;

  position: sticky;
  top: 0;
`;

const Image = styled.img`
  width: 90%;
  height: 400px;

  @media (max-width: 1040px) {
    height: 300px;
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

const Headings = styled.span`
  font-weight: 600;
  color: #c62828;
`;

const Rating = styled.p`
  display: flex;
  align-items: center;
  gap: 3px;
`;

const Direction = styled.a`
  text-decoration: none;
  border: 1px solid;
  border-radius: 4px;
  padding: 5px;
  background: #1565c0;
  color: white;

  &: hover {
    text-decoration: underline;
  }
`;

const ImageContainer = styled.div`
  width: 95%;
  margin: 50px auto;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 426px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ImageBox = styled.div`
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 5px;
  cursor: pointer;
`;

const Images = styled.img`
  width: 100%;
  height: 100%;

  &: hover {
    transform: scale(1.2);
    transition: 0.5s ease-in-out;
  }
`;
