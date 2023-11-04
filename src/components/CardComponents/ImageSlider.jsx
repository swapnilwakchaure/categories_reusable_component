import { useState } from "react";
import styled from "styled-components";

const ImageSlider = ({ imgArr }) => {
  const [counter, setCounter] = useState(0);

  const handleInc = () => {
    if (counter === imgArr.length - 1) {
      setTimeout(() => {
        setCounter(0);
      }, 1000);
    } else {
      setTimeout(() => {
        setCounter(counter + 1);
      }, 1000);
    }
  };

  const handleDec = () => {
    if (counter === 0) {
      setTimeout(() => {
        setCounter(imgArr.length - 1);
      }, 1000);
    } else {
      setTimeout(() => {
        setCounter(counter - 1);
      }, 1000);
    }
  };

  return (
    <SliderContainer>
      <Image src={imgArr[counter]} alt="nykaa-product" />

      <Button lft="0" onClick={handleDec}>
        &lt;
      </Button>
      <Button rft="0" onClick={handleInc}>
        &gt;
      </Button>
    </SliderContainer>
  );
};

export default ImageSlider;

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Button = styled.button`
  border: none;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  background: rgba(77,77,77,0.3);
  color: white;
  position: absolute;
  left: ${(props) => props.lft};
  right: ${(props) => props.rft};
  width: 30px;
  height: 100%;

  &: hover {
    background: rgba(77,77,77,0.6);
    transition: 0.3s;
  }

  &: active {
    background: rgba(77,77,77,0.8)
    transition: 0.3s;
  }
`;
