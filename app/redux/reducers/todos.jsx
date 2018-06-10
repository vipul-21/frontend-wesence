import moment from 'moment';

const defaultState = {
  todoList: [],
  currentItem: {
    title: '',
    desc: '',
    time: moment(),
    notification: false,
  },
};

const Todos = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_ALL_ITEMS_INIT':
      return Object.assign({}, state, {
        todoList: [],
        currentItem: {},
      });
    case 'GET_ALL_ITEMS_DONE':
      return Object.assign({}, state, {
        todoList: action.todoList,
        currentItem: {},
      });
    case 'EDIT_ITEM_INIT':
      return Object.assign({}, state, {
        currentItem: action.item,
      });
    default:
      return state;
  }
};

export default Todos;
