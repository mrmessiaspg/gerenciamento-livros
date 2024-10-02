import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import ListBooks from './components/ListBooks';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';

function App() {
    return (
        <Router>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">Gerenciamento de Livros</Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/books">Lista de Livros</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/add">Adicionar Livro</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/books" element={<ListBooks />} />
                    <Route path="/add" element={<AddBook />} />
                    <Route path="/edit/:id" element={<EditBook />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
