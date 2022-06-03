import styled from "styled-components";
export const Wrapper = styled.div`
  color: var(--white);
  background-color: var(--darkGrey);
  border-radius: 20px;
  width: 200px;
  padding: 0;
  text-align: center;
  h3 {
    margin: 10px 0 0 0;
  }
  p {
    margin: 5px 0;
  }
  @media screen and (max-width: 768px) {
    width: 95%;
    margin: 0 auto;
  }
`;
export const Image = styled.img`
  display: block;
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  @media screen and (max-width: 768px) {
    height: 325px;
  }
  @media screen and (max-width: 455px) {
    height: 450px;
  }
`;
