import NavbarHeader from "../Navbar/Navbar";

const Layout = (props) => {
  return (
    <>
      <header>
        <NavbarHeader />
      </header>

      <main>{props.children}</main>

      <footer className="container-fluid text-center bg-black p-5">
        <p className="text-white">Copyright deserved</p>
      </footer>
    </>
  );
};

export default Layout;
