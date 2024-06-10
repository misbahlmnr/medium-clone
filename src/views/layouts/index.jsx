import Header from "@components/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container px-40 mx-auto">{children}</div>
    </>
  );
};

export default Layout;
