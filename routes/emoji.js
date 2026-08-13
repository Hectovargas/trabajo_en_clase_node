const express= require('express');
const app=express.Router();

app.get('/random', async(req,res)=>{
    try{
        const response = await fetch('https://emojihub.yurace.pro/api/random');
        if(!response.ok)
            throw new Error("EmojiHub no respondio");
        const data = await response.json();
        res.json(data);
    }catch(err){
        console.error(err);
        res.status(500).json({error: "No se pudo abrir"});
    }
});
module.exports =app;