import React  from 'react';
import { useFormPageContext } from '../FormPageProvider';
import './styles/TableTodo.styles.scss';

const TableTodo = () => {

  const { 
    todos,
    handleUpdateStatus
  } = useFormPageContext();

  console.log('todos in table: ', todos);

  return (
    <section className='ctnTableTodo'>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos?.map((todo, index)=>(
            <tr key={`tr-${index}`}>
              <td>{index + 1}</td>
              <td>{todo?.description}</td>
              <td>{todo?.status ? 'REALIZADO' : 'PENDIENTE'}</td>
              <td>
                <button onClick={()=>handleUpdateStatus(todo?.id)}>
                  Click here
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default TableTodo;
