export default (state = 0, action) => {
  switch (action.type) {
    case "add":
      return state + 1;
      break;
    case "delete":
      return state - 1;
      break;
    default:
      return state;
  }
}