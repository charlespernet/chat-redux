export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const SET_MESSAGE = 'SET_MESSAGE';
export const CREATE_MESSAGE = 'CREATE_MESSAGE';
export const SELECT_CHANNEL = 'SELECT_CHANNEL';
export const SET_USER = 'SET_USER';

export function fetchMessages(channel) {
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`)
    .then(response => response.json());

  return {
    type: FETCH_MESSAGES,
    payload: promise
  }
}

export function setUser() {
  const user = prompt('Whats is your user name ?');
  return {
    type: SET_USER,
    payload: user
  }
}

export function setMessage(content) {
  return {
    type: SET_MESSAGE,
    payload: content
  }
}

export function selectChannel(channel) {
  return {
    type: SELECT_CHANNEL,
    payload: channel
  }
}

export function createMessage(message) {
  const { channel, author, content } = message

  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({author, content})
    }).then(response => response.json());

  return {
    type: CREATE_MESSAGE,
    payload: promise
  }
}
