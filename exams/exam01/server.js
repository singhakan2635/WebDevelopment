"use strict";

const express = require('express');
const app = express();
const PORT = 3000;

const cookieParser = require('cookie-parser');
const uuidv4 = require('uuid').v4;

const wordlist = require('./word'); 
const gameuser = require('./game-user');
const guessgame = require('./guess-game');
const gameWeb = require('./game-web');
const login = require('./login');

app.use(cookieParser());
app.use(express.static('./public'));

let winner = false;
let invalid= false;
let valid=false;
let duplicate=false;

app.get('/',express.urlencoded({ extended: false }), (req, res) => 
{
    const sid = req.cookies.sid;

    if(!sid || !gameuser.userInfo[sid])
    {
        res.send(login());
        return;
    }
    
    gameuser.verifyUniqueID(req.cookies, res, uuidv4);
    
    res.send(gameWeb.gamePage(sid,winner,invalid,valid,duplicate));
});

app.post('/login', express.urlencoded({ extended: false }), (req, res) => 
{
    const uuid = uuidv4();
    gameuser.verifyUniqueID(req.cookies, res, uuid);
    res.cookie('sid', uuid);
    res.redirect('/');

});

app.post('/submitGame', express.urlencoded({ extended: false }), (req, res) => 
{
    gameuser.verifyUniqueID(req.cookies, res, uuidv4);
    let guessword = req.body.guessword;
    guessword = guessword.toUpperCase();
    const sid = req.cookies.sid;
    if(gameuser.userInfo[sid].guessInfo.includes(guessword))
        {
            duplicate=true;
            valid=false;
            invalid=false;
            winner=false;
            res.redirect('/');
        }
    else if(guessword && wordlist.includes(guessword) && guessword.length===wordlist[0].length)
    {    
        duplicate=false;
        invalid=false;
        let result = guessgame.wordAttempt(guessword,sid);
        if(result)
        {
            winner = true;
            res.redirect('/');
        }
        else
        {
            valid=true;
            res.redirect('/');
        }
    }
    else{
        invalid=true;
        res.redirect('/');
    }
});

app.post('/playAgain', express.urlencoded({ extended: false }), (req, res) =>{
    const sid = req.cookies.sid;
    if(!sid || !gameuser.userInfo[sid])
    {
        res.send(login());
        return;
    }
    gameuser.verifyUniqueID(req.cookies, res, uuidv4);    
    guessgame.resetGame(sid);
    winner = false;
    valid=false;
    res.redirect("/");

} );


app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));