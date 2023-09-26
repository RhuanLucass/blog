import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Article from "./pages/Article";

const Root = () => (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Main/>}/>
        <Route path="/articles/:id" element={<Article/>}/>
      </Routes>
    </BrowserRouter>
)

export default Root;