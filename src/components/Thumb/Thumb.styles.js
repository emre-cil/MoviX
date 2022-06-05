import styled from "styled-components";
export const Wrapper = styled.div`
  overflow: hidden;
  margin: 0 auto;
  border-radius: 1rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 720px;
  object-fit: cover;

  transition: transform 0.3s ease;
  cursor: ${(props) => (props.clickable !== false ? "pointer" : "default")};
  animation: thumbAnimation 0.5s;
  @keyframes thumbAnimation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  :hover {
    transform: scale(1.15);
  }
  @media screen and (max-width: 768px) {
    border-top-right-radius: 1rem;
    border-bottom-left-radius: ${(props) =>
      props.clickable !== false ? "1rem" : "0"};
  }
`;
