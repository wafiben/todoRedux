import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { v4 as uuidv4 } from "uuid";
import { addTask } from "../Redux/Action.js";
import { useDispatch } from "react-redux";

function Add() {
  const dispatch = useDispatch();
  const [task, setTask] = useState({ id: "", text: "", done: false });
  let y = "";

  const handleChange = (e) => {
    setTask({ ...task, id: uuidv4(), text: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(task));
    setTask({ ...task, text: "" });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>task</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter task"
          onChange={handleChange}
          value={task.text}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Add;
