import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import Search from "./Component/SearchDiv/Search";
import Jobs from "./Component/JobDiv/Jobs";
import Value from "./Component/ValueDiv/Value";
import Footer from "./Component/FooterDiv/Footer";

const App = () => {
  return (
    <div className="w-[85%] m-auto bg-white">
      <Navbar />
      <Search />
      <Jobs />
      <Value />
      <Footer />
    </div>
  );
};

export default App;
