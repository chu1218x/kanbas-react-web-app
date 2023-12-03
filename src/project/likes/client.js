import axios from "axios";

const BASE_API = "http://localhost:4000/api";
const USERS_API = `${BASE_API}/users`;
const LIKES_API = `${BASE_API}/likes`;

export const findAllLikes = async () => {}

export const createUserLikesMovie = async (userId, imdbID) => {
    const response = await axios.post(`${USERS_API}/${userId}/likes/${imdbID}`);
    return response.data;
}

export const deleteUserLikesMovie = async (userId, imdbID) => {}

export const findUsersThatLikeMovie = async (imdbID) => {
    const response = await axios.get(`${LIKES_API}/${imdbID}/users`);
    return response.data;
}

export const findMoviesLikedByUser = async (userId) => {
    const response = await axios.get(`${USERS_API}/${userId}/likes`);
    return response.data;
}
