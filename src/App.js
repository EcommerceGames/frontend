import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Fragment } from "react";
import DefaultLayout from "./layouts";

function App() {
  return (
    <Routes>
      {routes.map((route, index) => {
        const Layout = route.isShowHeader ? DefaultLayout : Fragment;
        const Page = route.page;
        return (
          <Route
            key={index}
            path={route.path}
            element={
              <Layout>
                <Page />
              </Layout>
            }
          />
        );
      })}
    </Routes>
  );
}

export default App;
