"use strict";
const userInfo = {};


const uuidArray = [];
const verifyUniqueID = function(req, res, uuid)
{
    userInfo[uuid] = {
                currentguess:"",
                guessInfo:[],
                guessWords : [],
                secretwords: "",
                turns : 0,
                sid : uuid,
                loginTime: Date(),
    };
    return true;
};

module.exports = {verifyUniqueID , userInfo, uuidArray};