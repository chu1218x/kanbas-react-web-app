import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as client from './client';
import * as likesClient from '../likes/client';

function UserDetails() {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [likes, setLikes] = useState([]);
    const navigate = useNavigate();

    const fetchLikes = async () => {
        const likes = await likesClient.findMoviesLikedByUser(id);
        setLikes(likes);
    }

    const fetchUser = async () => {
        const user = await client.findUserById(id);
        setUser(user);
    }

    const updateUser = async () => {
        const status = await client.updateUser(id, user);

    }

    const deleteUser = async (id) => {
        const status = await client.deleteUser(id);
        navigate('/project/users');
    }

    useEffect(() => {
        fetchUser();
        fetchLikes();
    }, []);


    return (
        <div>
            <h1>User Details</h1>
            {user && (
                <div>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    <p>First Name:
                        <input
                            type='text'
                            className='form-control'
                            value={user.firstName}
                            onChange={(e) => setUser({
                                ...user,
                                firstName: e.target.value
                            })}
                        />
                    </p>
                    <p>Last Name: {user.lastName}</p>
                    <p>Role: {user.role}</p>
                    <button className='btn btn-primary'
                        onClick={updateUser}>Update</button>

                    <button className='btn btn-danger'
                        onClick={() => deleteUser(user._id)}>Delete</button>

                    <h2>Likes</h2>
                    <ul className="list-group">
                        {likes.map((like, index) => (
                            <li key={index} className="list-group-item">
                                <Link to={`/project/details/${like.imdbID}`}>
                                    {like.imdbID}
                                </Link>
                                {/* <img src={like.movie.Poster} alt={like.movie.Title} /> */}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default UserDetails;