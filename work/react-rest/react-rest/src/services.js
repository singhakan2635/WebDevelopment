export function fetchCats()
{
    return fetch('/api/catList')
    .catch( () => {
        return Promise.reject({ error: 'network-error' });
       })
      .then( response => {
        if(response.ok) 
        {
          return response.json();
        }
        return response.json().then( err => Promise.reject(err) );
      });
};