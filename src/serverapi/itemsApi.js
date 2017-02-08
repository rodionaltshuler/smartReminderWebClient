import config from './config';
import accessToken from './accessToken';

class ItemsApi {

  static getItems(listId) {
    const request = createRequest({
      path: '/item',
      params: {listId}
    });
    return createPromise(request);
  }

  static addItem(itemName, listId) {
    console.log('Saving item with name '+ itemName + ' and listId ' + listId);
    const request = createRequest({
      path: '/item',
      method: 'POST',
      body: encodeURI('name=' + itemName + '&listId=' + listId)
    });
    return createPromise(request);
  }

  static removeItem(itemId) {
    const request = createRequest({
      path: '/item/' + itemId,
      method: 'DELETE'
    });
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

function createRequest({path, method, body, params}) {
  let url = new URL(config.baseApiUrl + path);
  if (params) {
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
  }
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
  return new Request(url, init);
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error('Error ' + response.status);
  }
  return response;
}

export default ItemsApi;
