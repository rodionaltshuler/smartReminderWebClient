import requestPromiseComposer from './requestPromiseComposer';

class usersApi {

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
