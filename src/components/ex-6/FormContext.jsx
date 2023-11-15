import { createContext, useReducer, useContext } from 'react';

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
  },
  rememberMe: false,
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

    default:
      throw new Error('Unknown action');
  }
}

function FormProvider({ children }) {
  const [{ loginTab, signupTab, user }, dispatch] = useReducer(
    formReducer,
    initialState
  );

  return (
    <FormContext.Provider value={{ dispatch, loginTab, signupTab, user }}>
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
