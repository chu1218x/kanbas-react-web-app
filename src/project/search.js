import React, { useEffect, useState } from "react";
import * as client from "./client";
import { Link, useParams, useNavigate } from "react-router-dom";

function Search() {
    const { search } = useParams();
    const [searchTerm, setSearchTerm] = useState(search);
    const [results, setResults] = useState(null);
    const navigate = useNavigate();

    const fetchMovies = async (search) => {
        const results = await client.findMoviesByTitle(search);
        setResults(results);
        setSearchTerm(search);
    };

    useEffect(() => {
        if (search) {
            fetchMovies(search);
        }
    }, [search]);


    return (
        <div>
            <h1>Search</h1>

            <button onClick={() => navigate(`/project/search/${searchTerm}`)}
                className="btn btn-primary
                float-end">Search</button>
            <input
                type="text"
                className="form-control w-75"
                placeholder="Search..."
                value={searchTerm}
                onChange={(event) => {
                    setSearchTerm(event.target.value);
                }}
            />

            <ul className="list-group">
                {results && results.map((movie, index) => (
                    <li key={index} className="list-group-item">
                        <Link to={`/project/details/${movie.imdbID}`}>
                            <h3>{movie.Title}</h3>
                            <img src={movie.Poster} alt={movie.Title} />
                        </Link>
                    </li>

                ))}
            </ul>

        </div>
    );
}
export default Search;