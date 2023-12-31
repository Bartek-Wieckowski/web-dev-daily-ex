import { createContext, useReducer, useContext, useEffect } from 'react';

const FormContext = createContext();

const initialState = {
  loginTab: true,
  signupTab: false,
  user: {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    rePassword: '',
    rememberMe: false,
  },
  logged: false,
};

function formReducer(state, action) {
  switch (action.type) {
    case 'loginTab/actived':
      return {
        ...state,
        loginTab: true,
        signupTab: false,
      };
    case 'signupTab/actived':
      return {
        ...state,
        loginTab: false,
        signupTab: true,
      };
    case 'user/registered':
      return {
        ...state,
        user: action.payload,
      };
    case 'user/logged':
      return {
        ...state,
        logged: true,
      };
    case 'user/logouted':
      return {
        ...state,
        logged: false,
        user: {
          ...state.user,
          rememberMe: false,
        },
      };
    case 'user/deleted':
      return {
        loginTab: false,
        signupTab: true,
        user: {
          firstname: '',
          lastname: '',
          email: '',
          password: '',
          rePassword: '',
          rememberMe: false,
        },
        logged: false,
      };
    case 'user/fetchedFromDB':
      return {
        ...state,
        user: action.payload,
      };
    case 'user/remembered':
      return {
        ...state,
        user: {
          ...state.user,
          rememberMe: action.payload,
        },
      };

    default:
      throw new Error('Unknown action');
  }
}

function FormProvider({ children }) {
  const [{ loginTab, signupTab, user, logged }, dispatch] = useReducer(
    formReducer,
    initialState
  );

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      dispatch({ type: 'user/fetchedFromDB', payload: JSON.parse(storedUser) });
    }
  }, []);

  return (
    <FormContext.Provider
      value={{ dispatch, loginTab, signupTab, user, logged }}
    >
      {children}
    </FormContext.Provider>
  );
}

function useForm() {
  const context = useContext(FormContext);
  if (context === undefined)
    throw new Error('FormContext was use otuside FormProvider');
  return context;
}

export { useForm, FormProvider };
