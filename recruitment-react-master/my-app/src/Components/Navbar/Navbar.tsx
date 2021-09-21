import { Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <NavbarStyle>
      <Typography variant="h4">Users</Typography>
    </NavbarStyle>
  );
};

const NavbarStyle = styled.div`
  padding: 25px;
  height: 35px;
  background-color: #b7ddf7;
`;

export default Navbar;
