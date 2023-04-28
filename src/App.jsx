import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./Components/Header";
import Main from "./pages/planets";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/planets/mercury" />} />

        <Route path="/planets/:name" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
