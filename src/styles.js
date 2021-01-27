import styled from "styled-components";

export const CreateButtonStyled = styled.button`
  font-size: 1em;
  margin: 1rem auto;
  padding: 0.5rem;
  border-radius: 3px;
  display: block;
  color: red;
  background-color: pink;
  &:hover {
    color: red;
    background-color: pink;
  }
`;

export const textInput = styled.input`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export const InputStyled = styled.input`
  border: 2px solid palevioletred;
  border-radius: 3px;
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

export const DetailWrapper = styled.label`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%auto;
  display: block;

  img {
    width: 10%;
    float: auto;
  }
  p {
    vertical-align: middle;
  }
`;

export const Wrapper = styled.div`
  /* display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%auto;

  img {
    width: 10%;
    float: auto;
  }
  p {
    vertical-align: middle;
  } */
  border: 2px solid palevioletred;
  border-radius: 3px;
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;
