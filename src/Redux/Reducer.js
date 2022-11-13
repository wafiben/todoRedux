const initState = [
  { id: 0, text: "going to the school", done: false },
  { id: 1, text: "meeting my mom", done: false },
];
const Reducer = (state = initState, action) => {
  switch (action.type) {
    case "delete":
      return state.filter((elt) => elt.id != action.payload);
    case "add":
      return [...state, action.payload];
    case "udpate":
      return state.map((elt) => {
        if (elt.id == action.payload.id) {
          return { ...elt, text: action.payload.text };
        } else {
          return elt;
        }
      });
    case "doneUdone":
      return state.map((elt) => {
        if (elt.id == action.payload) {
          if (elt.done) {
            return { ...elt, done: false };
          } else {
            return { ...elt, done: true };
          }
        } else {
          return elt;
        }
      });
    default:
      return state;
  }
};
export default Reducer;
