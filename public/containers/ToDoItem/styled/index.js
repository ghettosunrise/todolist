import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  background: transparent;
  position: absolute;
  box-sizing: border-box;
  height: 100%;
  border: none;
  outline: none;
  transition: 0.25s all ease;
  margin-bottom: 10px;
  font-size: 16px;
  padding-left: 15px;
  text-decoration: ${props =>
    props.isFinished ? "line-through" : "transparent"};
`;

export const CheckBox = styled.div`
  width: 15px;
  height: 15px;
  border: 1px solid black;
  background: ${props => (props.isFinished ? "black" : "transparent")};
  cursor: pointer;
`;

export const Button = styled.button`
  border: none;
  outline: none;
  font-size: 12px;
  color: white;
  background: transparent;
  cursor: pointer;
`;

export const SaveButton = styled(Button)`
  color: white;
`;

export const ToDoItemWrap = styled.div`
  position: relative;
  height: 40px;
  width: 100%;
  margin-left: 15px;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  background: ${props => (props.editing ? "#222299" : "transparent")};
  input {
    color: ${props => (props.editing ? "white" : "black")};
  }

  & .ButtonsWrap {
    display: flex;
    max-width: 90px;
    justify-content: space-between;
    z-index: 3;
    opacity: 0;
    transition: 0.25s opacity ease;
  }

  &:hover {
    background: black;
    input {
      color: white;
    }
    color: white;

    & .ButtonsWrap {
      opacity: 1;
    }
  }
`;
