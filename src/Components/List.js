import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

function List() {
  const tasks = useSelector((state) => state);

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {tasks.length != 0
        ? tasks.map((task) => <Task key={task.id} task={task} />)
        : "no task to show"}
    </div>
  );
}

export default List;
