import requestPromiseComposer from './requestPromiseComposer';

class usersApi {

  static login(facebookAccessToken) {
    return requestPromiseComposer({
      path: '/login',
      method: 'POST',
      body: encodeURI('accessToken=' + facebookAccessToken)
    });
  }


  static getMe(accessToken) {
    return requestPromiseComposer({
      user: {accessToken},
      path: '/me'
    });
  }

  static getUser(accessToken, userId) {
    return requestPromiseComposer({
      user: {accessToken},
      path: '/users/' + userId
    });
  }

  static getUsers(accessToken, searchString) {
    return requestPromiseComposer({
      user: {accessToken},
      path: '/users',
      params: { name: searchString }
    });
  }
}

export default usersApi;
