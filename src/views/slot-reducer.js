

const slotReducer = (
    state = {
      loader: false,
      slotList: [],
      bookSlot:{}
    },
    action
  ) => {
    switch (action.type) {
      case 'GET_SLOT_LIST':
        return {
          ...state,
          loader: false,
          slotList: action.payload,
        };
        case 'BOOK_SLOT':
            return {
              ...state,
              loader: false,
              bookSlot: action.payload,
            };
            case 'SAVE_DETAIL':
        return {
          ...state,
          loader: false,
          slotList: action.payload,
          bookSlot: {},
        };
      default:
        return state;
    }
  };
  
  export default slotReducer;
  