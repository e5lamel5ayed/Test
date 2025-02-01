import { Routes, Route } from 'react-router-dom';
import StudentPage from './pages/studentPage';



const ProfilePage = () => (
  <Routes>
    <Route index element={<StudentPage />} />
   
  </Routes>
  );

export default ProfilePage;
