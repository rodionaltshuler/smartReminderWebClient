import config from './config';
import accessToken from './accessToken';


class ItemListsApi {

  static getAllItemLists() {
    const request = createRequest('/itemLists');
    return createPromise(request);
  }

  static saveItemsList(itemsListName) {
    const body = encodeURI('name=' + itemsListName);
    const request = createRequest('/itemLists', 'post', body);
    return createPromise(request);
  }

  static deleteItemsList(listId) {
    const request = createRequest('/itemLists/' + listId, 'delete');
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

function createRequest(path, method, body) {
  const uri = config.baseApiUrl + path;
  const token = accessToken;
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
