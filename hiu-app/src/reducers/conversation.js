const initial = {
  name: '',
  message: '',
  conversations: [
    {
      text: 'salam :)',
      date: 'sat',
      sender: 1,
      reciever: 3
    },
    {
      text: 'salam :))',
      date: 'sat',
      sender: 3,
      reciever: 1
    },
    {
      text: 'chetori? :)',
      date: 'sat',
      sender: 1,
      reciever: 3
    },
    {
      text: 'khoobam :))',
      date: 'sat',
      sender: 3,
      reciever: 1
    }
  ],
  conversationList: []
}
const conversation = (state = initial, action) => {
  switch (action.type) {
    case 'SAVE_USER_NAME':
      return {
        ...state,
        name: action.payload.name,
        idnum: action.payload.idd
      }
    case 'SAVE_MESSAGE':
      return {text1: action.payload,
        ...state,
        conversations: [
          ...state.conversations,
          {
            text: action.payload
          }
        ]
      }
    case 'CREATE_CONVERSATION':
      return {
        ...state,
        conversationList: [
          {
            firstName: action.payload,
            lastName: '',
            lastestM: '',
            unSeen: '',
            profPic: 'http://.....'
          },
          ...state.conversationList
        ]
      }
    default:
      return state
  }
}

export default conversation
