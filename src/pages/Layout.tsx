import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Loader from "../components/Loader";

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <section className="flex flex-col items-center">
            <Outlet />
          </section>
        </Suspense>
      </main>
    </>
  );
}
export default Layout;
