import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
} from 'react';
import ai from '../lib/axiosInstance'

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const login = useCallback(async (value, setError) => {
    
    try {
        const res = await ai.post("login", value);
        console.log(res.data);
    } catch (error) {
        setError('serverError',  { type: 'server', message: error.response.data })
    }
  }, []);

  const register = useCallback(async (value) => {
    try {
        const {confirmPassword, ...rest} = value;
        const res = await ai.post("register", rest);
        console.log(res.data);
    } catch (error) {
        console.log(error.response.data);
    }
  }, []);

  const value = useMemo(
    () => ({
      login,
      register,
    }),
    [],
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
