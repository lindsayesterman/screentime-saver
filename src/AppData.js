import config from "./config.js";
import TokenService from "./services/token-service";

export const fetchAppData = () => {
  if (!TokenService.getAuthToken()) {
    return Promise.reject();
  }
  return Promise.all([
    fetch(`${config.API_ENDPOINT}/users`, {
      headers: {
        Authorization: "bearer " + TokenService.getAuthToken(),
      },
    }),
    fetch(`${config.API_ENDPOINT}/scrtimes`, {
      headers: {
        Authorization: "bearer " + TokenService.getAuthToken(),
      },
    }),
  ]).then(([usersRes, scrtimesRes]) => {
    if (!usersRes.ok) return usersRes.json().then((e) => Promise.reject(e));
    if (!scrtimesRes.ok)
      return scrtimesRes.json().then((e) => Promise.reject(e));

    return Promise.all([usersRes.json(), scrtimesRes.json()]);
  });
};
