import { useEffect } from 'react'

export const useMount = (my_func) => {
  useEffect( () => {
    my_func();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
}

export const useUnmount = (my_func) => {
  useEffect( () => {
    return () => {
      my_func();
    }
  });
}
