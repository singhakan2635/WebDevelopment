const express = require('express');
const cookieParser = require('cookie-parser');
const uuid = require('uuid').v4;
const app = express();
const PORT = 3000;
const list = require('./item-list');

app.use(express.static('./public'));
app.use(cookieParser());

// TODO: all this session code should move to another file
const sessions = require('./sessionInfo');


app.get('/session', (req, res) => {
  // check cookie from request
  const sid = req.cookies.sid;
  if(!sid) {
    res.status(401).json({ error: 'login-required'});
    return;
  }
  if(!sessions.isValidSession(sid) ) 
  {
    res.status(403).json({ error: 'login-invalid'});
    return;
  }

  res.status(200).json(sessions.userSession[sid]);
});

app.post('/session', express.json(), (req, res) => {
  const { username } = req.body;
  const errors = sessions.validateUsername(username);
  if( errors ) {
    res.status(400).json({ errors });
    return;
  }
  const sid = sessions.createSession(username);
  if(!sid)
  {
    res.status(406).json({ error: 'no-sid-generated'});
  }
  res.cookie('sid', sid);
  res.status(200).json(sessions.userSession[sid]);
});

app.delete('/items/:itemId', (req , res) => 
{
    const sid = req.cookies.sid;
    if(!sid)
    {
      res.status(401).json({ error: 'sid-missing'});
    }
    const itemId = req.params.itemId;
    if(!itemId)
    {
      res.status(403).json({ error: 'missing-id'});
    }
    
    const errors = sessions.deleteuserinfo(itemId,sid);
    if( errors ) {
      res.status(400).json({ errors });
      return;
    }
    res.status(200).json(sessions.userSession[sid]);
})

app.delete('/session' , ( req, res) => 
{
   const sid = req.cookies.sid;
   if(!sid)
    {
      res.status(401).json({ error: 'sid-missing'});
    }
   res.clearCookie('sid');
   res.sendStatus(200);
})

app.get('/items/', (req, res) => 
{
  const sid = req.cookies.sid;
  if(!sid)
    {
      res.status(401).json({ error: 'sid-missing'});
    }
  const errors = sessions.updateSessionData(sid,sessions.userSession[sid].username);
  if( errors===400 ) 
  {
    res.status(400).json({ error : 'username-missing' });
    return;
  }
  res.status(200).json(sessions.userSession[sid]);
})

app.post('/items/' , express.json(), (req , res) =>
{
  const item = req.body;
  const sid = req.cookies.sid;
  if(!sid)
    {
      res.status(401).json({ error: 'sid-missing'});
    }
  const errors = sessions.addItemtoUser(item.task, item.username,sid);
  if( errors === 409 ) 
  {
    res.status(409).json({ error: 'duplicate' });
    return;
  }
    res.status(200).json(sessions.userSession[sid]);
  
  
})

app.patch('/items/:itemsId',express.json(), (req, res) => 
{
    const item = req.body;
    if(!item)
    {
      res.status(403).json({ error: 'missing-value'});
    }
    const sid = req.cookies.sid;
    if(!sid)
    {
      res.status(401).json({ error: 'sid-missing'});
    }
    const itemId = req.params.itemsId;
    if(!itemId)
    {
      res.status(403).json({ error: 'missing-id'});
    }
    const resultItem = sessions.updateItemRanking(item,itemId,sid);
    if(!resultItem)
    {
      res.status(404).json({ error: 'not-found'});
    }
    res.status(200).json(resultItem);
})

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

