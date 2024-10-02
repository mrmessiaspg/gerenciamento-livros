import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const response = await axios.get('http://localhost:5000/api/books');
            setBooks(response.data);
        };
        fetchBooks();
    }, []);

    return (
        <div>
            <h2>Lista de Livros</h2>
            <Link to="/add" className="btn btn-primary">Adicionar Livro</Link>
            <ul className="list-group mt-3">
                {books.map(book => (
                    <li key={book._id} className="list-group-item d-flex justify-content-between align-items-center">
                        {book.nome} - {book.autor}
                        <div>
                            <Link to={`/edit/${book._id}`} className="btn btn-warning btn-sm">Editar</Link>
                            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(book._id)}>Deletar</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/books/${id}`);
    // Aqui você deve atualizar a lista de livros após a exclusão
};

export default ListBooks;
