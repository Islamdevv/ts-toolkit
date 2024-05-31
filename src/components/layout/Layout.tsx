import MainRoutes from "../../routes/MainRoutes";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import css from "./Layout.module.scss";
const Layout = () => {
  return (
    <div className={css.layout}>
      <Header />
      <main>
        <MainRoutes />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
