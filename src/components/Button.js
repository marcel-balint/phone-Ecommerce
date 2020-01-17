import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  background-color: transparent;
  font-size: 1.4rem;
  padding-bottom: 6px;
  border-color: rgb(60, 200, 255);
  border-radius: 4px;
  border-width: 0.125rem;
  border-style: solid;
  color: ${props => (props.cart ? "#000" : "#fff")};
  &:hover {
    background-color: rgb(60, 200, 255);
    color: #000;
  }
`;
