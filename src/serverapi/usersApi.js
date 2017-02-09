import requestPromiseComposer from './requestPromiseComposer';

class usersApi {

  static login(facebookAccessToken) {
    return requestPromiseComposer({
      path: '/login',
      method: 'POST',
      body: encodeURI('accessToken=' + facebookAccessToken)
    });
  }


  static getMe() {
    return requestPromiseComposer({
      path: '/me'
    });
  }

  static getUser(userId) {
    return requestPromiseComposer({
      path: '/users/' + userId
    });
  }
}

export default usersApi;
