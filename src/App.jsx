import { useEffect } from 'react'
import AOS from 'aos';
import './App.css'
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './hooks/useScrollToTop';
import { Dashboard, Home } from './pages';
import Layout from './utils/Layout';
import AnimatedCursor from "react-animated-cursor"
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])

  return (
    <ParallaxProvider>
      <Router>
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
          <Route path="/dashboard" element={
            <Layout>
              <Dashboard />
            </Layout>
          } />
        </Routes>
      </Router>
    </ParallaxProvider>
  )
}

export default App
