import React, { useState, Fragment } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Button = styled.button`
  border: none;
  outline: none;
  font-size: 12px;
  color: deepskyblue;
  background: transparent;
  cursor: pointer;
`;

const SaveButton = styled(Button)`
  color: white;
`;

const ToDoWrapper = styled.div`
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

const ToDoItemWrap = styled.div`
  position: relative;
  height: 40px;
  width: 100%;
  margin-left: 15px;
  display: flex;
  width: 100%;
  justify-content: flex-end;

  & .ButtonsWrap {
    display: flex;
    max-width: 90px;
    justify-content: space-between;
    z-index: 3;
    opacity: 0;
    transition: 0.25s opacity ease;
  }

  &:hover {
    background: #9d9d9d;
    color: white;

    & .ButtonsWrap {
      opacity: 1;
    }
  }
`;

const Input = styled.input`
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
`;

const AddNew = styled.button`
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

const CheckBox = styled.div`
  width: 15px;
  height: 15px;
  border: 1px solid black;
`;

// const AddToDo = () => {
//   render(<ToDoWrapper></ToDoWrapper>);
// };

const ToDoItem = ({ deleteItem, item }) => {
  const [isDisabled, setIsDisabled] = useState(true);

  const openInput = () => {
    setIsDisabled(false);
  };

  const closeInput = () => {
    setIsDisabled(true);
  };

  return (
    <div className="inputWrap">
      <CheckBox></CheckBox>
      <ToDoItemWrap>
        <Input type="text" defaultValue="" disabled={isDisabled} />
        {isDisabled ? (
          <div className="ButtonsWrap">
            <Button onClick={openInput}>Edit</Button>
            <Button onClick={() => deleteItem(item.id)}>Delete</Button>
          </div>
        ) : (
          <div className="ButtonsWrap">
            <SaveButton onClick={() => setIsDisabled(true)}>Save</SaveButton>
          </div>
        )}
      </ToDoItemWrap>
    </div>
  );
};

const ToDoList = () => {
  const [todoItems, setTodoItems] = useState({});

  const deleteItem = id => {
    const newTodoItems = { ...todoItems };

    delete newTodoItems[id];

    setTodoItems(newTodoItems);
  };

  return (
    <ToDoWrapper>
      {Object.keys(todoItems).map(key => (
        <ToDoItem deleteItem={deleteItem} item={todoItems[key]} />
      ))}
      <AddNew
        onClick={() => {
          setTodoItems({
            ...todoItems,
            [new Date().getTime()]: {
              id: new Date().getTime(),
              text: "Do this"
            }
          });
        }}
      >
        Add new
      </AddNew>
    </ToDoWrapper>
  );
};

ReactDOM.render(<ToDoList />, document.getElementById("root"));
