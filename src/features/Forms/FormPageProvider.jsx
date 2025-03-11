import React, { createContext, useContext } from 'react';
import { useTodos } from './hooks/useTodos';

const FormContext = createContext(null);

export const FormPageProvider = ({children}) => {

  const values = useTodos();

  return (
    <FormContext.Provider value={values}>
      {children}
    </FormContext.Provider>
  )
}

export const useFormPageContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormPage necesita el provider: FormPageProvider');
  }
  return context;
}