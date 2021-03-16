import {
  checkLoginStatus,
  performLogin,
  deleteItem,
  fetchLogout,
  fetchPostToAddItem,
  fetchPatchRanking,
  fetchGet
} from './services';

const appSate = {
  pollId :null,
  isLoggedIn:false,
  items:{},
  username : '',
  ascending: false,
  descending : false,

}; // TODO - should be object, not array


// Check for login
checkLoginStatus()
.then( (userInfo) => {
  showContent();
  appSate.items = userInfo.todos;
  poll(true);
  updateStatus('');
  renderTodos(appSate.items);
})
.catch( err => {
  updateStatus(errorMessages[err.error] || err.error);
  if(!appSate.isLoggedIn)
  {
    showLogin();
  }
  
});

addLogin();
// TODO: Move these HTML-changing functions to an import from another file
function showContent() {
  document.querySelector('#todo-app .login').classList.add('hidden');
  document.querySelector('#todo-app .logged-in').classList.remove('hidden');
}

function showLogin() {
  document.querySelector('#todo-app .login').classList.remove('hidden');
  document.querySelector('#todo-app .logged-in').classList.add('hidden');
}

function addLogin() {
  document.querySelector('#todo-app .login button').addEventListener('click', () => {
    const usernameEl = document.querySelector('#todo-app .login input');
    const username = usernameEl.value;
    // call service
    performLogin(username)
    .then( userInfo => {
      showContent();
      appSate.isLoggedIn = true;
      appSate.items = userInfo.todos;
      appSate.username = userInfo.username;
      usernameEl.value='';
      updateStatus('');
      poll(true);
      renderTodos(appSate.items);
    })
    .catch( err => {
      updateStatus(errorMessages[err.error] || err.error);
      console.log(err);
    })
  });
}

const errorMessages = {
  'duplicate': 'Duplicate Item!',
  'missing-username': 'Username field empty',
  'network-error': 'There was a problem connecting to the network, try again',
  'missing-value' : 'Value is not generated',
  'not-found': 'Item does not exist',
  'login-required' : 'SID is missing or empty',
  'login-invalid' : 'Bad login',
  'missing-sid' : 'sid is missing',
  'sid-unknown': 'SID is unknown',
  'no-sid-generated' : 'SID not generated',
  'missing-id' : 'ItemId is missing',
  'username-missing' : 'username was empty',
  'invalid-username' : 'username contained disallowed characters',
 
};

function updateStatus( message ) 
{
  status.innerText = message;
};

const listEl = document.querySelector('#todo-app .todos');
const inputEl = document.querySelector('.to-add');
const addButtonEl = document.querySelector('.add');
const status = document.querySelector('.status');
const logoutButtonEL = document.querySelector('.logout');
const sortAscButtonEl = document.querySelector('.sort-ascending');
const sortDescButtonEL = document.querySelector('.sort-descending');

addAbilityToDeleteItems();
pageLogout();
buttondisableIfNoInput();
addAbilityToAddItems();
addAbilityToChangeRanking();
addAbilityToSortAscendinf();
abilityToSortItems();
addAbilityToSortDescending();
addAbilityToUpdateItem();

function renderTodos(items)
{
  //const listEl = document.querySelector('#todo-app .todos');
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
                      ${item.task}
                  </span>
              </div>
              
              <div class="list-count">
                  <button class="minus" data-id="${item.itemId}" ${item.ranking==1 ? "disabled":""} > - </button>
                  <span class="item item-count" data-id="${item.itemId}" >
                      ${item.ranking}
                  </span>
                  <button class="plus" data-id="${item.itemId}" ${item.ranking==5 ? "disabled":""}> + </button>
              </div>
          
          </li>
      `;
  }).join('');
  listEl.innerHTML = html;
}

function poll(shouldpoll)
{
  if(shouldpoll && !appSate.pollId )
  {
    appSate.pollId = setInterval( ()=>
    {
        fetchGet()
        .then (userInfo => 
          {
            showContent();
            appSate.items = userInfo.todos;
            abilityToSortItems();
            renderTodos(appSate.items);
            updateStatus('');
          })
          .catch( err => {
            updateStatus(errorMessages[err.error] || err.error);
            console.log(err);
          })
    }, 5000);
  }
  if(!shouldpoll && appSate.pollId)
  {
    clearTimeout(appSate.pollId);
    appSate.pollId=null;
    appSate.ascending=false;
  }
}



function  addAbilityToDeleteItems()
{
    listEl.addEventListener('click' , (e) =>
    {
      if(e.target.classList.contains('delete'))
      {
        const itemId = e.target.dataset.id;
        deleteItem(itemId)
        .then (userInfo => 
          {
            showContent();
            appSate.items = userInfo.todos;
            abilityToSortItems();
            renderTodos(appSate.items);
            updateStatus('');
          })
          .catch( err => {
            updateStatus(errorMessages[err.error] || err.error);
            console.log(err);
          })
      }
    })
}

function pageLogout()
{
    logoutButtonEL.addEventListener('click' , (e) =>
    {
        fetchLogout()
        .then ( () =>
        {
          appSate.isLoggedIn = false;
          poll(false);
          updateStatus('');
          showLogin();
        })
        .catch( err => {
          appSate.isLoggedIn=false;
          appSate.ascending=false;
          poll(false);
          updateStatus(errorMessages[err.error] || err.error);
          showLogin();
        })
        
    });
}

function buttondisableIfNoInput()
{
  inputEl.addEventListener('input',() => 
    {
      addButtonEl.disabled = !inputEl.value;
        
    });
}

function addAbilityToAddItems()
{
  addButtonEl.addEventListener('click' , (e) =>
  {
     const task = inputEl.value;
     const regrex = /^[a-zA-z0-9]+$/;
     const item = { task:task,
                    username: appSate.username,
                    };
        if(!task.match(regrex))
        {
            updateStatus("Please enter correct name!");
        }
        else
        {
            fetchPostToAddItem(item)
            .then (userInfo => 
              {
                showContent();
                appSate.items = userInfo.todos;
                abilityToSortItems();
                renderTodos(appSate.items);
                inputEl.value='';
                updateStatus('');
              })
              .catch( err => {
                updateStatus(errorMessages[err.error] || err.error);
                console.log(err);
              })
        }
  })
}

function addAbilityToChangeRanking()
{
  listEl.addEventListener('click', (e) => 
    {
        const itemsId = e.target.dataset.id;
              
        if(e.target.classList.contains('plus'))
        {
            const item = {
                value: "increment",
                username: appSate.username,
            };
            fetchPatchRanking(item,itemsId)
            .then (item => 
              {
                showContent();
                addAbilityToUpdateItem(item);
                abilityToSortItems();
                renderTodos(appSate.items);
                updateStatus('');
              })
              .catch( err => {
                updateStatus(errorMessages[err.error] || err.error);
                console.log(err);
              });
        }
        if(e.target.classList.contains('minus'))
        {

            const item = {
                value: "decrement",
                username: appSate.username,
            };
            fetchPatchRanking(item,itemsId)
            .then (item => 
              {
                showContent();
                addAbilityToUpdateItem(item);                
                abilityToSortItems();
                renderTodos(appSate.items);
                updateStatus('');
              })
              .catch( err => {
                updateStatus(errorMessages[err.error] || err.error);
                console.log(err);
              });
        }
        
    })
}

function addAbilityToUpdateItem(item)
{
  for(let key in appSate.items)
  {
    if(key==item.itemId)
    {
      appSate.items[key].ranking = item.ranking;
    }
    };
}

function addAbilityToSortAscendinf()
{
  sortAscButtonEl.addEventListener('click' ,(e) => 
  {
    appSate.ascending=true;
    appSate.descending=false;
    abilityToSortItems();
    renderTodos(appSate.items);
  });
}

function addAbilityToSortDescending()
{
  sortDescButtonEL.addEventListener('click' ,(e) => 
  {
    appSate.descending=true;
    appSate.ascending=false;
    abilityToSortItems();
    renderTodos(appSate.items);
  });
}

function abilityToSortItems()
  {
      if(appSate.ascending)
      {
        appSate.descending=false;
        const SortedItem = Object.fromEntries(Object.entries(appSate.items).sort( (a,b) => a[1].ranking- b[1].ranking));
        appSate.items = SortedItem;
        
      }

      if(appSate.descending)
      {
        appSate.ascending=false;
        const SortedItem = Object.fromEntries(Object.entries(appSate.items).sort( (a,b) => b[1].ranking- a[1].ranking));
        appSate.items = SortedItem;
      }
      
  }
   




