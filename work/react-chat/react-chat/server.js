const express = require('express');
const cookieParser = require('cookie-parser');
const uuid = require('uuid').v4;
const app = express();
const PORT = 5000;
//const session = require('./session');
const data =require('./data');
const permittedUser = require('./permitted-user');

app.use(cookieParser());
app.use(express.json());
app.use(express.static('./build'));

app.get('/api/session', (req, res) => {
  const sid = req.cookies.sid;
  if( !sid) {
    res.status(401).json({ error: 'session-required' });
    return;
  }
  else if(data.users[sid] && data.users[sid].active){
    res.status(200).json("success");
  }
  else res.status(401).json({error:"session-invalid"});
});

app.post('/api/session', (req, res) => {
  const username = req.body.username;
  if(!username)
  {
    res.status(400).json({ error: 'username-required' });
        return;
  }
  if(!permittedUser.permittedUser(username))
  {
    res.status(403).json({ error: 'unauthorized-username' });
    return;
  }
  else if(username==='existingUser'){
    res.status(200).json({users: data.getUsers(), messages: data.messages});
    return;
  }
  else if(data.findUserbySid(username))
  {
    const id = data.findUserbySid(username);
    data.users[id].active = true;
    res.cookie('sid', data.users[id].sid);
    res.status(200).json({users: data.getUsers(), messages: data.messages});
    return;
  }
  else {
    const sid = uuid();
  data.addUsers(username,sid);
  res.cookie('sid',sid);
  res.status(200).json({users: data.getUsers(), messages: data.messages});
  }
});

app.delete('/api/session', (req, res) => {
  const sid = req.cookies.sid;
  if(!sid)
  {
    res.status(400).json({ error: 'session-required'});
  }
  if(!data.users[sid])
  {
    res.clearCookie('sid');
    res.status(403).json({ error: 'session-invalid'});
    return;
  }
  data.removeUser(sid);

  res.clearCookie('sid');
  res.status(200).json({ error: 'success' });
});

app.get('/users', (req, res) =>
{
  const sid = req.cookies.sid;
  if(!sid)
  {
    res.status(401).json({ error: 'session-required' });
    return;
  }
  if(!data.users[sid])
  {
    res.clearCookie('sid');
    res.status(403).json({ error: 'session-invalid'});
    return;
  }
  res.status(200).json(data.getUsers());
})

app.get('/chats', (req, res) =>
{
  const sid = req.cookies.sid;
  if(!sid)
  {
    res.status(401).json({ error: 'session-required' });
    return;
  }
  if(!!data.users[sid])
  {
    res.clearCookie('sid');
    res.status(403).json({ error: 'session-invalid'});
    return;
  }
  res.status(200).json(data.messages);
})

app.post('/chats', (req, res) =>
{
  const sid = req.cookies.sid;
  if(!sid)
  {
    res.status(401).json({ error: 'session-required' });
    return;
  }
  if(!data.users[sid])
  {
    res.clearCookie('sid');
    res.status(403).json( { error: 'session-invalid'});
    return;
  }
  const text = req.body.text;
  data.addMessages({sid, text});
  res.status(200).json({users: data.getUsers(), messages: data.messages});
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/`);
});
