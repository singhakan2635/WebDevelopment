export const checkSession = () => {
  return fetch('/api/session',  {
    method: 'GET',
  })
  .catch( () => Promise.reject({ error: 'network-error'} ) )
  .then( response => 
    {
    if(response.ok) 
    {
      return response.json();
    }
    return response.json().then( json => Promise.reject(json) );
  });
};

export const createSession = (username) => {
  console.log("username - "+username);
  return fetch('/api/session',  {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json',
    }),
    body: JSON.stringify({ username }),
  })
  .catch( () => Promise.reject({ error: 'network-error'} ) )
  .then( response => {
    if(response.ok) {
      return response.json();
    }
    return response.json().then( json => Promise.reject(json) );
  });
};

export const endSession = () => {
  return fetch('/api/session',  {
    method: 'DELETE',
  })
  .catch( () => Promise.reject({ error: 'network-error'} ) )
  .then( response => {
    if(response.ok) {
      return response.json();
    }
    return response.json().then( json => Promise.reject(json) );
  });
};

export const fetchToSendMessage = (message) =>
{
  return fetch('/chats', {
    method: 'POST',
    headers: new Headers({
      'content-type':'application/json',
    }),
    body: JSON.stringify({text:message})
  })
  .catch( ()=>
  {
    Promise.reject({ error: 'network-error'} );
  })
  .then( response => {
    if(response.ok) {
      return response.json();
    }
    return response.json().then( json => Promise.reject(json) );
  });
};


export const fetchUsers = () =>
{
  return fetch('/users' , {
    method:'GET',
  })
  .catch( ()=>
  {
    Promise.reject({ error: 'network-error'} );
  })
  .then( response => {
    if(response.ok) {
      return response.json();
    }
    return response.json().then( json => Promise.reject(json) );
  });
};

export const fetchMessageList = () =>
{
  return fetch('/chats', {
    method:'GET',
  })
  .catch( ()=>
  {
    Promise.reject({ error: 'network-error'} );
  })
  .then( response => {
    if(response.ok) {
      return response.json();
    }
    return response.json().then( json => Promise.reject(json) );
  });
}
