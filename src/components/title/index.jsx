import styled from "styled-components";

const Title = ({ title }) => {
  const Title = styled.h1`
    color: black;
    font-size: 25px;
    margin: 20px;
    text-align: center;
  `;

  return (
    <>
      <Title>{title}</Title>
    </>
  );
};

export default Title;