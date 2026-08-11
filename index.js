const express = require('express');
const app = express();
app.use(express.json());

app.use('/equipos', require('./routes/equipos'));

app.get('/',(req,res) =>{
    res.send('sixseven');
});
const port = 6767;
app.listen(port, () =>{
    console.log('funcionando');
})