import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RegionalHighlight from "./components/RegionalHighlight";
import Areas from "./components/Areas";
import Sobre from "./components/Sobre";
import Equipe from "./components/Equipe";
import Blog from "./components/Blog";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import BlogPage from "./components/BlogPage";
import BlogPost from "./components/BlogPost";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="font-sans bg-white min-h-screen">
      <Router>
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Areas />
                <RegionalHighlight />
                <Sobre />
                <Equipe />
                <Blog />
                <ContactForm />
              </>
            } />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}
