import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useFormPageContext } from '../FormPageProvider';


export const useCreateTodo = () => {

  const { setTodos } = useFormPageContext();
  const [initialValues, setInitialValues] = useState({
    description: ''
  });

  const schemaValidation = yup.object({
    description: yup
      .string()
      .min(2, 'Mínimo 2 caracteres')
      .max(100, 'Máximo 100 caracteres')
  });

  const form = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(schemaValidation),
  });

  const onSubmit = (values) => {
    setTodos((prevTodo)=>{

      console.log('prevTodo: ', prevTodo);
      return [
        ...prevTodo,
        {
          id: values?.description,
          description: values?.description,
          status: false
        }
      ]
    });
  };

  return {
    form,
    onSubmit
  }
};
