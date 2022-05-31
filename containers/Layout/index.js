import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <div className="container p-2 xl:max-w-screen-xl mx-auto">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
