import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as client from './client';
import * as userClient from './users/client';
import * as likesClient from './likes/client';

function Details() {
    const [currentUser, setCurrentUser] = useState(null);
    const { imdbID } = useParams();
    const [movie, setMovie] = useState(null);
    const [likes, setLikes] = useState([]);

    const fetchUser = async () => {
        try {
            const user = await userClient.account();
            setCurrentUser(user);
        } catch (error) {
            setCurrentUser(null);
        }
    };

    const fetchMovie = async () => {
        const movie = await client.findMovieByImdbID(imdbID);
        setMovie(movie);
    };

    const currentUserLikesMovie = async () => {
        const _likes = await likesClient.createUserLikesMovie(currentUser._id, imdbID);
        setLikes([_likes, ...likes])
    };

    const fetchLikes = async () => {
        const likes = await likesClient.findUsersThatLikeMovie(imdbID);
        setLikes(likes);
    }


    useEffect(() => {
        fetchMovie();
        fetchUser();
        fetchLikes();
    }, []);

    return (
        <div>
            {movie && (
                <div>
                    {
                        currentUser && (
                            <button
                                onClick={currentUserLikesMovie}
                                className='btn btn-warning float-end'>Like</button>
                        )
                    }

                    <h1>{movie.Title}</h1>
                    <p>{movie.Plot}</p>
                    <img src={movie.Poster} alt={movie.Title} />

                    <h2>Likes</h2>
                    <ul className="list-group">
                        {likes.map((like, index) => (
                            <li key={index} className="list-group-item">
                                {like.user.firstName} {like.user.lastName}
                                <Link to={`/project/users/${like.user._id}`}>
                                    @{like.user.username}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <p>Director: {movie.Director}</p>
                    <p>Actors: {movie.Actors}</p>
                    <p>Genre: {movie.Genre}</p>
                    <p>Released: {movie.Released}</p>
                    <p>Runtime: {movie.Runtime}</p>
                    <p>Language: {movie.Language}</p>
                    <p>Country: {movie.Country}</p>
                    <p>Awards: {movie.Awards}</p>
                    <div>
                        <h2>Ratings:</h2>
                        {movie.Ratings.map((rating, index) => (
                            <p key={index}>{rating.Source}: {rating.Value}</p>
                        ))}
                    </div>

                </div>
            )}
        </div>
    );

}

export default Details;
