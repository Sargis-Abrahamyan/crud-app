import { createRoot } from 'react-dom/client';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { BrowserRouter } from 'react-router-dom';

import App from './Components/App';
import { usersApi } from './Features/Api/api';
import './index.css';

createRoot(document.getElementById('root') as HTMLElement).render(
  <ApiProvider api={usersApi}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApiProvider>
);
