import styled from "styled-components";

const Text = styled.div`
  position: relative;
  font-size: 1.5em;
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  margin-left: 40px;
  padding: 50px 0 0 0;
`;

const Wrapper = styled.div`
  margin: 40px 0 0 35px;
  background-color: #232323;
  width: 250px;
  height: 813px;
`;

export const Aside = () => {
  return (
    <Wrapper>
      <Text>Home</Text>
      <Text>Create task</Text>
      <Text>Completed tasks</Text>
      <Text>Unfinished tasks</Text>
    </Wrapper>
  );
};
