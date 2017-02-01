export default function itemListsReducer(state = [], action) {
  switch(action.type) {
    case 'ADD_ITEMS_LIST':
      return [...state,
        Object.assign({}, action.itemsList)
      ];

    default:
      return state;
  }
}
