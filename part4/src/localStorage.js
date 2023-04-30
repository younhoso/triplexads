const store = {
  setLocalStorage(name, notes) {
    return localStorage.setItem(name, JSON.stringify(notes));
  },
  getLocalStorage(name) {
    return JSON.parse(localStorage.getItem(name));
  },
};

export default store;
