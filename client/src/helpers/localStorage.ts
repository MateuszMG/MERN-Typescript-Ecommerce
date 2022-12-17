type LSKeys = 'accessToken';

export const addToLS = (key: LSKeys, value: object | string | null) =>
  localStorage.setItem(key, JSON.stringify(value));

export const getFromTheLS = (key: LSKeys) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

export const removeFromLS = (key: LSKeys) => localStorage.removeItem(key);
