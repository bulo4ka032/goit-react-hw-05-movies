import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3'

const searchParams = new URLSearchParams(
    {
        api_key: 'b026a5e55a93706d87a5f53b5d4e521f',
        language: 'en-US',
        include_adult: false,
    }
);

export const getTrandibgMovies = async () => {
    const { data } = await axios.get(`/trending/movie/week?${searchParams}`);
    return data.results;
}

export const getMovieByQuery = async query => {
    const { data } = await axios.get(`/search/movie?${searchParams}&query=${query}`);
    return data.results;
}

export const getMovieById = async id => {
    const { data } = await axios.get(`/movie/${id}?${searchParams}`);
    return data;
}

export const getCreditsByMovieId = async id => {
    const { data } = await axios.get(`/movie/${id}/credits?${searchParams}`);
    return data.cast;
}

export const getReviewsByMovieId = async id => {
    const { data } = await axios.get(`/movie/${id}/reviews?${searchParams}`);
    return data.results;
}

