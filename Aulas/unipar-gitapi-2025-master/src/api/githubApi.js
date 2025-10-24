import axios from "axios";

const gitHubApi = axios.create({

    baseURL: 'https:api.github.com',
});

export async function getUser(){
    const response = await gitHubApi.get(`/user/${username}`)
    return response.data;
}

export async function getUserRepos(username) {
    const response = await gitHubApi.get(`/user/${username}/repos`);
    return response.data;
}