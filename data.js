let equipos = [
  { id: 1, nombre: 'Jaguares', jugadores: [
    { nombre: 'Heyden', posicion: 'Aldana' },
    { nombre: 'kenny', posicion: 'Menjivar' }
  ]},
  { id: 2, nombre: 'Los antropicanos', jugadores: [
    { nombre: 'Ruth', posicion: 'Reyes' }
  ]}
];

let arbitros = [
  { id: 1, nombre: 'Juan' }
];

let torneos = [
  { id: 1, nombre: 'Torneo Apertura 2026' }
];

let partidos = [
  { id: 1, torneoId: 1, equipoLocalId: 1, equipoVisitanteId: 2, arbitroId: 1, resultado: null }
];

module.exports = { equipos, arbitros, torneos, partidos };