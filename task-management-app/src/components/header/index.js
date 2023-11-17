import styled from "styled-components";

const StyledButton = styled.button`
  color: #161616;
  width: 130px;
  height: 50px;
  border: 2px solid #fff;
  outline: none;
  border-radius: 6px; /*убрать - будут острые углы*/
  font-size: 1.1em;
  font-weight: 500;
  margin-top: 23px;
  margin-left: 1750px;
  transition: .5s;
  align-items: center;
`;

const Wrapper = styled.div`
  height: 100px;
  background-color: #232323;
  color: #161616;
`;

export const Header = () => {
  return (
    <Wrapper>
      <StyledButton>Login</StyledButton>
    </Wrapper>
  );
};
