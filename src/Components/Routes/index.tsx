import React, { Suspense } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';

import Home from '../../Pages/Home';
import AddEditUser from '../../Pages/AddEditUser';
import View from '../../Pages/View';
import NotFound from '../../Pages/NotFound';

const Router: React.FC = () => {

  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddEditUser />} />
        <Route path="/update/:id" element={<AddEditUser />} />
        <Route path="/view/:id" element={<View />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
