import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import ai from '../lib/axiosInstance';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setuser] = useState(() => {
    const res = localStorage.getItem('token');
    if (res) {
      return JSON.parse(res);
    }
    return '';
  });

  const setToken = value => {
    localStorage.setItem('token', JSON.stringify(value));
    setuser(value)
  };

  // const getToken = () => {
  //   const res = localStorage.getItem('token');
  //   if (res) {
  //     return JSON.parse(res);
  //   }
  //   return '';
  // };

  const clearToken = () => {
    localStorage.clear();
    setuser(null);
  }

  const login = useCallback(async (value, setError) => {
    try {
      const res = await ai.post('login', value);
      setToken(res.data);
    } catch (error) {
      setError('serverError', {
        type: 'server',
        message: error.response.data,
      });
    }
  }, []);

  const register = useCallback(async (value, setError) => {
    try {
      const { confirmPassword, ...rest } = value;
      const res = await ai.post('register', rest);
      setToken(res.data);
    } catch (error) {
      setError('serverError', {
        type: 'server',
        message: error.response.data,
      });
    }
  }, []);

  const logout = useCallback(
    () => {
      clearToken();
    },
    [],
  )

  const value = useMemo(
    () => ({
      login,
      register,
      logout,
      user
    }),
    [user],
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
