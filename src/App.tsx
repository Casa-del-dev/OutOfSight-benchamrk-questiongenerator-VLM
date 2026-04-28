import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./Layout.tsx";
import Homepage from "./pages/Homepage.tsx";
import QuetionView from "./pages/QuestionView.tsx";
import ResultsView from "./pages/ResultsView.tsx";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/questions" element={<QuetionView />}></Route>
          <Route path="/results" element={<ResultsView />}></Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
