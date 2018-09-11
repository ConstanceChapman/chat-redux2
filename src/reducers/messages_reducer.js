export default function(state = null, action) {
  switch (action.type) {
    case 'GET_MESSAGES':
      return action.payload.messages;
    default:
      return state;
  }
}
