const uuid = require('uuid').v4;
const list = require('./item-list');
const userSession = {};

const isValidSession = function(sid) 
{
   
    if(userSession[sid])
    {
        return true;
    }
    else{
        return false;
    }
  };
  const validateUsername = function(username) {
    const errors = [];
    const clean = username.replace(/[^A-Za-z0-9_]+/g, '');
    if( clean !== username ) {
      // TODO: should give error codes, not text messages
      errors.push('username contained disallowed characters');
    }
    if(!username || username.toUpperCase().includes("DOG") || !(/^\S+$/.test(username))) {
      errors.push('username-missing');
    }
  
    return errors.lengths ? errors : '';
  };
  const createSession = function(username) 
  {
    const errors = [];
    const sid = uuid();
    
    userSession[sid] = {
      username:username,
      todos : list.getItemsforUser(username),
    
    };
    return sid;
  };

  const deleteuserinfo = function( itemId, sid)
  {
      const errors = [];
      const username = userSession[sid].username;
      if(!username)
      {
          errors.push('username-missing');
      }
      if(!itemId)
      {
          errors.push('missing-id');
      }
      if(!sid)
      {
          errors.push('missing-sid');
      }
      const returnItem = list.deleteItemUser(itemId,username);
      if(resultItem==404)
      {
          errors.push('Item does not exist');
      }

      return errors.lengths ? errors : '';
  }

  const addItemtoUser = function( task , username, sid)
  {
    
    const errors = list.checkDuplicateItem(username,task);
  
    if(errors == 409)
    {
        return errors;
    }

    userSession[sid].todos = list.addItemToUser(username,task)
  
    return 200;

  }

  const updateItemRanking = function( item, itemId, sid)
  {
      resultItem = list.updateItem(item,itemId,item.username);
      return resultItem;
  }

  const updateSessionData = function(sid,username)
  {
      const errors = [];
      if(!username)
      {
          return 400;
      }
      userSession[sid].todos = list.getItemsforUser(username);
      return 200;
  }

  

module.exports = {userSession,isValidSession,validateUsername,createSession,addItemtoUser,deleteuserinfo,updateItemRanking,updateSessionData}