import slotsData from '../data/slots.json'

export function getSlots() {
  return {
    type: 'GET_SLOT_LIST',
    payload: localStorage.getItem('slotsData')!==undefined&&localStorage.getItem('slotsData')!==null ? JSON.parse(localStorage.getItem('slotsData')):slotsData
  };
}
export function bookSlot(data) {
    return {
      type: 'BOOK_SLOT',
      payload: data
    };
  }

  export function saveDetail(data) {
    localStorage.setItem('slotsData', JSON.stringify(data))
    return {
      type: 'SAVE_DETAIL',
      payload: data
    };
  }