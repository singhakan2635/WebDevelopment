const permittedUser = (username) =>
{

    if(username.toLowerCase() === 'dog')
    {
        return false;
    }
    if (!username.match(/^[A-Za-z0-9_-]{1,26}$/)) {
        return false;
      }
      return true;
};

module.exports = {permittedUser};