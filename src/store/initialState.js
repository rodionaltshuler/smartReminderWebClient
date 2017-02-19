const initialState = {
  me: null,
  itemLists: [],
  items: [],
  users: {

    //cache - a dictionary: keys - user ids, values - user objects
    cache: {

    },

    //searches - a dictionary, where search strings is a key, and user ids array for this string is value
    searches: {

    }

  },
  ajaxCallsInProgress: 0
};

export default initialState;
