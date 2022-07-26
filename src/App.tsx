import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageLayout } from "./components";
import { Films } from "./pages/Films";
import Home from "./pages/Home";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
            <Route index element={<Home />} />
        </Route>
        <Route path="/films" element={<PageLayout />}>
            <Route index element={<Films />} />
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
