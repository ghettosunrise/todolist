import styled from "styled-components";

export const AddNew = styled.button`
  color: #9d9d9d;
  border: none;
  width: 100px;
  height: 30px;
  background: transparent;
  padding-left: 20px;
  position: relative;
  cursor: pointer;
  outline: none;

  &::before {
    content: "+";
    position: absolute;
    left: 0;
    top: -5px;
    font-size: 29px;
  }
`;

export const ToDoWrapper = styled.div`
  padding: 25px 15px 25px 35px;
  background: #eee;
  border-radius: 4px;
  width: 600px;
  margin: 40px auto 0;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  & .inputWrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
  }
`;
