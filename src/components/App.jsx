import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { UsersPage } from 'pages/UsersPage';

export const App = () => {
  return (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route path="/users" element={<UsersPage />} />
      </Route>
    </Routes>
  );
};
