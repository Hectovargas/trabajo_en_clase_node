const express =require('express');
const app=express.Router();
let arbitros = [
 {id: 1, nombre: 'Efrain Gomez'},
 {id: 2, nombre: 'Pablo Montes'}
 {id: 3, nombre: 'Jose Torres'}
];
let idc=4;


app.post('/',(req,res) => {
    const {nombre}=req.body;

    const arbitro = {id=idc++, nombre=nombre.trim()};
    arbitros.push(arbitro);
    res.status(201).json({mensaje: 'Creado exitosamente'})
});

app.get('/',(req,res) =>{
    res.json({total: arbitros.length, arbitros: arbitros});
});

app.get('/:id',(req,res) => {
    const id=parseInt(req.params.id);
    const arbitro=arbitros.find(a => a.id ===id);
    if(!arbitro){
        return res.status(404).json({error: `arbitro ${id} no encontrado`});
    }
    res.json(arbitro);
});

app.get('/buscar:nombre',(req,res) => {
    const nombrearbitro=req.params.nombre.toLowerCase();

    const result= arbitros.filter(a=> a.nombre.toLowerCase().includes(nombrearbitro));
    res.json({busqueda: req.params.nombre, total: result.length, result: result});
});

app.put('/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const {nombre}= req.body;

    const i= arbitros.findIndex(a=> a.id==id);
    if(i==-1){
        return res.status(404).json({error: `arbitro con ${id} no encontrado`});
    }
    if(!nombre){
        return res.status(400).json({error: `El nombre es obligatorio`});
    }
    arbitros[i].nombre=nombre.trim();
    res.json({msj: `Arbitro actualizado`});
})

app.delete('/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const i=arbitros.findIndex(a=> a.id==id);

    if(i==-1){
        res.status(404).json({error: `arbitro con ${id} no encontrado`});
    }
    const eliminado=arbitros[index];
    arbitros.splice(index,1);
    res.json({msj: `Arbitro eliminado`})
})