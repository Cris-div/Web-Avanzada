const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Motor de plantillas
app.set('view engine', 'ejs');

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.get('/', (req, res) => {
  res.render('index', { titulo: 'Inicio' });
});

app.get('/nosotros', (req, res) => {
  res.render('nosotros', { titulo: 'Nosotros' });
});

app.get('/servicios', (req, res) => {
  res.render('servicios', { titulo: 'Servicios' });
});

app.get('/contacto', (req, res) => {
  res.render('contacto', { titulo: 'Contacto' });
});

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});