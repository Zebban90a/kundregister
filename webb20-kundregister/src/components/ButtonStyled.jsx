import styled from "styled-components";

const ButtonStyled = styled.button`
  padding: 1rem 1.6;
  font-size: 1.3rem;
  background: ${(props) => (props.second ? "green" : "red")};
  color: white;
  margin-top: 1.6rem;
`;

export { ButtonStyled };
