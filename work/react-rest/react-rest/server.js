const express = require('express');
const app = express();
const PORT = 5000;
const facts = require('./cats-fact.json');

app.use(express.static('./build'));

app.get('/api/catList', (req , res) =>
{
    setTimeout( ()=>
    {
        res.json(facts);
    }, 3000);
})

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));