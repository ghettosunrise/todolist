import React, { useState, useEffect, Fragment } from "react";
import ToDoItem from "../ToDoItem";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { move } from "ramda";

import * as S from "./styled";

const ToDoList = () => {
  const [todoItems, setTodoItems] = useState(
    JSON.parse(localStorage.getItem("todoItems") || "{}")
  );

  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(todoItems));
  }, [todoItems]);

  const R = require("ramda");

  const deleteItem = id => {
    const newTodoItems = { ...todoItems };

    delete newTodoItems[id];
    setTodoItems(newTodoItems);
  };

  // const onChange = event => setValue

  const updateItem = (id, newItem) => {
    const newTodoItems = {
      ...todoItems,
      [id]: newItem
    };

    setTodoItems(newTodoItems);
  };

  const onDragEnd = dropResult => {
    const { destination, source, draggableId } = dropResult;

    if (!destination) {
      return;
    }

    if (
      destination.draggableId === source.draggableId &&
      destination.index === source.index
    ) {
      return;
    }

    const item = todoItems[draggableId];

    // todoItems = {
    //   key: {
    //     ...item
    //   }
    // };

    const itemsArray = Object.values(todoItems);

    let from = source.index;

    let to = destination.index;

    // itemsArray.splice(source.index, 1);
    // itemsArray.splice(destination.index, 0, draggableId);

    const newItemsArray = R.move(from, to, itemsArray);

    let finalArray = newItemsArray.reduce(
      (acc, item) => ({ ...acc, [item.id]: item }),
      {}
    );

    setTodoItems(finalArray);

    console.log(finalArray);

    // const newItemsArray = {
    //   ...itemsArray,
    //   values = itemsArray
    // };

    //(dropResult) => updateItem(id, { ...todoItems[id], index })
  };

  console.log(todoItems);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <S.ToDoWrapper>
        <Droppable droppableId="droppable-1">
          {(provided, snapshot) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {Object.keys(todoItems).map((key, index) => (
                <ToDoItem
                  index={index}
                  key={key}
                  deleteItem={deleteItem}
                  updateItem={updateItem}
                  item={todoItems[key]}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <S.AddNew
          onClick={() => {
            setTodoItems({
              ...todoItems,
              [new Date().getTime()]: {
                id: new Date().getTime(),
                text: "Do this",
                new: true,
                index:
                  Object.keys(todoItems).length === 0
                    ? 0
                    : Object.keys(todoItems).length
              }
            });
          }}
        >
          Add new
        </S.AddNew>
      </S.ToDoWrapper>
    </DragDropContext>
  );
};

export default ToDoList;
