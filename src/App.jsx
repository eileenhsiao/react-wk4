import { BrowserRouter, Routes, Route } from 'react-router'

import './App.css';
import Home from './pages/Home'
import Book from './pages/Book';
import Category from './pages/Category'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="books">
        <Route path="category/:categoryName" element={<Category />} />
        <Route path="id/:bookId" element={<Book />} />
      </Route>
    </Routes>
  </BrowserRouter>  );
}

export default App;
