import React from 'react';
import { useCreateTodo } from '../hooks/useCreateTodo';
import { FormProvider } from 'react-hook-form';
import './styles/CreateTodo.styles.scss';

const CreateTodo = () => {

  const {
    form,
    onSubmit
  } = useCreateTodo();

  const { 
    handleSubmit, 
    register,
    formState: {
      errors
    },
  } = form;

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('description')}
          type="text"
          placeholder="Ingrese la descripción"
          className={errors?.description?.message ? 'errorInput' : 'normalInput'}
        />

        {errors?.description && (
          <span>{errors?.description?.message}</span>
        )}

        <button
          type="submit"
        >
          GUARDAR
        </button>
      </form>
    </FormProvider>
  )
}

export default CreateTodo;
