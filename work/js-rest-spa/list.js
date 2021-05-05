
const uuidv4 = require('uuid').v4;
const items = {};

addItem('Jeans');
addItem('Tops');

function generateUUID()
{
    const uuid = uuidv4();
    return uuid;
}

function addItem(name)
{
    if(!name)
    {
        return 400;
    }
    for(eachItem in items)
    {
        if(items[eachItem].name==name)
        {
            return 409;
        }

    }
    const id = generateUUID();
    items[id] = {
        itemId : id, 
        name : name,
        quantity:0,
    };
    return items;
       
}

function deleteItem(itemId)
{
    if(!itemId)
    {
        return 400;
    }
    if(!items[itemId])
    {
        return 404;
    }
    delete items[itemId];
    return items;
}

function updateItem(item,itemId)
{
    if(!itemId || !item)
    {
        return 400;
    }
    if(!items[itemId])
    {
        return 404;
    }
    if(item.value=="increment")
    {
        items[itemId].quantity++;
    }
    if(item.value=="decrement")
    {
        if(items[itemId].quantity>=1)
        {
            items[itemId].quantity--;
        }
    }
    return items;
    
}



module.exports = {items,addItem,deleteItem,updateItem};