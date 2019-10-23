import React, { useState, useEffect, Fragment } from "react";
import { Draggable } from "react-beautiful-dnd";

import * as S from "./styled";

const ToDoItem = ({ deleteItem, updateItem, item, index }) => {
  const [isFinished, setIsFinished] = useState(false);
  const [isDisabled, setIsDisabled] = useState(!item.new);

  const onChange = event =>
    updateItem(item.id, {
      ...item,
      value: event.target.value,
      new: false
    });

  const finishToDoToggle = () => setIsFinished(!isFinished);

  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="inputWrap">
            <S.CheckBox
              isFinished={isFinished}
              onClick={finishToDoToggle}
            ></S.CheckBox>
            <S.ToDoItemWrap editing={!isDisabled}>
              <S.Input
                type="text"
                onBlur={() => setIsDisabled(true)}
                onChange={onChange}
                isFinished={isFinished}
                disabled={isDisabled}
                value={item.value}
              />

              {isDisabled && isFinished ? (
                <div className="ButtonsWrap">
                  <S.Button onClick={() => deleteItem(item.id)}>
                    Delete
                  </S.Button>
                </div>
              ) : isDisabled ? (
                <div className="ButtonsWrap">
                  <S.Button onClick={() => setIsDisabled(false)}>Edit</S.Button>
                  <S.Button onClick={() => deleteItem(item.id)}>
                    Delete
                  </S.Button>
                </div>
              ) : (
                <div className="ButtonsWrap">
                  <S.SaveButton onClick={() => setIsDisabled(true)}>
                    Save
                  </S.SaveButton>
                </div>
              )}
            </S.ToDoItemWrap>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default ToDoItem;
