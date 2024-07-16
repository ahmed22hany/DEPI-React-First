import "./App.css";
import React, { useState } from "react";
import Input from "./components/Input";
import ProductList from "./components/ProductList";
import Layout from "./components/Layout";

function App() {
  const [searchKey, setSearchKey] = useState("");

  const handleChange = (e) => {
    setSearchKey(e.target.value);
  };

  return (
    <Layout>
      <h1 className="text-center my-5 fw-bolder">
        Looking for something special !!
      </h1>

      <Input
        type={"text"}
        placholder={"...Search for products"}
        title={"submit"}
        change={handleChange}
        value={searchKey}
      />
      <ProductList search={searchKey} />
    </Layout>
  );
}

export default App;
