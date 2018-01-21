const users = require('./users.js');
const { createError } = require('micro');

let cachedUsers = [];

const _getUsers = async () => {
  if (cachedUsers.length > 0) {
    return cachedUsers;
  } else {
    let loadedUsers = await users;
    cachedUsers = loadedUsers;
    return loadedUsers;
  }
};
exports.getUser = async id => {
  let allUsers = await _getUsers();
  if (id >= 0 && id < allUsers.length) {
    let user = allUsers[id];
    return user;
  }
  throw createError(404, 'User not found');
};

exports.getUsers = async () => {
  return await _getUsers();
};
