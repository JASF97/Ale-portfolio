import { Header, 
  // Footer 
} from "./components";
import "./styles/index.scss";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import { ProjectDetail } from "./components/ProjectDetail/ProjectDetail";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";

function App() {
  const location = useLocation();
  const isLanding = location.pathname === "/";

  return (
    <>
      <ScrollToTop />
      {isLanding && <Header />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
        <Route path="/projects" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
