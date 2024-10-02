import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
    const [nome, setNome] = useState('');
    const [autor, setAutor] = useState('');
    const [editora, setEditora] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/books', { nome, autor, editora });
        navigate('/books');
    };

    return (
        <form onSubmit={handleSubmit} className="mt-3">
            <h2>Adicionar Novo Livro</h2>
            <input className="form-control mb-2" value={nome} onChange={e => setNome(e.target.value)} placeholder="Nome" required />
            <input className="form-control mb-2" value={autor} onChange={e => setAutor(e.target.value)} placeholder="Autor" required />
            <input className="form-control mb-2" value={editora} onChange={e => setEditora(e.target.value)} placeholder="Editora" required />
            <button type="submit" className="btn btn-success">Adicionar</button>
        </form>
    );
};

export default AddBook;
