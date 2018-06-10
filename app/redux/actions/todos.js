export const addItem = item => ({
  type: 'ADD_ITEM_INIT',
  item,
});

export const removeItem = id => ({
  type: 'REMOVE_ITEM_INIT',
  id,
});

export const getAllItems = () => ({
  type: 'GET_ALL_ITEMS_INIT',
});

export const editItem = item => ({
  type: 'EDIT_ITEM_INIT',
  item,
});

export const updateItem = item => ({
  type: 'UPDATE_ITEM_INIT',
  item,
});
