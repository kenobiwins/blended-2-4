import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { UsersPage } from 'pages/UsersPage';
import { UserDetailPage } from 'pages/UsersDetailPage';
import { UserAddPage } from 'pages/UserAddPage';
import { EditUserPage } from 'pages/EditUserPage';

export const App = () => {
  return (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:userId" element={<UserDetailPage />} />
        <Route path="/users/update/:userId" element={<EditUserPage />} />
        <Route path="/users/add" element={<UserAddPage />} />
      </Route>
    </Routes>
  );
};
