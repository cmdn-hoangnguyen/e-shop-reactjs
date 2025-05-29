import { Outlet } from 'react-router-dom';

import DefaultLayout from '../shared/layouts/DefaultLayout';

const Page = () => {
  return (
    <DefaultLayout>
      <Outlet />
    </DefaultLayout>
  );
};
export default Page;
