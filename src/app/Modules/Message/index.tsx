import { Routes, Route } from 'react-router-dom';

import MessagePage from './pages/messagePage';



const ProfilePage = () => (
  <Routes>
 
    <Route index element={<MessagePage />} />
   
  </Routes>
  );

export default ProfilePage;
