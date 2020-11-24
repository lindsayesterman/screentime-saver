import config from "../config";

const FriendsApiService = {
  getFriends() {
    return fetch(`${config.API_ENDPOINT}/api/friends`, {
      headers: {},
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getFriend(friendId) {
    return fetch(`${config.API_ENDPOINT}/friends/${friendId}`, {
      headers: {},
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default FriendsApiService;