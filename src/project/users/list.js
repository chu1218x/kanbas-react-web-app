import * as client from './client';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function UserList() {
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);

    const fetchUsers = async () => {
        const users = await client.findAllUsers();
        setUsers(users);
    };
    const fetchUser = async () => {
        const user = await client.account();
        setCurrentUser(user);
    };

    useEffect(() => {
        fetchUsers();
        fetchUser();
    }, []);

    return (
        <div>
            {currentUser && currentUser.role === 'ADMIN' && (
                <>
                    <h2>Users</h2>
                    <div className="list-group">
                        {users.map((user) => (
                            <Link
                                key={user._id}
                                to={`/project/users/${user._id}`}
                                className="list-group-item"
                            >
                                {user.username}
                            </Link>
                        ))}
                    </div>
                </>
            )}
            {currentUser && currentUser.role !== 'ADMIN' && (
                <h1>Access Denied</h1>
            )}
        </div>
    )
}

export default UserList;