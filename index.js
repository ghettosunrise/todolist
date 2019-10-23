import { hot } from "react-hot-loader/root";
import React, { useState, useEffect, Fragment } from "react";
import ReactDOM from "react-dom";
import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";

import ToDoList from "./public/containers/ToDoList";
import ToDoItem from "./public/containers/ToDoItem";

const Root = document.getElementById("root");
export default hot(Root);

ReactDOM.render(<ToDoList />, Root);
