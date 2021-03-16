const uuidv4 = require('uuid').v4;
const items = {};

const userItem = {};


addItemToUser('Aks','Tops');

function generateUUID()
{
    const uuid = uuidv4();
    return uuid;
}


function getItemsforUser(username)
{
    if(!userItem[username])
    {
        userItem[username] = 
        {
            items : {}
        }
    }
    return userItem[username].items;
}
function addItemToUser(username, task)
{
    if(!username)
    {
        return 400;
    }
    const id = generateUUID();
    items[id] = {
        itemId : id, 
        task : task,
        ranking:1,
    };
    if(!userItem[username])
    {
        userItem[username] = 
        {
            items : {}
        }
    }

    const newItems = userItem[username].items;
        newItems[id] = {
            itemId : id, 
            task : task,
            ranking:1,
        };
        
    userItem[username].items = newItems;
    return userItem[username].items;
}

function deleteItemUser(itemId,username)
{
    const retrieveItem = userItem[username].items;
    if(!retrieveItem[itemId])
    {
        return 404;
    }
    delete retrieveItem[itemId];
    userItem[username].items = retrieveItem;
    return userItem[username].items;
    
}

function updateItem(item, itemId, username)
{
    const retrieveItem = userItem[username].items;

    if(item.value==="increment")
    {
        retrieveItem[itemId].ranking++;
    }
    if(item.value==="decrement")
    {
        retrieveItem[itemId].ranking--;
    }

    userItem[username].items = retrieveItem;
    return {itemId:itemId, ranking:retrieveItem[itemId].ranking};
}

function checkDuplicateItem(username,task)
{
    
    for(eachItem in  userItem[username].items)
    {
        if(userItem[username].items[eachItem].task===task)
        {
            return 409;
        }
    }
    
}





module.exports = {items,userItem,deleteItemUser,addItemToUser,getItemsforUser,updateItem,checkDuplicateItem};