import { useState } from "react";


export const useTodos = () => {

  const [todos, setTodos] = useState([{
    id: 1,
    description: 'Aprender useContext',
    status: false
  }]);

  const handleUpdateStatus = () => {
    console.log('click here');
  };

  return {
    todos,
    handleUpdateStatus,
    setTodos,
  }
}
