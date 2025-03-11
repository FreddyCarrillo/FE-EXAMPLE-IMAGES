import React from 'react';
import TableTodo from './components/TableTodo';
import CreateTodo from './components/CreateTodo';
import { FormPageProvider } from './FormPageProvider';
import './FormPage.styles.scss';

const FormPage = () => {
  return (
    <FormPageProvider>
      <CreateTodo/>
      <TableTodo/>
    </FormPageProvider>
  )
}

export default FormPage;
