import { Outlet } from "react-router-dom";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

const Page = () => {
  return (
    <div className="page-container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
export default Page;
