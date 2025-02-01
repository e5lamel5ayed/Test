/* eslint-disable @typescript-eslint/no-use-before-define */
import { Route, Routes, Navigate } from 'react-router-dom';
import { PermanentDrawerRight } from '../Modules/layout/MasterLayout';

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<PermanentDrawerRight />}>
        <Route path="auth/*" element={<Navigate to="/dashboard/" />} />

        <Route path="*" element={<Navigate to="/error/404" />} />
      </Route>
    </Routes>
  );
};

// const SuspensedView: FC<WithChildren> = ({ children }) => {
//   const baseColor = getCSSVariableValue('--bs-primary');
//   TopBarProgress.config({
//     barColors: {
//       0: baseColor,
//     },
//     barThickness: 1,
//     shadowBlur: 5,
//   });
//   return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>;
// };

export { PrivateRoutes };
