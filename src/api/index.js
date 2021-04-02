import axios from 'config';
// temporary user api
export const login = (body) => axios.post(`/auth/login`, body);
export const signup = (body) => axios.post(`/auth/signup`, body);

