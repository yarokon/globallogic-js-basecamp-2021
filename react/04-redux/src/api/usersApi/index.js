import { wait, createGetId, getTimestamp, throwError, omit } from '../utils';
import data from './db';

const getId = createGetId(data.length);

const usersApi = {
  // GET /users
  async getUsers() {
    await wait(2000);

    return [...data];
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
      id: getId(),
      ...omit(user, ['id', 'timestamp']),
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

      return data[index];
    } else {
      throwError(user.id);
    }
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
};

export default usersApi;
