import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const createUser = (data) => httpClient.post("/users", data);

// export const getAllUsers = () => httpClient.get("/users");
// export const getUser = (id) => httpClient.get("/users", id);
