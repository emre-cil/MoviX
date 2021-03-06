import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0 20px;
  border-bottom: 1px solid var(--gold);
  -webkit-tap-highlight-color: transparent;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 1rem 0;
  margin: 0 auto;
`;

export const Logo = styled.img`
  width: 150px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  @media screen and (max-width: 500px) {
    width: 100px;
  }
`;

export const LinkButton = styled.div`
  color: var(--white);
  cursor: pointer;
  margin-left: 1rem;
  user-select: none;
  &:hover {
    color: var(--gold);
  }
`;
export const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none !important;
  }
`;
