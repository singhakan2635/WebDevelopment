const express = require('express');
const app = express();
const PORT = 3000;

const chat = require('./chat'); // "chat" holds all the non-web logic for managing users/messages
const chatWeb = require('./chat-web'); // "chat-web" holds the templates for the generated HTML

app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.send(chatWeb.chatPage(chat));
});


// Below includes an example of pulling fields from a POST request body
app.post('/chat', express.urlencoded({ extended: false }), (req, res) => {
  const { msg } = req.body; // You'll need to add something!
  // Fill in here!
  //res.send(`${JSON.stringify(req.body.sender)}`);
  
  
  let sender = req.body.username;
  let text = req.body.text; 
  chat.addMessage({sender,text});
  //console.log(sender+":"+text);
  //console.log(JSON.stringify(req.body));
  res.redirect('/');
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
