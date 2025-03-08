import React from 'react';
import { Route, Routes } from 'react-router';
import UploadImagesPage from './features/UploadImages/UploadImagesPage';

const App = () => {
  return (
    <Routes>
      <Route path="/upload-image" element={<UploadImagesPage />} />
    </Routes>
  )
}

export default App;
