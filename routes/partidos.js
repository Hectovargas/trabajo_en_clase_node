const express = require('express');
const app =express.Router();
const {partidos}=require('../data');

app.post('/', (req, res) => {
    const { torneoId, equipoLocalId, equipoVisitanteId, arbitroId, fecha } = req.body;

    if (!torneoId || !equipoLocalId || !equipoVisitanteId || !fecha) {
        return res.status(400).json({ error: 'Faltan datos obligatorios' });
    }

    const nuevoPartido = {
        id: partidos.length + 1,
        torneoId,
        equipoLocalId,
        equipoVisitanteId,
        arbitroId: arbitroId || null,
        resultado: null,
        fecha
    };

    partidos.push(nuevoPartido);
    res.status(201).json({ mensaje: 'Partido creado', partido: nuevoPartido });
});

app.get('/', (req, res) => {
    res.json(partidos);
});

app.get('/:id', (req, res) => {
    const partido = partidos.find(p => p.id === parseInt(req.params.id));
    
    if (!partido) {
        return res.status(404).json({ error: 'Partido no encontrado' });
    }
    
    res.json(partido);
});

app.get('/buscar', (req, res) => {
    const { torneoId, equipoId, arbitroId } = req.query;
    
    let resultados = partidos;
    
    if (torneoId) {
        resultados = resultados.filter(p => p.torneoId === parseInt(torneoId));
    }
    
    if (equipoId) {
        const id = parseInt(equipoId);
        resultados = resultados.filter(p => 
            p.equipoLocalId === id || p.equipoVisitanteId === id
        );
    }
    
    if (arbitroId) {
        resultados = resultados.filter(p => p.arbitroId === parseInt(arbitroId));
    }
    
    res.json(resultados);
});

module.exports = app;