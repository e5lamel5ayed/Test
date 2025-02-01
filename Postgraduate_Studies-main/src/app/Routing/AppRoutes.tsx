import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import {PermanentDrawerRight} from '../Modules/layout/MasterLayout';

const AppRoutes: FC = () => {
  return (
    // <HashRouter>
      <Routes>
          <Route path="/" element={<PermanentDrawerRight />} />

        </Routes>
    // </HashRouter>
  );
};

export { AppRoutes };
