const pushNotIdReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_PUSH_NOT_ID':
      return action.payload;
    default:
      return state;
  }
};

export default pushNotIdReducer;
