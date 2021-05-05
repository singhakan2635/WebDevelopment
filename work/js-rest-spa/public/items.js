"use strict";
(function iife() 
{

    const listEl = document.querySelector('.items');
    const inputEl = document.querySelector('.to-add');
    const buttonEl = document.querySelector('.add');
    const status = document.querySelector('.status');

    const errorMessages = {
        'duplicate': 'Duplicate Item!',
        'missing-name': 'Name field empty',
        'network-error': 'There was a problem connecting to the network, try again',
        'not-found': 'Item does not exist',
    };


    function updateStatus( message ) {
        status.innerText = message;
      };

    function render(items)
    {
    
        const html = Object.keys(items).map( (key) =>
        {
            const item = items[key];
            return `
                <li>
                
                    <div class="delete-button">
                        <button class="delete" data-id="${item.itemId}">X</button>
                    </div>
                    <div class="description">
                        <span class="item" data-id="${item.itemId}"> 
                            ${item.name}
                        </span>
                    </div>
                    
                    <div class="list-count">
                        <button class="minus" data-id="${item.itemId}" ${item.quantity==0 ? "disabled":""} > - </button>
                        <span class="item item-count" data-id="${item.itemId}" >
                            ${item.quantity}
                        </span>
                        <button class="plus" data-id="${item.itemId}"> + </button>
                    </div>
                
                </li>
            `;
        }).join('');
        
        listEl.innerHTML = html;
        buttonEl.disabled = !inputEl.value;

    };

    function convertError(response)
    {
        if(response.ok)
        {
            return response.json();
        }
        return response.json()
        .then(err => Promise.reject(err));
    }

    listEl.addEventListener('click', (e) => 
    {
        if(e.target.classList.contains('delete'))
        {
            const itemId = e.target.dataset.id;
            fetch(`/items/${itemId}`, {
                method:'DELETE',
            })
            .catch( () => Promise.reject( { error: 'network-error' }) )
            .then( convertError )
            .then (items => {
                render(items);
                updateStatus('')
        })
        .catch( err => {
            updateStatus(errorMessages[err.error] || err.error);
          });
        }
    });

    inputEl.addEventListener('input',() => 
    {
        buttonEl.disabled = !inputEl.value;
        
    });

    buttonEl.addEventListener('click', (e) => 
    {
        const itemName = inputEl.value;
        const regrex = /^[a-zA-z]+$/;
        const item = { name:itemName};
        if(!itemName.match(regrex))
        {
            updateStatus("Please enter alphabets only!");
        }
        else if(item.name)
        {
            fetch(`/items/`,{
                body: JSON.stringify(item),
                headers: { 'Content-type': 'application/json' },
                method:'POST',
            })
            .catch( () => Promise.reject( { error: 'network-error' }) )
            .then( convertError)
            .then( items => {
                inputEl.value = '';
                render(items);
                updateStatus('');
            })
            .catch( err => {
                inputEl.value = '';
                updateStatus(errorMessages[err.error] || err.error);
              });
        }
    });

    listEl.addEventListener('click', (e) => 
    {
        const itemsId = e.target.dataset.id;
              
        if(e.target.classList.contains('plus'))
        {
            const item = {
                value: "increment",
            };
            fetch(`/items/${itemsId}`, {
                body: JSON.stringify(item),
                headers: { 'Content-type': 'application/json' },
                method: 'PATCH',
            })
            .catch( () => Promise.reject( { error: 'network-error' }) )
            .then( convertError )
            .then( items => {
                render(items);
                updateStatus('');
            })
            .catch( err => {
                updateStatus(errorMessages[err.error] || err.error);
              });
        }
        if(e.target.classList.contains('minus'))
        {

            const item = {
                value: "decrement",
            };
            fetch(`/items/${itemsId}`, {
                body: JSON.stringify(item),
                headers: { 'Content-type': 'application/json' },
                method: 'PATCH',
            })
            .catch( () => Promise.reject( { error: 'network-error' }) )
            .then( convertError )
            .then( items => {
                render(items);
                updateStatus('');
            })
            .catch( err => {
                updateStatus(errorMessages[err.error] || err.error);
              });
        }
        
    })

    fetch('/items/', {
        method: 'GET',
      })
        .catch( () => Promise.reject( { error: 'network-error' }) )
        .then( convertError )
        .then( items => {
          render(items);
          updateStatus('');
        })
        .catch( err => {
            updateStatus(errorMessages[err.error] || err.error);
          });      
})();