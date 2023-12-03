import * as client from './client';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Account() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const fetchUser = async () => {
        try {
            const user = await client.account();
            setUser(user);
        } catch (error) {
            navigate('/project/signin');
        }
    }

    const updateUser = async () => {
        const status = await client.updateUser(user._id, user);
    }

    const signout = async () => {
        const status = await client.signout();
        navigate('/project/signin');
    }

    useEffect(() => {
        fetchUser();
    }, []);


    return (
        <div>
            <h1>Account</h1>
            {user && (
                <div>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    <input
                        type='email'
                        className='form-control'
                        value={user.email}
                        onChange={(e) => setUser({
                            ...user,
                            email: e.target.value
                        })}
                    />
                    <p>First Name: {user.firstName}</p>
                    <input
                        type='text'
                        className='form-control'
                        value={user.firstName}
                        onChange={(e) => setUser({
                            ...user,
                            firstName: e.target.value
                        })}
                    />
                    <p>Last Name: {user.lastName}</p>
                    <input
                        type='text'
                        className='form-control'
                        value={user.lastName}
                        onChange={(e) => setUser({
                            ...user,
                            lastName: e.target.value
                        })}
                    />
                    <p>Role: {user.role}</p>

                    <button className='btn btn-primary'
                        onClick={updateUser}>Update
                    </button>
                </div>
            )}

            <button className='btn btn-danger'
                onClick={signout}>Sign Out
            </button>

            {user && user.role === "ADMIN" && (
                <Link to="/project/users" className="btn btn-warning">
                    Users
                </Link>
            )}


        </div>
    );
}

export default Account;