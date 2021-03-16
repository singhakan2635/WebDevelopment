"use strict";

(function iife() 
{

    const items = [
        {
            text: 'Tops',
            count : 0,
            disable : true,
        },
        {
            text: 'T-shirts',
            count : 0,
            disable : true,
        },
        {
            text:'Hoddie',
            count:0,
            disable : true,
        }
    ];
    
    const listEl = document.querySelector('#item-app .items');
    const inputEl = document.querySelector('#item-app input');
    const buttonEl = document.querySelector('#item-app button');
    
    render(items);

    disableButtonIfNoInput();
    addAbilityToAddItems();
    addAbilityToDeleteItems();
    addAbilityToIncreaseCount();
    addAdbilityToDecreaseCount();

    function render(items, val)
    {
        const html = items.map( (item, index) =>
        {
            return `
                <li>
                
                    <div class="delete-button">
                        <button class="delete" data-index="${index}">X</button>
                    </div>
                    <div class="description">
                        <span class="item" data-index="${index}"> 
                            ${item.text}
                        </span>
                    </div>
                    
                    <div class="list-count">
                        <button class="minus" data-index="${index}" data-val="decrement" ${item.disable ? "disabled":""}> - </button>
                        <span class="item item-count" data-index="${index}">
                            ${item.count}
                        </span>
                        <button class="plus" data-index="${index}"> + </button>
                    </div>
                
                </li>
            `;
        }).join('');
        
        listEl.innerHTML = html;
        
        buttonEl.disabled = !inputEl.value;

    };


    function disableButtonIfNoInput()
    {
        inputEl.addEventListener('input',() => 
        {
            buttonEl.disabled = !inputEl.value;
        });
    };

    function addAbilityToDeleteItems()
    {
        listEl.addEventListener('click', (e) =>
        {
            if(!e.target.classList.contains('delete'))
            {
                return;
            }
            const index = e.target.dataset.index;
            items.splice(index,1);
            render(items);
        })
    }

    function addAbilityToAddItems() {
        buttonEl.addEventListener('click', (e) => {
          
          const newItem = {
            text: inputEl.value,
            count : 0,
            disable :true,
          };

          items.push(newItem);
          inputEl.value = '';
          
          render(items);
        });
      }

      function addAbilityToIncreaseCount()
      {
        listEl.addEventListener('click' ,(e)=>
          {
              const index = e.target.dataset.index;
              
              if(e.target.classList.contains('plus'))
              {
                    items[index].disable=false;
                    items[index].count++;
              }
              
              render(items);
          })
      }

      function addAdbilityToDecreaseCount()
      {
            listEl.addEventListener('click', (e)=> {

                const index = e.target.dataset.index;
                  
                if(e.target.classList.contains('minus'))
                {
                    if(items[index].count<1)
                    {
                        items[index].disable=true;
                    }
                    else
                    {
                        items[index].disable=false;
                        items[index].count--;
                        if(items[index].count<1)
                        {
                            items[index].disable=true;
                        }
                    }
                }

                render(items);
          })
      }

      
      
})();