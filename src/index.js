const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Conexão com o MongoDB local
mongoose.connect('mongodb://localhost:27017/livros', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log('Conectado ao MongoDB'))
.catch(err => console.error('Erro ao conectar ao MongoDB:', err));

app.use(cors());
app.use(bodyParser.json());
app.use('/api/books', bookRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
