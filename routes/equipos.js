const express = require('express');
const router = express.Router();
const { equipos } = require('../data');

let nextId = 1;
let nextJugadoresId = 1;

router.get('/', (req,res) => {
    res.json(equipos);
});

//obtener en equipo
router.get('/:id', (req,res) => {
    const equipo = equipos.find(e => e.id == req.params.id);
    if (!equipo) return res.status(404).json({error: 'Equipo no encontrado'});
    res.json(equipo);
});

router.post('/', (req,res) => {
    const nuevo = { id: nextId++, nombre: req.body.nombre, jugadores: [] };
    equipos.push(nuevo);
    res.status(201).json(nuevo);
});

//postear jugador en equipo
router.post('/:id/jugadores', (req,res) => {
    const equipo = equipos.find(e => e.id == req.params.id);
    if(!equipo) return res.status(404).json({error: 'Equipo no encontrado'});

    const jugador = {id: nextJugadoresId++, nombre: req.body.nombre, posicion: req.body.posicion};
    equipo.jugadores.push(jugador);
    res.status(201).json(jugador);
});

//buscar jugador en equipo
router.get('/:id/jugadores',(req,res) => {
    const equipo = equipos.find(e => e.id == req.params.id);
    if (!equipo) return res.status(404).json({error: 'Equipo no encontrado'});
    res.json(equipo.jugadores);
});

//borrar equipos
router.delete('/:id',(req,res) => {
    const index = equipos.findIndex(e => e.id == req.params.id);
    if (index === -1) return res.status(404).json({error: 'Equipo no encontrado'});
    equipos.splice(index,1);
    res.status(204).send();
});

module.exports = router;

