import { memo } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const LeftSection = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const RightSection = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  height: 1rem;
  margin-right: 2rem;
`;

export const Text = styled.span`
  font-size: 1rem;
  margin: auto 2rem;
  text-align: center;
`;

export const Searchbar = styled.input``;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  box-sizing: border-box;
  height: 100%;

  display: flex;
  align-items: center;
`;

export const StyledDropdownLi = styled.li`
  list-style: none;
  box-sizing: border-box;
  padding: 30px 0px;
  width: calc(100% / 7);
  height: 70px;
  cursor: pointer;
`;

export const DropdownWrapper = styled.div`
  position: absolute;

  width: 100%;
  height: auto;

  box-sizing: border-box;
  background-color: white;
  z-index: 1;
  border-bottom: 1px solid black;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
`;
