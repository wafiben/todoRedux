export const deleteTask = (id) => {
  return { type: "delete", payload: id };
};
export const addTask = (newTask) => {
  return { type: "add", payload: newTask };
};
export const updateTask = (id, text) => {
  return { type: "udpate", payload: { id, text } };
};
export const doneTask = (id) => {
  return { type: "doneUdone", payload: id };
};
