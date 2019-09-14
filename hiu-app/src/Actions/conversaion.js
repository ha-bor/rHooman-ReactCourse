export const getUserName = (name, idnum) => ({
  type: 'SAVE_USER_NAME',
  payload: {name: name, idd: idnum}
})

export const getMessage = (message) => ({
  type: 'SAVE_MESSAGE',
  payload: message
})

export const createNewConversation = (name) => ({
  type: 'CREATE_CONVERSATION',
  payload: name
})

