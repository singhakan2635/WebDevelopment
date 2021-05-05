const users = {
    73467: {
        username: "Akanksha",
        active: true,
        sid:73467
    },
    87364: {
        username :"Push",
        active:true,
        sid:87364
    }

};

const messages = [
    {
        sender:"Akanksha",
        text: "How are you?",
    },
    {
        sender:"Push",
        text:"I'm doing good!"
    }

];

const findUserbySid = (username) => {
    for(let user in Object.values(users))
    {
        if(user.username===username)
        {
            return users.sid;
        }
    }
    return null;
};

const addUsers = (username, id) => 
{
    users[id] = {
        username: username,
        active : true,
        sid : id
    };

};

const removeUser = (id) =>
{
    users[id].active = false;
}

const getUsers = () => {
    const usernames = [];

    Object.keys(users).map( (key) => 
    {
        if(users[key].active===true)
        {
            usernames.push(users[key].username);
        }
    });
    
    return usernames;
};

const addMessages = ({sid, text}) =>
{
    messages.push({sender: users[sid].username, text});
}

const data = {users, messages, addMessages, addUsers, removeUser, findUserbySid, getUsers};

module.exports = data;