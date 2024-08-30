export const lazyLoad = (importFunc) => {
  return React.lazy(importFunc);
};

export const cacheData = (dataKey, data) => {
  localStorage.setItem(dataKey, JSON.stringify(data));
};

export const getCachedData = (dataKey) => {
  const data = localStorage.getItem(dataKey);
  return data ? JSON.parse(data) : null;
};