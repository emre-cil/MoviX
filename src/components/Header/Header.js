import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Wrapper, Content, Logo, LinkButton, Links } from "./Header.styles";
import LogoImg from "../../images/Logo.png";
import AuthContext from "../../store/auth-context";
const Header = () => {
  const authCtx = useContext(AuthContext);

  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <Logo src={LogoImg} alt="Movix" />
        </Link>
        <Links>
          {!authCtx.isLoggedIn && (
            <>
              <Link to="/login">
                <LinkButton>Login</LinkButton>
              </Link>
              <Link to="/register">
                <LinkButton>Register</LinkButton>
              </Link>
            </>
          )}
          {authCtx.isLoggedIn && (
            <LinkButton onClick={authCtx.logoutHandler}>Logout</LinkButton>
          )}
        </Links>
      </Content>
    </Wrapper>
  );
};

export default Header;
