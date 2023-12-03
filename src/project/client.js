import axios from "axios";

export const OMDB_API = "http://www.omdbapi.com/?";
export const API_Key = process.env.REACT_APP_OMDB_API_KEY;

export const findMoviesByTitle = async (searchTerm) => {
    const response = await axios.get(
        `${OMDB_API}apikey=${API_Key}&s=${searchTerm}`
    );
    return response.data.Search;
};

export const findMovieByImdbID = async (imdbID) => {
    const response = await axios.get(
        `${OMDB_API}apikey=${API_Key}&i=${imdbID}`
    );
    return response.data;
}