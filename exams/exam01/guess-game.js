"use strict";

const wordlist = require('./word'); 
const gameuser = require('./game-user');
const gameWeb = require('./game-web');

const guessgame = {
    wordAttempt: function(guessword, sid)
    {
        if(!gameuser.userInfo[sid].guessInfo.includes(guessword))
        {
            gameuser.userInfo[sid].turns++;
        }
        //in case the secret word is not assigned
        if(gameuser.userInfo[sid].secretwords=="")
        {
            gameuser.userInfo[sid].secretwords=guessgame.generateSecretWord(wordlist);
            console.log("The secret word for the SID - "+sid+" is : " +  gameuser.userInfo[sid].secretwords);
        }
        //In case the secretword is matched
        if(guessgame.matchWord(gameuser.userInfo[sid].secretwords,guessword))
        {
            return true;
        }
        if(!gameuser.userInfo[sid].guessInfo.includes(guessword))
        {
            
            const matches = guessgame.compareWord(gameuser.userInfo[sid].secretwords, guessword);
            gameuser.userInfo[sid].guessInfo.push(guessword);
            gameuser.userInfo[sid].guessWords.unshift(`${guessword} Matches ${matches} & Number of Turn - ${gameuser.userInfo[sid].turns}`);
            gameuser.userInfo[sid].currentguess = `${guessword} matches ${matches}`;
        }
        return false;

    },
    matchWord: function(word, guess)
    {
        word = word.toUpperCase();
        guess = guess.toUpperCase();
        return word===guess;
    },
    generateSecretWord: function(wordlist)
    {
        return wordlist[Math.floor(Math.random()*wordlist.length)];
    },
    compareWord: function (secretword, userword)
    {
        let matches = 0;
        const lettercount ={};  

        for( let letter of secretword.toLowerCase())
        {
            if(!lettercount[letter])
            {
                lettercount[letter] =1;
            }
            else
            {
                lettercount[letter]++;
            }
        }
        for( let letter of userword.toLowerCase() )
        {
            if(lettercount[letter]>0)
            {
                lettercount[letter]--;
                matches++;
            }
        } 
        return matches;
    },
    resetGame: function(sid)
    {
        gameuser.userInfo[sid].secretwords = guessgame.generateSecretWord(wordlist);
        console.log("The secret word for the SID - "+sid+" is : " +  gameuser.userInfo[sid].secretwords);
        gameuser.userInfo[sid].turns = 0;
        gameuser.userInfo[sid].guessWords = [];
        gameuser.userInfo[sid].guessInfo = [];
        gameuser.userInfo[sid].currentguess ="";
    }

};

module.exports = guessgame;
