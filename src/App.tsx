import React from "react";
import Navbar from "./components/header/Navbar";
import Hero from "./components/hero/Hero";
import Category from "./components/category/Category";
import About from "./components/about/About";
import Collaction from "./components/collation/Collaction";
import Blog from "./components/blog/Blog";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Category />
      <About />
      <Collaction />
      <Blog />
      <Footer />	
    </main>
  );
};

export default App;
