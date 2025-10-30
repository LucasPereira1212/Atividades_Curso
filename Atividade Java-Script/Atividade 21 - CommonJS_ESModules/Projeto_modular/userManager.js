const message = document.getElementById("message");

function addUser(newUser) {
  message.textContent = `Usuário ${newUser} adicionado`;
}

function deleteUser(user) {
  message.textContent = `Usuário ${user} foi deletado`;
}

function updateUser(user, newInfo) {
  message.textContent = `O usuário ${user} adicionado nova informação: ${newInfo}`;
}

export { addUser, deleteUser, updateUser };
