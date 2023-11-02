import { useState, useEffect } from "react";
import axios from "axios";
import SingleCard from "../components/CardComponents/SingleCard";
import styled from "styled-components";

const PlaceCard = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get("http://192.168.29.181:8080/cities")
      .then((res) => {
        setData(res.data);
        // console.log("res: ", res.data);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
        <Header>Water Parks In India</Header>

        { data.length > 0 && data.map((el) => (
            <SingleCard data={el} key={el.id} />
        ))}
    </div>
  )
};

export default PlaceCard;


const Header = styled.h1`
  width: 100%;
  margin: auto auto 50px auto;
  padding: 30px 0px;
  background: #E65100;
  color: white;
`