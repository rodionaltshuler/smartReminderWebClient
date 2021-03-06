import config from './config';

class ItemsApi {

  static getItems(user, listId) {
    const request = createRequest({
      user,
      path: '/item',
      params: {listId}
    });
    return createPromise(request);
  }

  static addItem(user, itemName, listId) {
    console.log('Saving item with name '+ itemName + ' and listId ' + listId);
    const request = createRequest({
      user,
      path: '/item',
      method: 'POST',
      body: encodeURI('name=' + itemName + '&listId=' + listId)
    });
    return createPromise(request);
  }

  static removeItem(user, itemId) {
    const request = createRequest({
      user,
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

function createRequest({user, path, method, body, params}) {
  let url = new URL(config.baseApiUrl + path);
  if (params) {
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
  }
  const token = user ? user.accessToken : null;
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
