import { addUser, deleteUser, updateUser } from "./userManager.js";

const userName = document.getElementById("userName");
const newUserIndo = document.getElementById("newUserInfo");

document.getElementById("addUserBtn").addEventListener("click", () => {
  addUser(userName.value);
});

document.getElementById("deleteUserBtn").addEventListener("click", () => {
  deleteUser(userName.value);
});

document.getElementById("updateUserBtn").addEventListener("click", () => {
  updateUser(userName.value, newUserIndo.value);
});
