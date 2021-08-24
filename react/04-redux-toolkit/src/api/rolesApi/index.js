import { wait } from '../utils';
import data from './db';

const rolesApi = {
  // GET /roles
  async getRoles() {
    await wait();

    return data;
  },
};

export default rolesApi;
