import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { deleteTask } from "./../Redux/Action";
import { useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";
import { updateTask, doneTask } from "../Redux/Action";
import Form from "react-bootstrap/Form";

function Task({ task }) {
  //modal manipulation show
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [textUpdate, setUpdate] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };
  const handleChangeUpdate = (e) => {
    setUpdate(e.target.value);
  };

  const handleSubmitUpdate = () => {
    dispatch(updateTask(task.id, textUpdate));
    handleClose();
  };
  const handleDone = () => {
    dispatch(doneTask(task.id));
  };

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <div style={{ display: "flex" }}>
            <Card.Title
              style={{
                textDecoration: !task.done ? "none" : "line-through",
              }}
            >
              {task.text}
            </Card.Title>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" onClick={handleDone} />
            </Form.Group>
          </div>

          <Button variant="primary" onClick={handleShow}>
            update
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            delete
          </Button>
        </Card.Body>
      </Card>
      {/* waddd */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            placeholder="update your task"
            style={{ width: "100%" }}
            onChange={handleChangeUpdate}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmitUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Task;
