import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageLayout } from "./components";
import Home from "./pages/Home";
//import { Palindrome } from "./practice/Palindrome";
// import CharactersPage from './pages/CharactersPage';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
            <Route index element={<Home />} />
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
