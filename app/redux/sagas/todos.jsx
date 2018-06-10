import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import history from '../../utils/history';

import { getAllItems, addItem, removeItem, updateItem } from '../../api/todoService';

function* getAllItemsInit() {
  try {
    const done = yield call(getAllItems);
    if (done.status === 200) {
      yield put({ type: 'GET_ALL_ITEMS_DONE', todoList: done.todoList });
    } else {
      yield put({ type: 'GET_ALL_ITEMS_FAIL' });
    }
  } catch (e) {
    yield put({ type: 'GET_ALL_ITEMS_FAIL', message: e.message });
  }
}

function* addItemInit(action) {
  try {
    const done = yield call(addItem, action.item);
    if (done.status === 200) {
      yield put({ type: 'ADD_ITEM_DONE' });
      yield call(history.push, '/');
    } else {
      yield put({ type: 'ADD_ITEM_FAIL' });
    }
  } catch (e) {
    yield put({ type: 'ADD_ITEM_FAIL', message: e.message });
  }
}
function* removeItemInit(action) {
  try {
    const done = yield call(removeItem, action.id);
    if (done.status === 200) {
      yield put({ type: 'REMOVE_ITEM_DONE' });
      yield call(getAllItemsInit);
    } else {
      yield put({ type: 'REMOVE_ITEM_FAIL' });
    }
  } catch (e) {
    yield put({ type: 'REMOVE_ITEM_FAIL', message: e.message });
  }
}
function* updateItemInit(action) {
  try {
    const done = yield call(updateItem, action.item);
    if (done.status === 200) {
      yield call(history.push, '/');
    } else {
      yield put({ type: 'EDIT_TEAM_FAIL' });
    }
  } catch (e) {
    yield put({ type: 'EDIT_TEAM_FAIL', message: e.message });
  }
}

function* todoSaga() {
  yield takeLatest('GET_ALL_ITEMS_INIT', getAllItemsInit);
  yield takeLatest('ADD_ITEM_INIT', addItemInit);
  yield takeEvery('REMOVE_ITEM_INIT', removeItemInit);
  yield takeEvery('UPDATE_ITEM_INIT', updateItemInit);
}

export default todoSaga;
