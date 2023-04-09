import { Route, Routes } from 'react-router-dom';
import BooksList from './pages/BookList';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<BooksList />} />
    </Routes>
  );
}

export default App;
