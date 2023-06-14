import { useEffect } from 'react'
import AOS from 'aos';
import './App.css'
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './hooks/useScrollToTop';
import { Dashboard, Home, About, Team, Blogs } from './pages';
import Layout from './utils/Layout';
import AnimatedCursor from "react-animated-cursor"
import { ParallaxProvider } from 'react-scroll-parallax';
import { WalletProvider } from './context/WalletContext';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])

  return (
    <ParallaxProvider>
      <Router>
        <WalletProvider>
        <ScrollToTop />
        <AnimatedCursor
          innerSize={10}
          outerSize={42}
          color='168, 85, 247'
          innerScale={1.2}
          outerScale={1.5}
          outerStyle={{
            border: '2px solid gray',
            backgroundColor: 'transparent'
          }} />
        <Routes>
          <Route path="/" element={
            <Layout>
              <Home />
            </Layout>
          } />
          <Route path="/collection" element={
            <Layout>
              <Dashboard />
            </Layout>
          } />
          <Route path="/about" element={
            <Layout>
              <About />
            </Layout>
          } />
          <Route path="/team" element={
            <Layout>
              <Team />
            </Layout>
          } />
          <Route path="/blogs" element={
            <Layout>
              <Blogs />
            </Layout>
          } />
        </Routes>
        </WalletProvider>
      </Router>
    </ParallaxProvider>
  )
}

export default App
