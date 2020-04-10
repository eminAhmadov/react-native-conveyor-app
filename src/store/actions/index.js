export const getUser = user => ({
  type: 'GET_USER',
  payload: user,
});
export const logOut = () => ({
  type: 'LOG_OUT',
});
export const getPushNotId = pushNotId => ({
  type: 'GET_PUSH_NOT_ID',
  payload: pushNotId,
});
