import api from "./api";

export async function getUsers() {
  return await api
    .get("/users")
    .then((res) => res.data)
    .catch((err) => {
      console.log("GET error", err);
    });
}

export async function postUsers(newUser) {
  return await api
    .post("/users", newUser)
    .then((res) => res.data)
    .catch((err) => {
      console.log("POST error", err);
    });
}

export async function deleteUsers(id) {
  return await api
    .delete(`/users/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      console.log("DELETE error", err);
    });
}

export async function putUsers(id, updatedUser) {
  return await api
    .put(`/users/${id}`, updatedUser)
    .then((res) => res.data)
    .catch((err) => {
      console.log("PUT error", err);
    });
}
