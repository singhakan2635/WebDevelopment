export const checkLoginStatus = function() {
  return fetch('/session', {
    method: 'GET',
  })
  .catch( () => {
    return Promise.reject({ error: 'network-error' });
   })
  .then( response => {
    if(response.ok) 
    {
      console.log("Response - "+response);
      return response.json();
    }
    return response.json().then( err => Promise.reject(err) );
  });
};

export const performLogin = function( username ) {
  return fetch('/session', {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json',
    }),
    body: JSON.stringify({ username }),
  })
  .catch( () => {
    return Promise.reject({ error: 'network-error' });
   })
  .then( response => {
    if(response.ok) {
      return response.json();
    }
    return response.json().then( err => Promise.reject(err) );
  });
};

export const deleteItem = function( itemId ) 
{
  return fetch(`/items/${itemId}`, {
    headers: { 'Content-type': 'application/json' },
    method:'DELETE',
  })
  .catch( () => Promise.reject( { error: 'network-error' }))
  .then( response => {
    if(response.ok) {
      return response.json();
    }
    return response.json().then( err => Promise.reject(err) );
  });

};

export const fetchLogout = function ()
{
    return fetch(`/session`, {
      headers: { 'Content-type': 'application/json' },
      method:'DELETE',
    })
    .catch( () => Promise.reject( { error: 'network-error' }))
    .then( response => {
      if(response.ok) {
        return response.json();
      }
      return response.json().then( err => Promise.reject(err) );
    });

};

export const fetchPostToAddItem = function(item)
{
    return fetch('/items/', {
      method:'POST',
      body: JSON.stringify(item),
      headers: { 'Content-type': 'application/json' },
      
  })
  .catch( () => Promise.reject( { error: 'network-error' }) )
  .then( response => {
    if(response.ok) {
      return response.json();
    }
    return response.json().then( err => Promise.reject(err) );
  });
}

export const fetchPatchRanking = function(item,itemsId)
{
  return fetch(`/items/${itemsId}`, {
    body: JSON.stringify(item),
    headers: { 'Content-type': 'application/json' },
    method: 'PATCH',
    })
    .catch( () => Promise.reject( { error: 'duplicate' }) )
    .then( response => {
      if(response.ok) {
        return response.json();
      }
      return response.json().then( err => Promise.reject(err) );
    });
}

export const fetchGet = function()
{
   return fetch(`/items/` , {
    headers: { 'Content-type': 'application/json' },
    method: 'GET',
   })
   .catch( () => Promise.reject( { error: 'network-error' }) )
    .then( response => {
      if(response.ok) {
        return response.json();
      }
      return response.json().then( err => Promise.reject(err) );
    });

}

function convertError(response)
    {
        if(response.ok)
        {
            return response.json();
        }
        return response.json()
        .then(err => Promise.reject(err));
    }


