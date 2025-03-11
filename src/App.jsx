import React from 'react';
import { Route, Routes } from 'react-router';
import { routes } from './navigation/Router';

const App = () => {
  return (
    <Routes>
      {routes?.map((route, index)=>(
        <Route key={index} path={route?.path} element={<route.element />} />
      ))}
    </Routes>
  )
}

export default App;
