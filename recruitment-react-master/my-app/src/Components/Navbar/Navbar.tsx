import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return <NavbarStyle></NavbarStyle>;
};

const NavbarStyle = styled.div`
  padding: 25px;
  height: 35px;
  display: flex;
  flex-direction: row;
  background-color: #b7ddf7;
`;

export default Navbar;
