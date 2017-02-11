import config from './config';

class ItemListsApi {

  static getAllItemLists(user) {
    const request = createRequest(user, '/itemLists');
    return createPromise(request);
  }

  static saveItemsList(user, itemsListName) {
    const body = encodeURI('name=' + itemsListName);
    const request = createRequest(user, '/itemLists', 'post', body);
    return createPromise(request);
  }

  static deleteItemsList(user, listId) {
    const request = createRequest(user, '/itemLists/' + listId, 'delete');
    return createPromise(request);
  }
}

function createPromise(request) {
  return new Promise((resolve, reject) => {
    fetch(request)
      .then(response => handleErrors(response))
      .then(response => response.json())
      .then(json => {
        resolve(json);
      })
      .catch(error => {
        reject(error);
      });
  });
}

function createRequest(user, path, method, body) {
  const uri = config.baseApiUrl + path;
  const token = user? user.accessToken : null;
  const init = {
    mode: 'cors',
    method: method || 'get',
    headers: new Headers({
      'Authorization': token
    })
  };
  if (body) {
    init.headers = new Headers({
      Accept: 'application/json, application/xml, text/plain, text/html, *.*',
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      Authorization: token
    });
    init.body = body;
  }
  return new Request(uri, init);
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error('Error ' + response.status);
  }
  return response;
}

export default ItemListsApi;
