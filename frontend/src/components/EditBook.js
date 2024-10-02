import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditBook = () => {
    const { id } = useParams();
    const [book, setBook] = useState({ nome: '', autor: '', editora: '' });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBook = async () => {
            const response = await axios.get(`http://localhost:5000/api/books/${id}`);
            setBook(response.data);
        };
        fetchBook();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:5000/api/books/${id}`, book);
        navigate('/books');
    };

    return (
        <form onSubmit={handleSubmit} className="mt-3">
            <h2>Editar Livro</h2>
            <input className="form-control mb-2" value={book.nome} onChange={e => setBook({ ...book, nome: e.target.value })} required />
            <input className="form-control mb-2" value={book.autor} onChange={e => setBook({ ...book, autor: e.target.value })} required />
            <input className="form-control mb-2" value={book.editora} onChange={e => setBook({ ...book, editora: e.target.value })} required />
            <button type="submit" className="btn btn-warning">Salvar</button>
        </form>
    );
};

export default EditBook;
