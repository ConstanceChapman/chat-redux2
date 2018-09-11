// TODO: add and export your own actions
export function fetchMessages(channel) {
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`)
    .then(response => response.json());
  return {
    type: 'GET_MESSAGES',
    payload: promise
  };
};

export function createMessage(channel, author, content) {
  //todo
}
