const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_USER':
      return action.payload;
    case 'LOG_OUT':
      return {};
    default:
      return state;
  }
};

export default userReducer;
