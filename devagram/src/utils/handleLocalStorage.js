const add = (key, value) => {
  localStorage.setItem(key, value);
};

const remove = (key) => {
  localStorage.removeItem(key);
};

const get = (key) => {
  return localStorage.getItem(key);
};

export { add, remove, get };
