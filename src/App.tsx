import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./Layout.tsx";
import Homepage from "./pages/Homepage.tsx";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
