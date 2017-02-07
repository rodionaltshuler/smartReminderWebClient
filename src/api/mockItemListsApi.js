import delay from './delay';

const itemLists =  [
  {
    _id: "id1",
    name: "Family Shopping list"
  },
  { _id: "id2",
    name: "BBQ items"
  },
  {
    _id: "id3",
    name: "USA trip"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

const generateId = (itemsList) => {
  return 'id-' + replaceAll(itemsList.name, ' ', '-');
};


class ItemListsApi {
  static getAllItemLists() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], itemLists));
      }, delay);
    });
  }

  static saveItemsList(itemsListName) {
    const itemsList = Object.assign({}, {name: itemsListName}); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minNameLength = 1;
        if (itemsList.name.length < minNameLength) {
          reject(`Title must be at least ${minNameLength} characters.`);
        }

        if (itemsList._id) {
          const existingItemsListIndex = itemLists.findIndex(element => element._id == itemsList._id);
          itemLists.splice(existingItemsListIndex, 1, itemsList);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          itemsList._id = generateId(itemsList);
          itemLists.push(itemsList);
        }

        resolve(itemsList);
      }, delay);
    });
  }

  static deleteItemsList(listId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexToDelete = itemLists.findIndex(element => element._id == listId);
        itemLists.splice(indexToDelete, 1);
        resolve();
      }, delay);
    });
  }


}

export default ItemListsApi;
