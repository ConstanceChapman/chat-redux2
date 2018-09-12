export default function(state = null, action) {
  switch (action.type) {
    case 'GET_MESSAGES': {
      return action.payload.messages ? action.payload.messages : state;
    }
    case 'CREATE_MESSAGE': {
      let newMessages = state.slice(0);
      newMessages.push(action.payload);
      return newMessages;
    }
    default:
      return state;
  }
}
