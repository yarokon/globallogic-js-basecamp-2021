import { wait, getTimestamp, throwError } from '../utisl';
import data from './db';

const getId = (
  (id = data.length) =>
  () =>
    ++id
)();

const api = {
  // GET /users
  async getUsers() {
    await wait(1000);

    return data;
  },
  // GET /users/:id
  async getUser(id) {
    await wait();

    const user = data.find(u => u.id === id);

    if (user) {
      return user;
    } else {
      throwError(id);
    }
  },
  // POST /users
  async createUser(user) {
    await wait();

    const newUser = {
      ...user,
      id: getId(),
      timestamp: getTimestamp(),
    };

    data.push(newUser);

    return newUser;
  },
  // PUT /users
  async editUser(user) {
    await wait();

    const index = data.findIndex(u => u.id === user.id);

    if (~index) {
      data[index] = {
        ...user,
        timestamp: getTimestamp(),
      };
    } else {
      throwError(user.id);
    }

    return data[index];
  },
  // DELETE /users
  async deleteUser(user) {
    await wait();

    const index = data.findIndex(u => u === user.id);

    if (~index) {
      return data.splice(index, 1);
    } else {
      throwError(user.id);
    }
  },
  // GET /roles
  async getRoles() {
    await wait();

    return ['user', 'super-user', 'admin'];
  },
};

export default api;
