const logout = ({logout}) => 
{
    return(
        <div className="logout">
            <button className="button-logout" onClick={logout}> Logout </button>
        </div>
    );

}

export default logout;