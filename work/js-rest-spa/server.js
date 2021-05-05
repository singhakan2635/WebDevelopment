const express = require('express');
const app = express();
const PORT = 3000;

const items = require('./list');

app.use(express.static('./public'));

app.get('/items/', (req,res) => 
{
    res.json(items.items);
});

app.post('/items/', express.json(), (req, res) => 
{
    const item = req.body;

    const returnValue = items.addItem(item.name);
    if(returnValue==400)
    {
        res.status(400).json({ error: 'missing-name' });
        return;
    }
    if(returnValue == 409)
    {
        res.status(409).json({ error: 'duplicate' });
        return;
    }
    res.json(returnValue);



});

app.delete('/items/:itemId', (req , res) => 
{
    const itemId = req.params.itemId;
    
    const returnValue = items.deleteItem(itemId);
    if(returnValue==400)
    {
        res.status(400).json({ error: 'missing-name' });
        return;
    }
    if(returnValue == 404)
    {
        res.status(404).json({ error: 'not-found' });
        return;
    }

    res.json(returnValue);
})

app.patch('/items/:itemsId',express.json(), (req, res) => 
{
    const item = req.body;

    const itemsId = req.params.itemsId;
    const returnValue = items.updateItem(item,itemsId);
    if(returnValue == 400) {
        res.status(400).json({ error: 'missing-name' });
        return;
      }
    if(returnValue == 404) 
    {
        res.status(404).json({ error: 'not-found' });
        return;
      }

    res.json(returnValue);
})



app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));