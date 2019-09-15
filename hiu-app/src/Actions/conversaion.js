export const getUserName = (firstName, lastName, email, idnum, profile) => ({
  type: 'SAVE_USER_NAME',
  payload: {fName: firstName, idd: idnum, lName: lastName, email:email, profPic: profile}
})

export const getMessage = (message) => ({
  type: 'SAVE_MESSAGE',
  payload: message
})

export const createNewConversation = (name) => ({
  type: 'CREATE_CONVERSATION',
  payload: name
})

