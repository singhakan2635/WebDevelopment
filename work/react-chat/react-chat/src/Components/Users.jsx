const Users = ({ users }) => {
    return (
        <div>
            
            <ul className="users">
            <h2>Users List</h2>
                {users.map((user, index) => (
                    <li key={index}>
                        <div className="user">
                            <span className="username">{user}</span>
                        </div>
                        
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default Users;