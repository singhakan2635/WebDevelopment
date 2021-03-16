const chat = require("./chat");
const chatWeb = {
  chatPage: function(chat) {
    // Fill in anything below!
    return `
      <!doctype html>
      <html>
        <head>
          <title>Chat</title>
          <link rel="stylesheet" href="chat.css">
        </head>
        <body>
          <div id="chat-app">
            <div class="display-panel">
              ${chatWeb.getUserList(chat)}
              ${chatWeb.getMessageList(chat)}
            </div>
            ${chatWeb.getOutgoing(chat)}
          </div>
        </body>
      </html>
  `;
  },
  
  getMessageList: function(chat) 
  {
    return `<ol class="messages"> ` +
      Object.values(chat.messages).map(val =>`
      <li>
      <div class = "display-chat">
        <div class="sender">
          <span class = "messageName">${val.sender}</span>
        </div>
        <div class="text">
          <p class ="messageText">${val.text}</p>
        </div>
      </div>
      </li>`).join('')+
      `</ol>`;
  },
  
  getUserList: function(chat) {
    return `<ul class="users"> <h2 class=header-user>Users</h2>` +
    Object.values(chat.users).map( user => `
      <li>
        <div class="user">
          <span class="username">${user}</span>
        </div>
      </li>
    `).join('') +
    `</ul>`;
  },
  getOutgoing: function() {
    // Fill in!
    return `<div class="form">
      <form action="/chat" method="POST">
        <div class="">
          <input type="hidden" name="username" value="Akanksha">
        </div>
        <div class="message-bar">
          <div class = "enter-message">
            <input type="text" name="text" placeholder="Enter Your Message Here" required> 
          </div>
          <button type="submit">Send</button>
        </div>
    </div>`
  }
};
module.exports = chatWeb;
