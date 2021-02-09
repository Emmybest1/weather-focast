import {useEffect} from 'react';

export const useLocalStorage = (key, value) => {
  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      if (typeof value === 'object' && !Array.isArray(value)) {
        window.localStorage.setItem(key, JSON.stringify(value));
      } else {
        window.localStorage.setItem(key, value);
      }
    }

    return () => {
      isMounted = false;
    };
  });
};

export const localStorage = (key, value) => {
  if (typeof value === 'object' && !Array.isArray(value)) {
    window.localStorage.setItem(key, JSON.stringify(value));
  } else {
    window.localStorage.setItem(key, value);
  }
};
