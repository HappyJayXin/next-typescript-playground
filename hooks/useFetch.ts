import { useEffect, useReducer } from 'react';

const dataReducer = (state, action) => {
  switch (action.type) {
    case 'loading':
      return { ...state, loading: true };
    case 'response':
      return { ...state, loading: false, data: action.data };
    case 'error':
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

const useFetch = (url, options = {}) => {
  const [{ loading, error, data }, dispatch] = useReducer(dataReducer, {
    data: null,
    loading: false,
    error: null
  });

  const serializedOptions = JSON.stringify(options);

  useEffect(() => {
    dispatch({ type: 'loading' });

    fetch(url, JSON.parse(serializedOptions))
      .then((res) => {
        console.log(res.status, res.statusText);
        return res.json();
      })
      .then((data) => dispatch({ type: 'response', data }))
      .catch((error) => dispatch({ type: 'error', error }));
  }, [url, serializedOptions]);

  return { loading, error, data };
};

export default useFetch;
