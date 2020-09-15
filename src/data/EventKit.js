const ROOT_URL = "http://yoshi.willandskill.eu:8999/api/v1/";
const LOGIN_URL = `${ROOT_URL}auth/api-token-auth/`;
const EVENT_LIST_URL = `${ROOT_URL}events/events/`;
const EVENT_PAGE_LIST = `${ROOT_URL}cms/{event_slug}/pages`;
const EVENT_MAIN_PAGE = `${ROOT_URL}cms/{event_slug}/main-page/`;

// Credentials:

// const EMAIL = `test.user@willandskill.se`;
// const PASSWORD = "js-lesson-10";

export default class {
  login = async (email, password) => {
    const payload = { email, password };
    return fetch(LOGIN_URL, {
      method: "POST",
      headers: this.getPublicHeaders(),
      body: JSON.stringify(payload),
    });
  };

  fetchEventList = async () => {
    return fetch(EVENT_LIST_URL, {
      headers: this.getPrivateHeaders(),
    });
  };

  fetchEventDetailPage = async (eventSlug) => {
    return fetch(EVENT_MAIN_PAGE, {
      headers: this.getPrivateHeaders(),
    });
  };

  setToken(token) {
    localStorage.setItem("EVENT_APP_TOKEN", token);
  }

  getToken() {
    localStorage.getItem("EVENT_APP_TOKEN");
  }

  getPublicHeaders() {
    return {
      "Content-Type": "application/json"
    };
  }

  getPrivateHeaders() {
    return {
      "Content-type": "application/json",
      Authorization: `Bearer ${this.getToken}`,
    };
  }
}
