"use strict";

const gameuser = require('./game-user');
const guessgame = require('./guess-game');

const wordlist = require('./word');

const gameWeb = 
{
    gamePage: function(sid,winner,invalid,valid,duplicate)
    {
        return `
        <!DOCTYPE html>
        <html>
            <head>
                <title>Guess Word</title>
                <link rel="stylesheet" href="game.css">
            </head>
            <body>
                <div id="play-guess">
                    <div class="container">
                    <div class="header-game">
                        <h1>Welcome To Word Guess Game!</h1>
                    </div>
                    <div class="display-wordlist">
                        ${gameWeb.displayWordList(wordlist)}
                    </div>
                    <div class="display-guess-word">
                        ${gameWeb.guessSelectedWord(sid)}
                    </div>
                    <div class="guess-option">
                        ${gameWeb.createForm()}
                    </div>
                    <div class="display-message">
                        ${gameWeb.checkMessage(sid,winner,invalid,valid,duplicate)}
                    </div>
                    </div>
                    <div class="logout">

                    </div>
                </div>
            </body>
        </html>
        `;
        
    },
    displayWordList: function(wordlist)
    {
        return `
            <div class = "display-word-list">
                <h3> Let's Guess a Word From the List </h2> 
                <div class="list-word">
                    <ul class="unordered-list">`+
                    wordlist.map( word => 
                        `
                          ${word}
                    `).join(',')
                +`</ul>
                </div>
            </div>
        `;
    },
    guessSelectedWord: function(sid)
    {
        return `
            <div class = "guess-word scrollable">
                <h3>Words Guessed Till Now:</h3>
                <div class = "guess-scrollable">
                    <ul>` +
                    gameuser.userInfo[sid].guessWords.map (word =>
                       `
                        <li>  ${word}</li>
                         
                       `).join('')
                + `</ul>
                </div>
            </div>
        `;
    },
    
    createForm: function()
    {
        
        return `
            <div class="form-guess">
                <form action="/submitGame" method="POST">
                    
                    <input type ="text" name="guessword" placeholder="Guess the Word">
                    <br>
                    <button type="submit">Guess Now!</button>
                </form>
            </div>
        `;
        
        
    },
    checkMessage: function(sid,winner, invalid,valid,duplicate)
    {
        if(valid &&!winner && !invalid)
        {
            return `${gameWeb.validtry(sid)}`;
        }
        else if(winner && !invalid && !duplicate)
        {
            return `${gameWeb.gameWinner(sid)}`;
        }
        else if(invalid)
        {
            return `${gameWeb.invalidGame(sid)}`;
        }
        else if(duplicate)
        {
            return `${gameWeb.duplicateWord(sid)}`;
        }
        else
        {
            return `<h2>Start Guessing</h2>`;
        }

    },
    gameWinner: function(sid)
    {
        return `
            <h2>Correct Guess!</h2>
            <h3>You Won the Game in ${gameuser.userInfo[sid].turns} turns!</h3>
            ${gameWeb.playAgain(sid)}
        `;
    },
    playAgain: function(sid)
    {
        return `
        <div class="play-form">
            <form action="playAgain" method="POST">   
                <input type="hidden" name="playagain" >             
                <button type="submit">Play Again!</button>
            </form>
        </div>    
        `;
    },
    invalidGame: function(sid)
    {
        return `
            <h2>Invalid Guess!</h2>
            <h3>Word Entered is Not One of the Permitted Words .Try to Guess Again!</h3>
        `;
    },
    validtry: function(sid)
    {
        return `
            <h2>Valid Guess!</h2>
            <h3> ${gameuser.userInfo[sid].currentguess} </h3>
        `;
    },
    duplicateWord: function(sid)
    {
        return `
            <h2>Previously Guessed!</h2>
            <h3> Try to Guess A New Word Again! </h3>
        `;
    }

}

module.exports = gameWeb;